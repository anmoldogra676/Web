const express=  require('express')
let app = express();
app.use(express.json())
let requests =0
function userAuthMiddleware(req,res,next){
    let username = req.headers.username;
    let pass = req.headers.password;
    if(username=='Anmol' && pass=='1111')
    {
        console.log(`valid user`)
        next();
    }else 
    res.status(404).send(`invalid user `)

}

function kidneyMiddleware(req,res,next){
    let kidney = req.query.kidneyId;
    if(kidney==1 || kidney==2){
        console.log(`kidney is good`)
        next();
    }else{
        res.status(404).send(`kidney is not good`)
    }
  

}
function NumberofRequests(req,res,next){
    requests++;
    console.log(requests)
    // res.send({
    //     NumberofRequests :`${requests}`
    // })
    next()
   
}



app.get('/health-checkup',  kidneyMiddleware,NumberofRequests,(req, res)=>{
    //  console.log(req.body)
    res.status(200).send(`Health is good `)

})

app.get('/complete-checkup', userAuthMiddleware, kidneyMiddleware,(req, res)=>{
    //  console.log(req.body)
    // console.log(req.body())
    res.status(200).send(`Overall Health is good `)

})
// app.use(express.json()) // by this we can use req.body directly in the code of post request
app.get('/',NumberofRequests,(req, res)=>{
    res.send('Hey go to health-checkup route')
})
app.listen(4000)
// dumb way to do the authentication