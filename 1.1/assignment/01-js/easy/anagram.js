/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 =str1.toLowerCase();
  str2 =str2.toLowerCase();
  let array1 = new Array(26).fill(0);
  let array2 = new Array(26).fill(0);
  if(str1.length!=str2.length)return false;
  for(let i=0;i<str1.length;i++){
     array1[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  for(let i=0;i<str2.length;i++){
    array2[str2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
 }
 for(let i=0;i<array1.length;i++){
  if(array1[i]!=array2[i])return false;
 }
 return true;
  

}

module.exports = isAnagram;

