/*

https://www.codewars.com/kata/69cda5b85599f307742ce70a

Task
Write a function countLonelyLetters(text) that counts how many letters in a string are lonely.

A letter is lonely when:

It appears exactly once in the whole string.
Its alphabetical neighbors are both absent from the string.
For example:

d is not lonely if c or e also appears somewhere in the text.
m is lonely if l, m, and n are handled like this:
m appears once
l does not appear
n does not appear
Rules
Ignore letter case.
Ignore all non-letter characters.
Work only with English letters a-z.
Examples
countLonelyLetters("ad") // 2
countLonelyLetters("abc") // 0
countLonelyLetters("Hello, World!") // 3
countLonelyLetters("A-dA") // 1
countLonelyLetters("zz") // 0

*/

function countLonelyLetters(text) {
    const textArr = text.toLowerCase().split("").filter(char => char >= "a" && char <= "z");
    const obj = {};
    const arr = [];
    const lonelyNumbers = [];

    textArr.forEach(char => {
        if (obj[char] == undefined) {
            obj[char] = 1
        } else {
            obj[char]++;
        }
    })

    for (let key in obj) {
        if (obj[key] == 1) {
            arr.push(key);
        }
    }

    arr.forEach(char => {
        let charCode = char.charCodeAt(0);

        if (!(obj[String.fromCharCode(charCode + 1)] || obj[String.fromCharCode(charCode - 1)])) {
            lonelyNumbers.push(char);
        }
    })

    return lonelyNumbers.length;
}
