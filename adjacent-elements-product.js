/*
Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

An array of integers containing at least two elements.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

[output] integer

The largest product of adjacent elements.
*/

function adjacentElementsProduct(inputArray) {
  let largestProduct = inputArray[0] * inputArray[1];
  for (let i = 2; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i - 1] > largestProduct) {
      largestProduct = inputArray[i] * inputArray[i - 1];
    }
  }
  return largestProduct;
}
