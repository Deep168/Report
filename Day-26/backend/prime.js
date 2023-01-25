const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);
    const Ans = getPrime(req.body.message);
    res.json({ Ans });
});

// app.get("/message", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});


function getPrime(number) {
    const Ans = [];
    for (let i = 2; i <= number; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1; break;
            }
        }
        if (flag == 0) {
            Ans.push(i);
        }
    }
    return Ans;
    console.log(Ans);
}
