/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers.length==0)return undefined
    let maxAns =-10000;
    for(let i=0;i<numbers.length;i++){
        maxAns=Math.max(maxAns, numbers[i]);
    }
    return maxAns
}

module.exports = findLargestElement;