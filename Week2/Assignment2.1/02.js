// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
// (Hint: setTimeout)

// setInterval(function(){
//   console.log('timer')
// }, 1000)


function timer(){
  console.log('timer')
  setTimeout(timer,1000)

}
timer();