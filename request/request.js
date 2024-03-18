const {
	alloc,
	concat
} = Buffer;

const readStream = stream => stream.reduce((x,y) => concat([x,y]), alloc(0));

function request(options) {

	if (options === null || options === undefined) {
		return new Error("Empty Request Input");
	}
	
	let protocol;
	let body;
	let query;
	let urlencodebody;

	protocol	= options.protocol;
	body		= options.body;
	query		= options.query;
	urlencodebody	= options.urlencodebody;

	delete options.protocol;
	delete options.body;
	delete options.query;
	delete options.urlencodebody;
	
	//encode the query string
	if (typeof query === "object")
		path += "?" + new URLSearchParams(query).toString();
	//jsonify the body object
	if (typeof body === "object")
		body = JSON.stringify(body);
	//encode the body as url string
	if (urlencodebody === true);
		body = new URLSearchParams(body).toString();

	return new Promise(function (callback) {
		let req;

		req = require(protocol || "https").request(options);
		req.on("response", async function (response) {
			let res = new Object; 

			res.statusMessage	= response.statusMessage;
			res.statusCode		= response.statusCode;
			res.headers		= response.headers;
			res.body		= await readStream(response);
			
			callback(res);
		})
		req.end(body);
	})
}

module.exports = {
	request
};
