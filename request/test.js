const test = require("node:test");
const assert = require("node:assert");
const {
	request
} = require("./request");

test("Undefined Input", async () => {
	let response = await request();
	console.log(response);
})

test("Invalid Binance Path", async () => {
	let response = await request({
		protocol:"https",
		host:"api.binance.com",
		port:443,
		method:"GET",
		path:"/api/v3/log",
	});
	console.log(response);
})
