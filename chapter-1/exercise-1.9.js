/* inc(x) and dec(x) functions is not defined */

function plus(a, b) {
    return a === 0 ? b : inc(plus(dec(a), b));
}

/*
   plus(4, 5) -> 4 != 0 -> inc(plus(dec(4), 5)) = inc(plus(3, 5))
-> plus(3, 5) -> 3 != 0 -> inc(plus(dec(3), 5)) = inc(plus(2, 5))
-> plus(2, 5) -> 2 != 0 -> inc(plus(dec(2), 5)) = inc(plus(1, 5))
-> plus(1, 5) -> 1 != 0 -> inc(plus(dec(1), 5)) = inc(plus(0, 5))
-> plus(0, 5) -> 0 == 0 -> 5
   5 -> inc(5) = 6 -> inc(6) = 7 -> inc(7) = 8 -> inc(8) = 9
-> plus(4, 5) = 9
*/

function plus(a, b) {
    return a === 0 ? b : plus(dec(a), inc(b));
}

/*
   plus(4, 5) -> 4 != 0 -> plus(dec(4), inc(5)) = plus(3, 6)
-> plus(3, 6) -> 3 != 0 -> plus(dec(3), inc(6)) = plus(2, 7)
-> plus(2, 7) -> 2 != 0 -> plus(dec(2), inc(7)) = plus(1, 8)
-> plus(1, 8) -> 1 != 0 -> plus(dec(1), inc(8)) = plus(0, 9)
-> plus(0, 9) -> 0 == 0 -> 9
*/

plus(4, 5);