import { ExtractJwt, Strategy } from 'passport-jwt';
import User from '../../db/schemas/User.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRET,
};

// Configure the global passport sent by the driver code to verify our jwt token using our symmetric key
const verifyToken = (passport) => {
	passport.use(
		new Strategy(options, function (jwt_payload, done) {
			console.log(jwt_payload);
		})
	);
};

// Issue and sign a jwt token using our symmetric key
const signToken = (user) =>
	jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
		expiresIn: '1d',
	});

const exports = { verifyToken, signToken };

export default exports;
