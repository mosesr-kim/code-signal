/*
Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A non-empty string consisting of lowercase characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 105.

[output] boolean

true if inputString is a palindrome, false otherwise.
*/

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
