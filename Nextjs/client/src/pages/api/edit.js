import con from "../../../config/db";
import moment from "moment";
export default async function handler(req, res) {
    switch (req.method) {
        
        case 'POST':
            try {
                console.log(req.body)
                const date1 = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');        
                
                const imgsrc=`./public/images/${req.body.photo}`;
                        const query =`UPDATE deep_user SET  firstname="${req.body.firstname}",lastname="${req.body.lastname}",email="${req.body.email}",gender="${req.body.gender}",hobbies="${req.body.hobbies}",photo="${imgsrc}" ,country="${req.body.country}",dateupdated="${date1}" where code="${req.body.code}"`
                       
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
