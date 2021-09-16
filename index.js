import userAuth from './auth/jwt strategy/jwt.js';
import userSchema from './db/schemas/User.js';
import restaurantSchema from './db/schemas/Restaurant.js';
import menuItemSchema from './db/schemas/MenuItem.js';
import userValidation from './validation/user/user-validation.js';
import restaurantValidation from './validation/restaurant/restaurant-validation.js';
import itemValidation from './validation/item/item-validation.js';

const exports = {
	UserAuth_JWT: userAuth,
	User: userSchema,
	Restaurant: restaurantSchema,
	MenuItem: menuItemSchema,
	FormValidation: {
		User: userValidation,
		Restaurant: restaurantValidation,
		Item: itemValidation,
	},
};

export default exports;
