
// read content of file and then remove the spaces inside that file 
const fs = require('fs')
function fn(err,data){
    console.log(data)
    let newData = data.replace(/\s+/g, ' ');
    writeFile(newData);

}
function fn2(err, data){
    console.log(data)
}
function writeFile(newData){
    fs.writeFile('a.txt',newData,fn2)
}
fs.readFile('a.txt', 'utf-8',fn);
