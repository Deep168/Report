// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(5000);

var path = require('path');
var filename = path.extname( 'D:\Traning\Day-26\darshan.txt');
console.log(filename);
console.log(path.delimiter);
var directories = path.dirname('D:\Traning\Day-26\darshan.txt');
console.log(directories);
var obj = { dir: 'D:\Traning\Day-26', base: 'darshan.txt' }
var p = path.format(obj);
console.log(p);
console.log(path.resolve('D:\Traning\Day-26\darshan.txt'));
var x = path.join('D', 'Traning\Day-26', 'darshan.txt');

console.log(x);