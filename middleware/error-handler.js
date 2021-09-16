// Global error handler middleware to avoid the "try-catch" clutter in all the controllers
const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(statusCode);
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'PRODUCTION' ? null : err.stack,
	});
};

export default errorHandler;
