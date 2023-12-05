/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase()
  let i=0;
  let j= str.length-1;
  while(i<=j){
    while(i<str.length && (str.charAt(i)==" "|| str.charAt(i)=='!' || str.charAt(i)=='.'||str.charAt(i)=='?'|| str.charAt(i)==','))i++;
    while(j>=0 && (str.charAt(j)==" "|| str.charAt(j)=='!' || str.charAt(j)=='.'||str.charAt(j)=='?'|| str.charAt(i)==','))j--;
    if(i<str.length && j>=0 &&  str.charAt(i)!=str.charAt(j))return false;
    i++;
    j--;
  }
  return true;
}
console.log(isPalindrome("afa!!"))

module.exports = isPalindrome;
