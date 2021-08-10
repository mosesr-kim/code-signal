function checkPalindrome(inputString) {
  let word = '';
  let reverseWord = '';
  for (let i = 0; i < inputString.length; i++) {
    word += inputString[i];
  }
  for (let i = inputString.length - 1; i >= 0; i--) {
    reverseWord += inputString[i];
  }
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}
