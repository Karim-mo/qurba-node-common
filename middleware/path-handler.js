// Middleware to handle wrong API path calls
const notFound = (req, res, next) => {
	const error = new Error(`Path to URL Found - ${req.originalUrl}`);
	res.status(404);
	next(error);
};

export default notFound;
