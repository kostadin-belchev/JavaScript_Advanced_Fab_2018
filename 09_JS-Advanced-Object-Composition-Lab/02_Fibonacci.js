function getFibonator() {
    let f1 = 1;
    let f2 = 1;
    let f3 = 0;
    let fibonator = function () {
        f1 = f2;
        f2 = f3;
        f3 = f1 + f2;
        return f3;
    }
    return fibonator;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
