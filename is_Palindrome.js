function isPalindrome(string) {
  let newString;
  let newMass;
  let palindromString;
  if (typeof string !== 'number'){
    newString = string.toLowerCase();
  } else {
    newString = string.toString();
  }
  newMass = newString.split('').reverse();
  palindromString = newMass.join('');
  if (palindromString === newString){
    return true;
  } else {
    return false;
  }
} 