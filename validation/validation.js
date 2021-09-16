import expressValidator from 'express-validator';
import asyncHandler from 'express-async-handler';

// Takes in an array of validations and verifies each of them, aborting when a problem is detected
const validate = (validations) => {
	return asyncHandler(async (req, res, next) => {
		await Promise.all(validations.map((validation) => validation.run(req)));

		const errors = expressValidator.validationResult(req);
		if (errors.isEmpty()) {
			return next();
		}

		throw new Error('Incorrect/Empty Inputs');
	});
};

export default validate;
