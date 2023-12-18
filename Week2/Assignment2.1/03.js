// Create a new Date object

function currentTimes(){
let currentTime = new Date();

// Get the current time components
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

// Format the time as a string

let formattedTime = `${hours}:${minutes}:${seconds}`;
let newformattedTime;
if(hours>13){
    newformattedTime = `${hours-12}:${minutes}:${seconds} PM`;
}else{
    newformattedTime = `${hours-12}:${minutes}:${seconds} AM`;
}

console.log("Current Time:", formattedTime);
console.log("Current Time:", newformattedTime);
setTimeout(currentTimes,1000)
}
currentTimes();
