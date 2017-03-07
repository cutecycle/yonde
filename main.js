var kuroshiro = require('kuroshiro');
var fs = require('fs');
var path = require('path');
var callback = function  () {}
var text =  fs.readFileSync("./in.txt", "utf8");
//console.log(text);

var lines = text.split('\n');
var x;

kuroshiro.init(function(err) {
	console.log(err);
	
	doit();
});

function doit() { 
	var ending = new String();
	
	for(var i = 0;i < lines.length;i++){
			//code here using lines[i] which will give you each line
			//
			//
			var current_split = lines[i].split('	');
			ending = ending.concat(i).concat(': ');
			ending = ending.concat(current_split[0]);
			ending =ending.concat(current_split[1]);
			
			//console.log(current_split[1]);
			
			ending = ending.concat(' ');
			var curr = kuroshiro.convert(current_split[1] );
			ending = ending.concat('     |     ');
			ending = ending.concat(curr);
			ending = ending.concat('\n');

			console.log(curr);
			if(i % 80 == 0) {
				var x = i;
				var filename = 'out';
				filename = filename.concat(x.toString());
				console.log(filename.concat(':  ').concat(curr));
				fs.writeFileSync(filename, ending, 'utf8');
				ending = new String();
			}
			
	}
}
//console.log(ending);

//fs.writeFileSync('out.txt', ending, 'utf8' );
