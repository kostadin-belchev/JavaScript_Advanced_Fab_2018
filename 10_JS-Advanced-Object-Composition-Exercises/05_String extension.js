(function () {
    String.prototype.ensureStart = function (str = '') {
        let currString = this.toString();
        // append str to the beginning of a string, only if it’s not already present
        if (str != currString.slice(0, str.length)) {
            currString = str + this;
        }
        return currString;
    }

    String.prototype.ensureEnd = function (str = '') {
        let currString = this.toString();
        // append str to the end of a string, only if it’s not already present
        if (str != currString.slice(currString.length - str.length)) {
            currString = this + str;
        }
        return currString;
    }

    String.prototype.isEmpty = function () {
        if (this.toString().length == 0) {
            return true;
        } else {
            return false;
        }
    }

    String.prototype.truncate = function (n) {
        let string = this.toString();
        let stringLength = string.length;
        let elipsis = '...';
        stringLength;
        if (n < 4) { // If n is less than 4, return n amount of periods.
            string = '.'.repeat(n);
        } else if (string.indexOf(' ') < 0) { // If no space occurs anywhere in the string, return n – 3 characters and an ellipsis
            string = string.slice(0, n - 3) + elipsis;

        } else if (string.length >= n) { // If a string is less than n characters long, return the same string, meaning it does not enter in this if statement
        // If it is longer, meaning it entered in this if statement, 
        // split the string where a space occurs and append an ellipsis to it so that the total length is less than or equal to n.
            let stringTokens = string.split(' ');
            stringTokens;
            let counter = 0;
            while (string.length > n + elipsis.length) {
                string = stringTokens[counter] + " " + stringTokens[counter + 1];
                counter++;
            }
            string = string + elipsis;
        }
        return string;
    }
})();


let str = 'my string';
str = str.ensureStart('my'); // 'my' already present
str = str.ensureStart('hello ');
str = str.ensureEnd('ing');
//str = str.truncate(16);
str;
//str = str.truncate(14);
str;
test = 'testing'.truncate(6);
test;
test1 = str.truncate(8);
test1;
test1 = test1.truncate(4);
test1;


test2 = 'hello '.slice(0, 'hello '.length - 1);
test2;

// str = str.truncate(16) 
// str = str.truncate(14)
// str = str.truncate(8)
// str = str.truncate(4)
// str = str.truncate(2)
// str = String.format('The {0} {1} fox',  'quick', 'brown');
// str = String.format('jumps {0} {1}',  'dog');
