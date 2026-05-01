/*

Description: 

https://www.codewars.com/kata/56d5166ec87df55dbe000063

Program a function that takes in an array of arrays of numbers and returns the sum of the averages of the arrays.

Example
[
  [3, 4, 1, 3, 5, 1, 4], #  (3 + 4 + 1 + 3 + 5 + 1 + 4) / 7 =  3
  [21, 54, 33, 21, 77]   # (21 + 54 + 33 + 21 + 77)     / 5 = 41.2
]
result: 3 + 41.2 = 44.2

*/

function sumAverage(arrays) {
    let sum = 0;
  
    arrays.forEach(array => {
      sum += array.reduce((acc, number) => acc + number, 0) / array.length;
    })
  
    return sum;
}
