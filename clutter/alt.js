// this is the basic tinyhttp cli example:
import { App } from '@tinyhttp/app';
import { logger } from '@tinyhttp/logger';

const net = {
	ifname: 'localhost',
	port: 3000,
};

const app = new App()
	.use(logger())
	.get(
		'/',
		(_, res) =>
			void res.format({
				html: () => res.send('<h1>Hello World</h1>'),
				text: () => res.send('Hello World'),
			}),
	)
	.get('/page/:page/', (req, res) => {
		res.status(200).send(`
      <h1>Some cool page</h1>
      <h2>URL</h2>
      ${req.url}
      <h2>Params</h2>
      ${JSON.stringify(req.params, null, 2)}
      ${console.log(req.params)}
	 `);
	})
	.listen(net.port, net.hostname, () =>
		console.log(`Listening on http://${net.hostname}:${net.port}`),
	);

// source:
// https://github.com/tinyhttp/tinyhttp/blob/master/examples/basic/index.js

// other cli examples:
// https://github.com/tinyhttp/tinyhttp/tree/master/examples

// syntax: $ tinyhttp --eslint new basic $DIRNAME
