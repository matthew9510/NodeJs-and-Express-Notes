const http = require('http');
const routes = require('./routes');

const server = http.createServer(3000, routes.routesHandler)
server.listen(4000);