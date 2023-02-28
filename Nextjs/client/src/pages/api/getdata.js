import con from "../../../config/db";
import moment from "moment/moment";
export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            try{
                let query=`select * from deep_user`;
                const ans= await con.queryRunner(query);
                res.send(ans);
            } catch(err){
                console.log(err) 
            }
            break;

         case 'POST':
         try{
            console.log(req.body)
            
            var date = new Date();
        const date1 = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        console.log(date1);
        const imgsrc=`./public/images/${req.body.photo}`;
            const query=`Insert into deep_user (code,firstname,lastname,email,gender,hobbies,photo,country,status,dateadded) values("${req.body.code}","${req.body.firstname}","${req.body.lastname}","${req.body.email}","${req.body.gender}","${req.body.hobbies}","${imgsrc}","${req.body.country}","Y","${date1}")`;
            const ans= await con.queryRunner(query);
            res.send(ans);
        } catch(err){
            console.log(err) 
        }
        break;


        default:
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}

