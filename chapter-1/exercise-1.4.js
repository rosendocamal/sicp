/* Observe that our model of evaluation allows for application host function expressions. These are compound expressions that use this observation to describe the behavior of a_plus_abs_b: */

function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }
function a_plus_abs_b(a, b) {
    return (b >= 0 ? plus : minus)(a, b);
}

/* My note:
a_plus_abs_b(a, b) -> main function

If b in [0, infinity), then main function return plus(a, b) and plus(a, b) return a + b
If b < 0, then main function return minus(a, b) and minus return a - b

All cases, the main functions return a + |b|. The only case (b = 0), result is a (= a + |0|).
*/