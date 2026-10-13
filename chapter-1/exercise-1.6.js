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
    return abs(square(guess) - x) < 0.001;
}

function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
    ? guess
    : sqrt_iter(improve(guess, x), x);
}

function sqrt(x) {
    return sqrt_iter(1, x)
}

function conditional(predicate, then_clause, else_clause) {
    return predicate ? then_clause : else_clause;
}

function sqrt_iter_with_conditional_func(guess, x) {
    return conditional(is_good_enough(guess, x),
                        guess,
                        sqrt_iter_with_conditional_func(improve(guess, x),
                            x));
}