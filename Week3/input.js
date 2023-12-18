// input validation 
const express = require('express');
let app = express()
// app.use(express.json()); // This sets up the middleware to parse JSON in the request body
// app.post('/',(req,res)=>{
//     let kidney  = req.body.kidney

//     console.log(`Kidney length is ${kidney.length} `)
//     res.send('Ram ram ladar' +kidney)
// })

// app.use((req, res, next) => { // handling the error, invalid route and all the things 
//     // console.error(err.stack);
//     res.status(500).send('Something went wrong!');
// });

// app.listen(5000)

// input validation k baad bhi kaafi  --> acha hai library use kr lo 
// zod is such 
// schema define and then do the all task s
// let z = require('zod')
// let schema = z.object({
//     email: z.string().email(), // do the checks it self 
//     password: z.string().min(8) // define some things then all other things are handled by zod itself 
// })
// data ={
//     email:`anmoldogra676@gmail.com`,
//     password:'rpnaddaf'
// }
// const response = schema.safeParse(data)
// console.log(response)
// apply zod just above the required route --> to perform some ehck 