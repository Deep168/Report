const express = require('express');
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
var http = require('http');
var fs = require('fs');
app.post('/', (req, res) => {
    console.log(req.body);
    const ans = getPrimes(req.body.n1);
    res.json({ ans });
});
app.listen(4000, () => {
    console.log(`Server is running on port 8000.`);
});
function getPrimes(number) {
    fs.appendFile('deep.txt', number + "", function (err) {
        if (err) throw err;
        console.log('Saved!');
        return "ok"
    });
    console.log("succed on server");
}