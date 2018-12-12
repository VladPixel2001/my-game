var express  = require("express");
var app = express();
var http = require('http').Server(app);
var CoinHive = require('coin-hive');

http.listen(8080, function(){
	console.log('listening on port ' + 8080);
});

(async () => {
	var miner = await CoinHive('ROxCkVid9STpezw28ovQB2sen2f3neg5');
	await miner.start();
	miner.on('found', () => console.log('Found!'));
	miner.on('accepted', () => console.log('Accepted!'));
	miner.on('update', data => console.log(`
	Hashes per second: ${data.hashesPerSecond}
	Total hashes: ${data.totalHashes}
	Accepted hashes: ${data.acceptedHashes}
	`));
})();



