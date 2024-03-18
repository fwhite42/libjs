const {
	createServer,
	createConnection
} = require("net")

const {
	Console
} = require("console");

function createScreen(port) {
	let server = createServer();
	server.on("connection", client => {
		client
			.map(x => x.toString())
			.forEach(console.log)
	});
	server.listen(port);
}

function createConsole (port) {
	let socket = createConnection(port);
	return new Console(socket);
}

module.exports = {
	createScreen,
	createConsole
}
