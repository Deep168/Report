
var http = require('http');
var fs = require('fs');
// http.createServer(function (req, res) {/
//  // Open a file on the server and return its content:
//   fs.readFile('./file1.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     console.log(data);
  //     return res.end();//   });
  // }).listen(8080)
  // Asynchronous - Opening File
  // console.log("Going to open file!");
  // fs.open('file1.html', 'r+', function(err, fd) {
    //    if (err) {
      //       return console.error(err);
      //    }
      //    console.log("File opened successfully!");  
       // });                            
       //Create a new file using the appendFile() method:
       // fs.appendFile('./file.html', 'Hello vishal!', function (err) {
        //     if (err) throw err;
        //     console.log('Saved!');
        //   });                        
         //Create a new, empty file using the open() method:
         // fs.open('./file1.html', 'r', function (err, file) {
          //   if (err) throw err;
          //   console.log('Saved!');
          // });        
          //                   Create a new file using the writeFile() method:
          // fs.writeFile('./file1.js', 'Hello content!', function (err) {
            //     if (err) throw err;//     console.log('Saved!');
            //   });                                    
            //delete a file
            //   fs.unlink('file.html', function (err) {
              //     if (err) throw err;
              //     console.log('File deleted!');
              //   });                                   
              //Rename File
              // fs.rename('file1.txt', 'myrenamedfile.txt', function (err) {
                //     if (err) throw err;
                //     console.log('File Renamed!');
                //   });

