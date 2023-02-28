import con from "../../../config/db";
const moment = require('moment');

export default async function handler(req, res) {
    
    switch (req.method) {
        case "POST":
            try {
                const ans = req.body;
                console.log(ans);
                ans.map(async (item) => {
                    console.log('item', item)
                let code = item.Code;
                const ans = await con.queryRunner(`select * from deep_user where code="${code}"`);
                console.log(ans.length)
                if (ans.length > 0) {
                    let query = `UPDATE deep_user SET firstname="${item.Firstname}", lastname="${item.Lastname}", email="${item.Email}", gender="${item.Gender}", hobbies="${item.Hobbies}", photo="${item.Photo}", country="${item.Country}", status="${item.Status}", dateadded="${item.DateAdded}", dateupdated="${item.DateUpdated}" where code="${item.Code}"`;
                    const ans1 = await con.queryRunner(query);
                } else {
                    let query = `Insert into deep_user (code,firstname,lastname,email,gender,hobbies,photo,country,status,dateadded,dateupdated) values
                ("${item.Code}","${item.Firstname}","${item.Lastname}","${item.Email}","${item.Gender}","${item.Hobbies}","${item.Photo}","${item.Country}","${item.Status}","${item.DateAdded}","${item.DateUpdated}")`;
                    const ans1 = await con.queryRunner(query);
                }
                })
                res.status(200).send("data inserted")
            } catch (err) {
                console.log(err)
                res.status(400).send(err);
            }
            break;
        case 'GET':
            console.log("get request");
            res.status(200).send("ok")
            break;
        default:
            res.status(400).send("Method not allowed");
    }
}