/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// Format the time as a string


function wait(n) {
    let p =new Promise((resolve)=>{
      setTimeout(()=>{
        resolve();
        console.log('resolved after 4 seconds')
      },n)
    });
    return p
}
wait(4000).then((data)=>{
    console.log('resolved')

})