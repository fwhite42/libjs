const {
	request
} = require("../request/request");

async function prepareCall (signer, api, method, params) {
	let data;

	let apimethod = method.split("/").reduce((x, y) => x?.[y], api);

	data = Object.create(null);

	data.host	= apimethod?.host;
	data.port	= apimethod?.port;
	data.method	= apimethod?.method;
	data.path 	= apimethod?.path;
	data.security	= apimethod?.security;
	data.body	= params;
	
	if (typeof signer?.sign === "function") await signer.sign(data);

	return (data);
}

async function call (signer, api, method, params) {
	let input, output;

	input	= await prepareCall(signer, api, method, params);
	output	= await request(input);

	return (output);
}

module.exports = {
	prepareCall,
	call
}
