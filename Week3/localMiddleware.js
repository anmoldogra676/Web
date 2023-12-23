const express = require ('express')
const app = express()

function correctAgemiddleware(req,res,next){
    const age = req.query.age
    if(age>18)
    {
        return next();
    }
        res.json({
            msg:"Too short"
        })
}

// if u want to use a speciifc middleware in ypur route --> use app.use() order matters from where u have added that after that 

app.get('/ride1',function(req,res){

    res.send("Succesfully given the ride1 ")

})
app.use(correctAgemiddleware)
app.get('/ride2', function(req,res){

    res.send("Succesfully given the ride2")

})

app.use(function(err,req,res,next){
    res.json({
        msg:"Internal server err"
    })
})
app.listen(3000,()=>{
    console.log("print")
})