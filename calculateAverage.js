/*

Description: 

https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.

*/

function findAverage(array) {
    if (array.length == 0) {
        return 0;
    }

    return array.reduce((acc, el) => acc + el) / array.length;
}
