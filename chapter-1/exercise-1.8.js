/* Newton's method for cube roots.
    [(x / (y*y)) + 2y] / 3

    sqrt[3]{x} = the y such that y^3 = x
*/

function cube(y) {
    return y * y * y;
}

function square(y) {
    return y * y;
}

function abs(n) {
    return n >= 0 ? n : -n;
}

function is_good_enough(guess, x) {
    return abs(cube(guess) - x) < 0.0001;
}

function average(x, y) {
    return (x/square(y) + 2*y) / 3;
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function cube_root_iter(guess, x) {
    return is_good_enough(guess, x)
    ? guess
    : cube_root_iter(improve(guess, x), x);
}

function cube_root(x) {
    return cube_root_iter(1, x);
}