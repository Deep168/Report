var fs = require('fs');

fs.access('darshan.txt', function(err, data) {
  if (err) throw err;
  console.log(data);
});