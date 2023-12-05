/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str=str.toLowerCase();
  let ans=0;
  for(let i=0;i<str.length;i++){
    let ch = str.charAt(i);
    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'|| ch=='u'){
    ans++;
    }
  }
  return ans;
    // Your code here
}

module.exports = countVowels;