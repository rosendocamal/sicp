/* Declare a function that takes three numbers as arguments and returns the sum of the squares of the two large numbers. */

// Answer:
function sum_of_squares_large_num(a, b, c) {
    function sum_two_squares(x, y) {
        return x*x + y*y;
    }

    function get_smaller(x, y, z) {
        return y <= x ? (z <= y ? z : y) : (z <= x ? z : x);
    }

    const smaller = get_smaller(a, b, c);

    return a === smaller 
    ? sum_two_squares(b, c)
    : b === smaller
    ? sum_two_squares(a, c)
    : sum_two_squares(a, b);
}