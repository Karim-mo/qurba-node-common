import dotenv from 'dotenv';
import mongoose from 'mongoose';
import colors from 'colors';

dotenv.config();

// Connection to local or production mongo db clusters based on working environment(production/development)
const connectMongo = async () => {
	try {
		if (process.env.NODE_ENV == 'PRODUCTION') {
			const conn = await mongoose.connect(process.env.MONGO_URI_PROD, {
				useUnifiedTopology: true,
				useNewUrlParser: true,
				useCreateIndex: true,
			});

			console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
		} else {
			const conn = await mongoose.connect(process.env.MONGO_URI_DEV, {
				useUnifiedTopology: true,
				useNewUrlParser: true,
				useCreateIndex: true,
			});

			console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
		}
	} catch (error) {
		console.error(`Error: ${error.message}`.red.underline.bold);
		process.exit(1);
	}
};

export default connectMongo;
