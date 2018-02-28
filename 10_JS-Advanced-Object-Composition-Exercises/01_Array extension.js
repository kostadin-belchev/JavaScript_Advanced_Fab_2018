(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    
    Array.prototype.skip = function (n) {
        return this.slice(n);
    }
    
    Array.prototype.take = function (n) {
        return this.slice(0, n);
    }
    
    Array.prototype.sum = function () {
        let result = 0;
        for (let i = 0; i < this.length; i++) {
            result += this[i];
        }
        return result;
    }
    
    Array.prototype.average = function () {
        return this.sum()/this.length;
    }
})();

console.log([1, 2, 3].last());
console.log([1, 2, 3].skip(2));
console.log([1, 2, 3].take(2));
console.log([1, 2, 3].sum());
console.log([1, 2, 3].average());

