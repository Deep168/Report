// const mysql = require('mysql');
const mysql = require('serverless-mysql')({
    config: {
        host: '192.168.2.8',
        user: 'trainee',
        password: 'trainee@123',
        database: 'trainee',
        timezone: 'utc'
    }
  })
// const con = mysql.createConnection({
//     host: '192.168.2.8',
//     user: 'trainee',
//     password: 'trainee@123',
//     database: 'trainee',
//     timezone: 'utc'
// });

const queryRunner = (query) => {
    return new Promise(async (resolve, reject) => {
        try{
            let results = await mysql.query(query)
            await mysql.end()
            resolve(results);
        }catch(err){
            reject(err);
        }
    });
};

export default {queryRunner};