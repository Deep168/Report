import con from "../../../config/db";
import moment from "moment";
export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                let code = req.query.code;
                const date1 = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
                const query = `UPDATE deep_user SET status="N",endeffedate="${date1}" where code="${code}"`
                // console.log(results);
                const ans = await con.queryRunner(query);
                console.log(ans)
                res.send(ans);
            } catch (err) {
                console.log(err)
            }
            break;
        //  case 'POST':




        default:
            res.status(405).end(`Method Not Allowed`);
            break;
    }
}