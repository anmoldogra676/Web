const express=  require('express')
let app = express();
app.get('/health-checkup',(req, res)=>{
    let username = req.headers.username;
    let pass = req.headers.password;
    let kidney = req.query.kidneyId;
    if(username=='Anmol' && pass=='1111')
    {
       if(kidney==1 || kidney==2){
        // res.json({
        //     msg:"everything is good "
        // })
        res.status('200').send(`Everything is good`)
    }
    }

    res.status(404).send('Take care of ur health')

})
app.get('/',(req, res)=>{
    res.send('Hey go to health-checkup route')
})
app.listen(3000)
// dumb way to do the authentication