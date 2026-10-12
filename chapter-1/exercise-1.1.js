/* Bellow of statements. What is the result printed by the interpreter in response to each statement? Assume that the sequence is to be evaluated in the order in which it is presented. */

10;

5 + 3 + 4;

9 - 1; 

6 / 2; 

2 * 4 + (4 - 6);

const a = 3;

const b = a + 1;

a + b + a * b;

a === b;

b > a && b < a * b ? b : a;

a === 4
? 6
: b === 4
? 6 + 7 + a
: 25;

console.log(2 + (b > a ? b : a));

(a > b
    ? a
    : a < b
    ? b
    : -1)
    *
    (a + 1);

// Answers:
// 10
// 12
// 8
// 3
// 6
// undefined; a is equal to 3
// undefined; b is equal to 4
// 19
// false
// 4
// 16
// 6
// -4