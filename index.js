import userAuth from './auth/jwt strategy/jwt.js';
import userSchema from './db/schemas/User.js';
import restaurantSchema from './db/schemas/Restaurant.js';
import validation from './validation/validation.js';
import pathHandler from './middleware/path-handler.js';
import errorHandler from './middleware/error-handler.js';
import dbConnection from './db/connection/connect.js';

const exports = {
	Auth: {
		UserAuth_JWT: userAuth,
	},
	FormValidation: {
		validate: validation,
	},
	Middleware: {
		PathHandler: pathHandler,
		ErrorHandler: errorHandler,
	},
	Database: {
		connect: dbConnection,
		Schemas: {
			User: userSchema,
			Restaurant: restaurantSchema,
		},
	},
};

export default exports;
