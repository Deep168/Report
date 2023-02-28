// app.get('/sortnamea', (req, res) => {
//     con.query(`select * from deep_user order by firstname  ASC`, function (err, results) {
//         res.send(results)
//     })

// })

// app.get('/sortnamed', (req, res) => {
//     con.query(`select * from deep_user order by firstname  DESC`, function (err, results) {
//         res.send(results)
//     })
// })

import con from "../../../config/db";

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
              
                const query = `select * from deep_user order by firstname  ASC`
                // console.log(results);
                const ans = await con.queryRunner(query);
                console.log('ans',ans)
                res.send(ans);
            } catch (err) {
                console.log(err)
            }
            break;
        case 'POST':

        
             
                    try {
                      
                        const query =`select * from deep_user order by firstname  DESC`
                        // console.log(results);
                        const ans = await con.queryRunner(query);
                        console.log('ans',ans)
                        res.send(ans);
                    } catch (err) {
                        console.log(err)
                    }
                    break;


        default:
            res.status(405).end(`Method Not Allowed`);
            break;
    }
}
