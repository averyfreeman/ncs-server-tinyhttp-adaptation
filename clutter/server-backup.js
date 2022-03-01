#!/home/avery/.nvm/versions/node/v16.14.0/bin/node --experimental-specifier-resolution=node
import { App } from '@tinyhttp/app';
import { logger } from '@tinyhttp/logger';
import express from 'express';
// import { sirv } from 'sirv';
const hostname = 'localhost';
const port = 3000;
// const logger = Logger();

const app = new App().use(logger(), (req) => req.json(req.app.settings));
app.use(express.json());

app.all('*', (_, res, next) => {
	res.status(200).set('Content-Type', 'application/json');
	next();
});

app
	.route('/campsites')
	.get((_, res) => {
		res.end(`
		Will send all campsites to you
	`);
	})

	.post((req, res) => {
		res.end(
			`Will add the campsite: ${req.body.name} with description: ${req.body.description}`,
		);
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

	// app
	// 	.route('/campsites')
	.get('/:campsiteId', (req, res) => {
		res.end(`
		Campsite requested:
		${req.params.campsiteId}
	`);
	})

	.post('/:campsiteId', (req, res) => {
		res.status(403).send(
			`
		POST operation not supported on ${res.json.body}
		`,
		);
	})

	.put('/:campsiteId', (req, res) => {
		res.send(`
		Updating campsite: ${req.params.partnerId}
		Will update campsite: ${req.body.name}
		with description: ${req.body.description}
	`);
	})

	.delete('/:campsiteId', (req, res) => {
		res.end(`
		Deleting campsite: ${req.params.campsiteId}
	`);
	});

app.use((_, res) => {
	res.set('Content-Type', 'text/html').status(200).send(`
			<html>
				<body>
					<h3>
						@tinyhttp/app modern express
					</h3>
				</body>
			</html>
		`);
});

app.listen(port, hostname, () => {
	console.log(`
		@tinyhttp listening on
		http://${hostname}:${port}
	`);
});
