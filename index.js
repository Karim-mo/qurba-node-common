import userAuth from './auth/jwt strategy/jwt.js';
import userSchema from './db/schemas/User.js';
import restaurantSchema from './db/schemas/Restaurant.js';
import validation from './validation/validation.js';
import pathHandler from './middleware/path-handler.js';
import errorHandler from './middleware/error-handler.js';
import dbConnection from './db/connection/connect.js';

const Auth = {
	UserAuth_JWT: userAuth,
};

const FormValidation = {
	validate: validation,
};

const Middleware = {
	PathHandler: pathHandler,
	ErrorHandler: errorHandler,
};

const Database = {
	connect: dbConnection,
	Schemas: {
		User: userSchema,
		Restaurant: restaurantSchema,
	},
};

export { Auth, FormValidation, Middleware, Database };
