#!/home/avery/.nvm/versions/node/v16.14.0/bin/node --experimental-specifier-resolution=node
import { App } from '@tinyhttp/app';
import { logger } from '@tinyhttp/logger';
import express from 'express';
import campsitesRouter from './routes/campsitesRouter.js';
// import { sirv } from 'sirv';
const hostname = 'localhost';
const port = 3000;

const app = new App({
	settings: {
		bindAppToReqRes: true,
		networkExtensions: true,
	},
});

app.use(logger(), express.json());
// app.use(logger());

app.use('/campsites', campsitesRouter);

// app.get('/', (req, res) => {
// 	res.status(200).set(['Content-Type: text/html']).end(`
// 	<html><body>
// 	<blockquote><h3>
// 	<p>req.ip: ${req.ip}</p>
// 	<p>req.ips: ${req.ips}</p>
// 	<p>req.hostname: ${req.hostname}</p>
// 	</h3></blockquote>
// 	</body></html>
// 	`);
// });
// )
// console.log(
// 	app.middleware.map((i) => {
// 		console.dir(Object.entries(i));
// 	}),
// );
// app.use(json());

app.use((_, res) => {
	res.status(200).set(['Content-Type: text/html']).end(`
			<html><body>
				<blockquote><h3>
					<p>req.ip: ${req.ip}</p>
					<p>req.ips: ${req.ips}</p>
					<p>req.hostname: ${req.hostname}</p>
				</h3></blockquote>
			</body></html>
		`);
});

app.listen(port, hostname, () => {
	console.log(`
		@tinyhttp listening on
		http://${hostname}:${port}
	`);
});
