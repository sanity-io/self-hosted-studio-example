# self-hosted-studio-example

Example of how to serve a built Sanity Studio using [node.js](https://nodejs.org/).

## Installing

`npm install`

## Running

`npm start`

## How it works

We use [express](http://expressjs.com/) for our basic HTTP server and static file serving, and [express-history-api-fallback](https://github.com/sebdeckers/express-history-api-fallback) to serve a default file (`index.html`) on all other requests, so that the client-side can take over and do the routing.

See [the Sanity documentation](https://www.sanity.io/docs/content-studio/deployment) for more information on deployment options.

## License

MIT-licensed. See LICENSE.
