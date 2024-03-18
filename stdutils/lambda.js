const neg	= (x)		=>	-x;
const inv	= (x)		=>	1 / x;
const sum	= (x, y)	=>	x + y;
const mul	= (x, y)	=>	x * y;
const mod	= (x, y)	=>	x % y;
const execute	= (f, ...x)	=>	f(...x);

module.exports = {
	neg,
	inv,
	sum,
	mul,
	mod,
	execute,
}
