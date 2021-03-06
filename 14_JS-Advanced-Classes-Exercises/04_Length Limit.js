class Stringer {
    constructor(string, initialLength) {
        this.innerString = string;
        this.innerLength = initialLength;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        if (this.innerLength - length < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
    }
    // which returns the string, the object was initialized with. 
    // If the length of the string is greater than the length property, the string should be cut to from right to left,
    // so that it has the same length as the length property, and you should add 3 dots after it, if such truncation was done.
    // If the length property is 0, just return 3 dots.
    toString() {
        if (this.innerString.length > this.innerLength) {
            return `${this.innerString.substr(0, this.innerLength)}...`
        } else {
            return this.innerString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
