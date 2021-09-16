import mongoose from 'mongoose';

const menuItemSchema = mongoose.Schema(
	{
		userID: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		restaurantID: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Restaurant',
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
	},
	{
		timestamps: true,
	}
);

export default menuItemSchema;
