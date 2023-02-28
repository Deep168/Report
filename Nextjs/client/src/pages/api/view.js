import con from "../../../config/db";

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                const id = req.query.id;
                console.log(id)
                const query = `select * from deep_user where code="${id}"`
                // console.log(results);
                const ans = await con.queryRunner(query);
                console.log(ans)
                res.status(200).send(ans);
            } catch (err) {
                console.log(err)
            }
            break;
        default:
            res.status(405).end(`Method Not Allowed`);
            break;
    }
}

