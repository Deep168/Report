import con from '../../../config/db';

export default async function handler(req, res) {
    // const { method } = req;
    switch (req.method) {
        case "GET":
            try {
                let text = req.query.search;
                let gender = req.query.gender;
                let status = req.query.status;
                let hobbies = req.query.hobbies;
                let query = "";
                if (text != '') {
                    query = ` code like "%${text}%" or firstname LIKE "%${text}%" or lastname LIKE "%${text}%" or email LIKE "%${text}%"`
                } if (gender != '') {
                    if (query != '') {
                        query = query + ` and gender = "${gender}"`;
                    }
                    else {
                        query = ` gender = "${gender}"`;
                    }
                }
                if (status != '') {
                    if (query != '') {
                        query = query + ` and (status LIKE "%${status}%")`
                    } else {
                        query = ` (status LIKE "%${status}%")`
                    }
                }
                if (hobbies != '') {
                    if (query != '') {
                        query = query + `and (hobbies LIKE "%${hobbies}%")`
                    }
                    else {
                        query = `(hobbies LIKE "%${hobbies}%")`

                    }
                }
                if (query != '') {
                    query = ` where ` + query;
                }
                const results = await con.queryRunner(`select * from deep_user` + query);
                res.send(results);
            }
            catch (error) {
                return error;
            } break;
     
        default:
            return res.status(200).json("Method is not called");
    }
}