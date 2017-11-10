function isPalindrome(string) {
  let newString;
  let palindromString;
  if (typeof string !== 'number'){
    newString = string.toLowerCase();
  } else {
    newString = string.toString().toLowerCase();
  }
  palindromString = newString.split('').reverse().join('');
  return palindromString === newString  ? true : false;
} 