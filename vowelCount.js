/*

Description: 

https://www.codewars.com/kata/54ff3102c1bad923760001f3

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
    const obj = {};
    let count = 0;

    str.split("").forEach(char => {
        if (!obj[char]) {
            obj[char] = 1;
        } else {
            obj[char]++;
        }
    })

    for (let key in obj) {
        if ("aeiou".includes(key)) {
            count += obj[key];
        }
    }

    return count;
}
