function average(x, y) {
    return (x + y) / 2;
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function square(n) {
    return n * n;
}

function abs(n) {
    return n >= 0
    ? n
    : -n;
}

function is_good_enough(guess, x) {
    console.log(guess, square(guess));
    return abs(square(guess) - x) < 0.0001;
}

function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
    ? guess
    : sqrt_iter(improve(guess, x), x);
}

