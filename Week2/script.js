/*
Callback
*/
/*
function square(a){
    return a*a
}
function cube(a){
    return a*a*a
}
function something(a, b , fn){
    let c = fn(a);
    let d=  fn(b);
    return c+d;
}
console.log(something(4,5,square))

*/

// async ---> read file async 
// const fs = require('fs'); //

// console.log("hello");

// fs.readFile('a.txt','utf-8',onDone);

// function onDone(err, data) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Reading file content')
//     let content ='afjbjkvabbj'
//     fs.appendFile('a.txt', content, (err, data)=>{
//     if (err){
//      console.log("error in writing file ")
//     }else{
//         console.log("written succesfullly")
//     }
//     })
//     console.log(data);
// }

// console.log('after')

// callback hell --> function inside function setTimeout inside setTimeout and inside that also one setTimeout
// syntax becomes very ugly --> promises comes underhood converted into this callback 

// Promises 
// let fs = require('fs')
// const { resolve } = require('path')
// let p = new Promise(function(resolve, reject){
//     // do some async task
//     fs.readFile('a.txt','utf-8',(err, data)=>{
//         if(err){
//             reject("error") // in case of error call the callback reject
//         }else{
//             resolve(data) // in case of resolve call the callback resolve
//         }
      
//     })
    
// })

// console.log(p)  // this thing is also there called promise chaining --> .then .then .then 
// p.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })



// for(let i=0;i<3;i++){
//     console.log(i)
// }

// so to remove the promise chaining we can use the async await task so that all the things might be easy to write and read
// async function main(){
//     let value = await p
//     console.log("bejb")
//     console.log(value)
// }
// main()

// ---> promises ---> setime out after 1 then inside that settimeout 2 and then 3 
// 1st way is call back hell  ---> setimeout inside settimeout and then inside that 
// now promise chaining ---> 
// function promiseSetTimeout(duration){
//     let p = new Promise((resolve)=>{
//         setTimeout(function(){
//             console.log("SetTimeout called")
//             resolve()
//         }, duration)

//     });
//     return p
// }

// let p1 =promiseSetTimeout(1000)
// p1.then((data)=>{
//     console.log("1st called")
//     return promiseSetTimeout(2000)
// }).then(()=>{
//     console.log("2nd called")
// })

// to overcome this .then .then syntax use the async await syntax--> it's just top on promises to simplify and promises are top on callbacks
// async function main(){
//    let p1= await promiseSetTimeout(1000);
//    console.log("1st called")
//    let p2 = await promiseSetTimeout(2000);
//    console.log("2nd called")
// }
// main()

