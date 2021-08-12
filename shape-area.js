/*
Example

For n = 2, the output should be
shapeArea(n) = 5;
For n = 3, the output should be
shapeArea(n) = 13.
Input / Output

[execution time limit]4 seconds(js)

[input] integer n

Guaranteed constraints:
1 ≤ n < 104.

[output] integer

The area of the n - interesting polygon.
*/

function shapeArea(n) {
  let area = 1;
  for (let i = 1; i < n; i++) {
    area += i * 4;
  }
  return area;
}
