var fs = require('fs');
var out = undefined;

function count(f, callBack) {
	fs.readFile(f, function(err, fileContents) {
		out = fileContents.toString().split('\n').length;
		callBack();
	});
};

function logCount() {
	console.log(out - 1);
};

count(process.argv[2], logCount);
