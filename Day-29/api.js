var express = require('express');
var app = express();

app.use(express.json());


// const Employees=require('./employee.json');
app.get('http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees', (req,res)=> {
    res.send(Employees);
    });


const Employees=require('./employee.json');
app.get('/api/employees', (req,res)=> {
    res.send(Employees);
    });

    const projects=require('./project.json');
    app.get('/api/projects', (req,res)=> {
        res.send(projects);
        });

app.get('/employees/:id', (req, res) => {
    const e1 = Employees.find(c => c.id === parseInt(req.params.id));
    if (!e1) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
    res.send(e1);
    });

    

    app.get('/projects/:id', (req, res) => {
        const book = projects.find(c => c.id === parseInt(req.params.id));
        if (!book) 
        res.send(book);
        });


        app.get("/getemployeedetails", (req, res) => {
            let employeeDetail = Employees.map((data) => {
                let project = projects.filter((x) => {
                    return x.id == data.projectid;
                });
                    if (project)
                    {
                        return { ...data, ...project }
                    }
                });
                    res.json(employeeDetail);
                });

              
    const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));


