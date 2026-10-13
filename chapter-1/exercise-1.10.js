function A(x, y) {
    return y === 0
    ? 0
    : x === 0
    ? 2 * y
    : y === 1
    ? 2
    : A(x - 1, A(x, y - 1));
}

function f(n) { return A(0, n); }
// n == 0, f(0) -> 0
// n != 0, f(n) -> 2n

function g(n) { return A(1, n); }
// n == 0, g(0) -> 0
// n == 1, g(1) -> 2
// n == 2, g(2) -> A(0, A(1, 1)) = A(0, 2) -> 4
// n == 3, g(3) -> A(0, A(1, 2)) = A(0, A(0, A(1, 1))) = A(0, A(0, 2)) = A(0, 4) -> 8
// n == 4, g(4) -> A(0, A(1, 3)) = A(0, A(0, A(1, 2))) = A(0, A(0, 8)) = A(0, 16) -> 16
// By mathematical induction we can verify that for n > 0, g(n) = 2^n.

function h(n) { return A(2, n); }
// n == 0, h(0) -> 0
// n == 1, h(1) -> 2
// n == 2, h(2) -> A(1, A(2, 1)) = A(1, 2) = A(0, A(1, 1)) = A(0, 2) -> 4
// n == 3, h(3) -> A(2, 3) = A(1, A(2, 2)) = A(1, 4) = A(0, A(1, 3)) = A(0, A(0, A(1, 2))) = A(0, A(0, 4)) = A(0, 8) -> 16




function k(n) { return 5 * n * n; }
// n == 0, k(0) -> 0
// n == 1, k(1) -> 5
// n == 2, k(2) -> 20
// n == 3, k(3) -> 45
// k(3) = 5n^2