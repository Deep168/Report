const express = require("express");
const cors = require("cors");
const app = express();
var http = require('http');
var fs = require('fs');
var path = require('path');
app.use(cors());
app.use(express.json());

app.post("/createfolder", (req, res) => {
    const Ans1 = createfolder(req.body.message);
    console.log(Ans1);
    
        res.json({ ans: "Ans1" });
   
});

app.post("/createfile",(req,res)=>{
    const Ans = createfile(req.body.n1);
    console.log(Ans);
   
   res.status(200).send("created  file sucessfully");
   
    res.json({ ans: "Ans" });
});

app.post("/deletefile", (req, res) => {
    console.log(req.body);
    const Ans2 = deletefile(req.body.n2);
  
    res.json({ ans: "Ans2" });
});

app.post("/readfile", (req, res) => {
    console.log(req.body);
    const name = req.body.n3
    fs.readFile(name, 'utf8', function (err, data) {
        if (err) throw err;
        console.log(data);
        res.status(200).send(data);
        return;
    });
});

app.post("/file_content", (req, res) => {
    console.log(req.body);
    const Ans4 = file_content(req.body.n4, req.body.n5);
    
    res.json({Ans4});
});


app.post("/file_append", (req, res) => {
    console.log(req.body);
    const Ans5 = file_append(req.body.n6, req.body.n7);
     
    res.json({Ans5});
});
// app.get("/message", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.listen(5500, () => {
    console.log(`Server is running on port 5500.`);
});




function createfile(n1) {
    if (!fs.existsSync(n1)) {
        fs.writeFile(n1, '', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
    else {
        console.log("File already exists.");
    }
}

function deletefile(n2) {
    if (!fs.existsSync(n2)) {
        res.status(400).send("File doesnot  exists.");

    }
    else {
        fs.unlink(n2, function (err) {
            if (err) throw err;
           res.status(200).send({message:"file deleted sucessfully"})
        });
    }
}

function createfolder(message){
    if (!fs.existsSync(message)){
        fs.mkdirSync(message);
        res.status(100).send("created folder sucessfully");
         }else {
            console.log("Folder already exists.");
         }
       
}

function file_content(n4, n5) {
     try {
          if (!fs.existsSync(n4)) 
          { 
            fs.writeFileSync(n4, n5);
             console.log("File is created."); 
             } 
             else { fs.appendFile(n4, n5, (err) => {  
                if (err) {   console.log(err); 
                 }  
                 else {  
                     console.log("Data is Added.");
                      } 
                    }); 
                 } 
                } catch (err) { 
                     console.log(err);
                     }
                    }

function file_append(n6,n7){
    if (!fs.existsSync(n7)) {
        fs.writeFile(n7, n6, function (err) {
            if (err) throw err;
            console.log('File created successfully');
        });
    }
    else {
        fs.appendFile(n7,n6, function (err) {
            if (err) throw err;
            console.log('Updated!');
          });   
    }
    
}

// function readfile(n3) {
//     if (!fs.existsSync(n3)) {
//       console.log("file is doesnot exit")
//     }
//     else {
//         fs.readFile(n3, 'utf8', function( err,data){ 
//             if(err) throw err;
//             console.log(data);
            
//             return data;
//         });
//     }
// }