import con from "../../../config/db";
import moment from "moment";
export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                const date1 = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
                 let status = req.query.status;
                 let code = req.query.code;
                    if (status === 'Y') {
                    const query = `UPDATE deep_user SET status="N",dateupdated="${date1}" where code="${code}"`
                const ans = await  con.queryRunner(query)
            res.send(ans);
        }
             else {
            const query = `UPDATE deep_user SET status="Y",dateupdated="${date1}" where code="${code}"`
            const ans = await  con.queryRunner(query)
            res.send(ans);
        }
    }
             catch (err) {
                console.log(err)
            }
            break;
       

        
             
                 


        default:
            res.status(405).end(`Method Not Allowed`);
            break;
    }
}
