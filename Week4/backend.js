const express = require('express')
let app = express()


app.get('/sumlogic',(req,res)=>{
    let value1 = req.query.value1;
    let value2 = req.query.value2;
    let fs = (Number)(value1)+ (Number)(value2)
    res.json({
      sum: fs
    })
})

app.listen(4000,()=>{
    "faf"
})