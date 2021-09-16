import { ExtractJwt, Strategy } from 'passport-jwt';
import User from '../../db/schemas/User.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import passport from 'passport';
import asyncHandler from 'express-async-handler';

dotenv.config();

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRET,
};

// Configure the global passport sent by the driver code to verify our jwt token using our symmetric key
const verifyToken = () => {
	passport.use(
		new Strategy(
			options,
			asyncHandler(async (jwt_payload, done) => {
				const user = await User.findById(jwt_payload.id);
				if (user) {
					return done(null, user);
				} else {
					throw new Error('Token verification failed.');
				}
			})
		)
	);
};

// Initialize the passport middleware
verifyToken();

// Middleware to protect private routes to logged in users using passport's authenticate
const protectedRoute = asyncHandler(async (req, res, next) => {
	passport.authenticate('jwt', { session: false }, (err, user, info) => {
		if (!user || err) {
			throw new Error('Authentication failed');
		} else {
			req.user = user;
			next();
		}
	})(req, res, next);
});

// Issue and sign a jwt token using our symmetric key
const signToken = (user) =>
	jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
		expiresIn: '1d',
	});

const exports = { verifyToken, signToken, protectedRoute };

export default exports;
