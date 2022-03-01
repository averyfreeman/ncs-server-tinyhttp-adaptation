const express = require('express');
const partnerRouter = express.Router();

partnerRouter
	.route('/')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})

	.get((req, res) => {
		// default statusCode set in .all();
		res.end('Will send all partners to you');
	})

	.post((req, res) => {
		res.end(
			`Will add the partner: ${req.body.name} with description: ${req.body.description}`,
		);
	})

	.put((req, res) => {
		// dif statusCode = overwrite .all()
		res.statusCode = 403;
		res.end(`PUT operation not supported on /partners`);
	})

	.delete((req, res) => {
		res.end('Deleting all partners');
	});

partnerRouter
	.route('/:partnerId')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})

	.get((req, res) => {
		// default statusCode set in .all();
		res.end(
			`
		partner requested:
		${req.params.partnerId}
		`,
		);
	})

	.post((req, res) => {
		res.statusCode = 403;
		res.end(`POST operation not supported on ${req.body.name}`);
	})

	.put((req, res) => {
		res.write(`
		Updating partner: ${req.params.partnerId}`);
		res.end(`
		Will update partner: ${req.body.name}
		with description: ${req.body.description}
		`);
	})

	.delete((req, res) => {
		res.end(`Deleting partner: ${req.params.partnerId}`);
	});

module.exports = partnerRouter;
