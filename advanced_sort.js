// sort by two fields

var input = [
	{name: 'Bbbb', used: true},
	{name: 'Aaaa', used: false},
	{name: 'Cccc', used: false},
	{name: 'Dddd', used: true},
	{name: 'Eeee', used: true},
	{name: 'Ffff', used: false},
	{name: 'Gggg', used: true},
	{name: 'Hhhh', used: true}
];

var result = input.reduce(function (acc, val, idx, arr) {
	acc[val.used ? 0 : 1].push(val);
	return acc;
}, [[], []] ).map(function (val) {
	return val.sort(function (a, b) { return a.name > b.name });
}).reduce(function (acc, val, idx, arr) {
	return acc.concat(val);
}, []);

console.log(result);
