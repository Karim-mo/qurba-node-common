import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			index: {
				unique: true,
				partialFilterExpression: { email: { $type: 'string' } },
			},
			sparse: true,
		},
		mobile: {
			type: String,
			index: {
				unique: true,
				partialFilterExpression: { mobile: { $type: 'string' } },
			},
			sparse: true,
		},
		username: {
			type: String,
			index: {
				unique: true,
				partialFilterExpression: { username: { $type: 'string' } },
			},
			sparse: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
