/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(s) {
  if(s.length === 0) return true
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  return s === s.split('').reverse().join('')
}

module.exports = isPalindrome;
