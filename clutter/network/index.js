import dns from 'node:dns';

// ensure resolution of given address and hostname. Reference: https://nodejs.org/api/dns.html#dns_dns_resolve_hostname_rrtype_callback
export function resolveLoopback(_ = dns) {
	const iface = _.resolve4('localhost', () => {
		[{ address: '127.0.0.1', ttl: 60 }];
	});
	return iface;
}

export const port = 3000;

// the import in server.js:
// import { resolveLoopback, port } from './network/index.js';

// run, grab hostname from inside fn:
// const hostname = resolveLoopback().hostname;
