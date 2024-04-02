var express =require('express');
var app = express();


 


 var server = app.listen(8000, function() {
    console.log("Server Is ON");
 })


 const employers =[{id:101,name:yusuf, department:1,salary:1000},
    {id:102,name:shuhaib, department:2,salary:2000},
    {id:103,name:ajeeb, department:3,salary:1300},
    {id:104,name:rishma, department:4,salary:2500}];

    app.get('/employers',(req,res)=>{
        res.send(employers);
    });



    app.get('/employers/:id',(req,res)=>{
        const employer = employers.find((element)=>{
            if (element.id ===parseInt(req.params.id))
            return true});
            if(employer){ return res.status(200).send(employer);}
            return res.status(404).send('Wrong ID, No Employee Found ');
        
    });
 

    app.post('/employers/add_employer',(req,res)=>{
     const employer ={
        id:req.body.id,
        name:req.body.name,
        salary:req.body.salary
     };
     employers.push(employer);
     res.status(200).send(employer);
    });


    app.put('/employers/overwrite_employer/:id', (req, res)=>{
        const employer = employers.find((element)=>{
        if(element.id === parseInt(req.params.id) )
        {return true;}
        });
        if(employer){
        employer.id = req.body.id;
        employer.name = req.body.name;
        employer.salary = req.body.salary;
        return res.status(200).send(employer);
        }
        return res.status(404).send('Wrong ID, No student Found');
        });




        app.patch('/employers/update_employer/:id', (req, res)=>{
            const employer = employers.find((element)=>{
            if (element.id === parseInt(req.params.id)) 
            {return true;}
            });
            if (employer) {
            for (let i in req.body){
            employer[i] = req.body[i];
            }
            return res.status(200).send(employer);
            }
            return res.status(404).send('Wrong ID, No employer Found');
            });



            app.delete('/employers/delete/:id', (req, res)=>{

                const employer = employers.find((element)=>{
                    {return true;}
                });
                if(employer){
                    const index = employers.indexOf(employer);
                    employers.splice(index, 1);
                    return res.status(200).send(employer);
                }
                return res.status(404).send('Wrong ID, No employer Found');
            });