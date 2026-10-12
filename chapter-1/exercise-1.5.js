/* Ben Bitdiddle has invented the interpreter he is faced with is using applicative-order evaluation or normal-order evaluation. He declares the following two factions: */

function p() { return p(); }

function test(x, y) {
    return x === 0 ? 0 : y;
}

/* The he evaluates the statement */

test(0, p());

// Answer:

/* For test and p definitions, the statement test(a, b) evaluate in next orden (not exactly):
1. x = a, y = b
2. x === 0
2.1. If x variable is zero (a = 0), the statement is true.
2.1. If x variable is not zero (a <> 0), the statement is false.
3. The evaluation ternaria.
3.1. If statement is true, then result is 0.
3.2. If statement is false, then result is y. Like y is equal to b, the result value is b.
4. Function return value.
4.1. Function return 0, if x = 0.
4.2. Function return b, if x <> 0.
5. Done.

The statement test(0, p()) is "RangeError: Maximum call stack size exceeded". It's normal. The step 1, value b is not assigned y because b into a infinity cycle. This situation b is not defined and interpreter break the call cycle (the call stack has a limit size).
*/