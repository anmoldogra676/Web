 let express = require('express')
 let path =require('path')
 let app = express();
 let port =4000
 app.get('/',(req, res)=>{
    res.send('Check the Landing page Routes') // get request handlers
 })
 app.get('/LandingPage',(req, res)=>{
    // console.log(req)
    const indexpath = '/Users/loop/Desktop/Web/Fundamental/index.html'
   res.sendFile(indexpath)
 })
 app.listen(port,()=>{
    console.log(`Listen on the port ${port}`)
 })

// if u do the post request handlers code then there is no way to access the body 
// for that we have to use the another library/packagee called body parsers

 


 // function nf(){
//   setTimeout(()=>{
//     let allButton = document.querySelectorAll('.rdp-cell button')
//     let MonthName = document.querySelectorAll('.rdp-caption_label')
//     if(MonthName[0].innerText[0]=='D'){
//       console.log('December')
//       allButton.forEach(function(button) {
//         button.classList.add('rdp-day_disabled');
//         button.setAttribute("aria-disabled", "true");
//         button.setAttribute("tabindex", "-1");
        
//   });
//     }
    
//     console.log(allButton)
//   },1000)
       
// }

// function fn() {
//     console.log('Hello Clicked');
//     setTimeout(()=>{
//       let nele = document.querySelector('.loop-drawer-content');
//       console.log(nele)
//       nf();
//     }
//       ,200)
    
// }

// function waitForElement(selector, callback) {
//     const intervalId = setInterval(function() {
//         const element = document.querySelector(selector);
//         if (element) {
//             clearInterval(intervalId);
//             callback(element);
//         }
//     }, 1000); // Adjust the interval as needed (e.g., check every second)
// }


// // Example usage
// waitForElement('#loop-order-card-reschedule-btn', function(element) {
//     console.log('Element is now available:', element);
//     // Add event listener once the element is available
//     element.addEventListener('click', ()=>{
//       setTimeout(()=>{
//       let nele = document.querySelector('.loop-drawer-content');
//       console.log(nele)
//       nf();
//     }
//       ,200)
//     });
// });



/*
const intervalId1 = setInterval(function() {
        const element = document.querySelectorAll('.rdp-row');
        if (element) {
            clearInterval(intervalId1);
            console.log(element)
        }
    }, 1000); */
