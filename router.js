import { App } from '@tinyhttp/app';

const router = new App();

router
	.all((req, res, next) => {
		res.status(200).set(['Content-Type: application/json']);
		// .send(JSON.stringify({ body: 'description'})
		next();
	})

	// .route('/campsites')

	.get((_, res) => {
		res.end(`
		Will send all campsites to you
	`);
	})

	.post((req, res) => {
		res.end(`
			Adding campsite ${req.params.campsiteId}
			name: ${req.body.name}
			description: ${req.body.description}
		`);
	})

	.put((_, res) => {
		res.status(403).end(`
			PUT operation not supported on /campsites
		`);
	})

	.delete((_, res) => {
		res.end(`
		Deleting all campsites
	`);
	})

	.route('/:campsiteId')

	.get((req, res) => {
		res.end(`
		Campsite requested:
		${req.params.campsiteId}
	`);
	})

	.post((req, res) => {
		res.status(403).send(
			`
		POST operation not supported on campsite ${req.params.campsiteId}: ${req.body.name} ${req.body.description}
		`,
		);
	})

	.put((req, res) => {
		res.send(`
		Updating campsite: ${req.params.campsiteId}
		Will update campsite: ${req.body.name}
		with description: ${req.body.description}
	`);
	})

	.delete((req, res) => {
		res.end(`
		Deleting campsite: ${req.params.campsiteId}
	`);
	});

export default router;
