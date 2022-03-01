const express = require('express');
const promotionRouter = express.Router();

promotionRouter
	.route('/')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})

	.get((req, res) => {
		// default statusCode set in .all();
		res.end('Will send all promotions to you');
	})

	.post((req, res) => {
		res.end(
			`Will add the promotion: ${req.body.name} with description: ${req.body.description}`,
		);
	})

	.put((req, res) => {
		// dif statusCode = overwrite .all()
		res.statusCode = 403;
		res.end(`PUT operation not supported on /promotions`);
	})

	.delete((req, res) => {
		res.end('Deleting all promotions');
	});

promotionRouter
	.route('/:promotionId')

	.get((req, res) => {
		// default statusCode set in .all();
		res.end(
			`
		promotion requested:
		${req.params.promotionId}
		`,
		);
	})

	.post((req, res) => {
		res.statusCode = 403;
		res.end(`POST operation not supported on ${req.body.name}`);
	})

	.put((req, res) => {
		res.write(`
	Updating promotion: ${req.params.promotionId}`);
		res.end(`
		Will update promotion: ${req.body.name}
		with description: ${req.body.description}
		`);
	})

	.delete((req, res) => {
		res.end(`Deleting promotion: ${req.params.promotionId}`);
	});

module.exports = promotionRouter;
