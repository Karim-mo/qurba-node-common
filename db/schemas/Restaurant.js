import mongoose from 'mongoose';
import menuItemSchema from './MenuItem.js';

const restaurantSchema = mongoose.Schema(
	{
		userID: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		menu: [menuItemSchema],
	},
	{
		timestamps: true,
	}
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
