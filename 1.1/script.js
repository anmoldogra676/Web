// console.log("Hello World")
// var  a=1;
// a=2;
// let firstname = "Anmol"
// let age=23;
// console.log("Hey my Name is "+firstname + " & My age is "+age);
// console.log(typeof(firstname))
// console.log(`Rohit`)

// let arr =[1,2,3,7,10,14,4114]

// for(i=0;i<arr.length;i++){
//     let a=arr[i]
//     if(a%2==0)console.log(a)

// }

// let name =["rohit", "cricket", "himachal "]

const users=[
    {
    fname:"harkirat",
    gender:{
       gender: "male"
    }
    }
    ,
    {
       fname:"Anmol",
        gender:"Male"
    }
]
/**
 * name = gender
 * users[0]["gender"] is equal to users[0][name] 
 * but it is not equal to users[0]["name"]
 * in "" it will try to find the same key &&
 * and without this it will try to fit it value inside this variable
 * 
 * 
 * 
 */
// console.log(users[0]["gender"])
/* Bounty  */
// let sum=0;
// for(let i=0;i<100000000000;i++){
//     sum+=i
// }
// console.log(sum)

function minus(n1, n2){
    console.log(n1-n2)
}

function add(n1, n2){
    console.log(n1+n2)
}


function sample(a, b, fn){
    console.log("hey")
    fn(a,b)
}

sample(2,3)

// setTimeout && setinterval
