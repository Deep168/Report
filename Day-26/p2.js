// var http = require('http');
// var fs = require('fs');
// var assert = require('assert');
// http.createServer(function (req, res) {
//     assert(5 > 7);
//     fs.readFile('darshan.txt', 'utf-8', function(err, data) {
//         if(err) throw err; 
//       res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write(assert);
//   res.end();
//     });
// }).listen(5500);
// var assert = require('assert');
// assert(5 > 7);
// console.log(assert);

var buf = Buffer.from('abc');
console.log(buf);

var cluster = require('cluster');

if (cluster.isWorker) {
  console.log('I am a worker');
} else {
  console.log('I am a master');
  cluster.fork();
  cluster.fork();
}

// var crypto = require('crypto');

// var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
// var mystr = mykey.update('abc', 'utf8', 'hex')
// mystr += mykey.final('hex');

// console.log(mystr); 

var fs = require('fs');

fs.readFile('darshan.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});

var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());


var path = require('path');
var filename = path.extname('D:\Traning\Day-26\darshan.txt');
console.log(filename);