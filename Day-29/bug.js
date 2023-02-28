const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
// const dateTime = require("date-and-time");
// const format = require("dateformat");
var mysql = require('mysql');
var con = mysql.createConnection({
    host: '192.168.2.8',
    user: 'trainee',
    password: 'trainee@123',
    database: 'trainee'
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});
app.post('/bugdata', (req, res) => {
    console.log('in beckend')
    const title = req.body.title;
    const description = req.body.description;
    const assignee = req.body.assignee;
    const tdate = new Date();
     const Dates = tdate.toISOString().slice(0,10);
     const Times = tdate.toTimeString().slice(0,10);
    console.log(Times)
    const sql = `insert into deep_bugdata1(title,description,date,time,assignee)values("${title}","${description}", "${ Dates}","${Times}" ,"${assignee}")`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        //    resolve(result);
        console.log("inserted");
    });
}
);
//
app.get('/showdata', (req, res) => {
    const sql = 'select * from deep_bugdata1'
    con.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        else {
            result = result.map((item) => {
                console.log(item.left_days)
                console.log(item.date)
                const date = new Date();
                ld = Math.ceil((date.getTime() - item.date.getTime()) / (1000 * 60 * 60 * 24));
                //item.left_days =  Math.ceil((date.getTime()- item.date.getTime())/(1000*60*60*24));               
                item.left_days = 3 - ld;
                return item;
            });
            res.json(result);
        }
    }
    )
})
app.listen(4000, () => {
    console.log("running on 4000");
})