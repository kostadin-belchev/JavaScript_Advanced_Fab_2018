(function solve() {
    let sum = 0;

    function add(numValue) {
        sum = sum + numValue;
        return add;
    };

    add.toString = function () {
        return sum;
    };

    return add;
})();

//console.log(testAdd(1)); // 1
//console.log(testAdd(1)(6)(-3)); // 4