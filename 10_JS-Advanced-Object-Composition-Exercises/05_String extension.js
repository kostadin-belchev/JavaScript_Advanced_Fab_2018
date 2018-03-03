(function () {
    String.prototype.ensureStart = function (str = '') {
        let currString = this.toString();
        // append str to the beginning of a currentString, only if it’s not already present
        if (str != currString.slice(0, str.length)) {
            currString = str + this;
        }
        return currString;
    }

    String.prototype.ensureEnd = function (str = '') {
        let currString = this.toString();
        // append str to the end of a currentString, only if it’s not already present
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
        // let currentString = this.toString();
        // let stringLength = currentString.length;
        // let elipsis = '...';
        // stringLength;
        // if (n < 4) { // If n is less than 4, return n amount of periods.
        //     currentString = '.'.repeat(n);
        // } else if (currentString.indexOf(' ') < 0) { // If no space occurs anywhere in the currentString, return n – 3 characters and an ellipsis
        //     currentString = currentString.slice(0, n - 3) + elipsis;
        // } else if (currentString.length >= n) { // If a currentString is less than n characters long, return the same currentString, meaning it does not enter in this if statement
        // // If it is longer, meaning it entered in this if statement, 
        // // split the currentString where a space occurs and append an ellipsis to it so that the total length is less than or equal to n.
        //     let stringTokens = currentString.split(' ');
        //     stringTokens;
        //     let counter = 0;
        //     while (currentString.length + elipsis.length > n) {
        //         currentString = stringTokens[counter] + " " + stringTokens[counter + 1];
        //         currentString;
        //         counter++;
        //     }
        //     currentString = currentString + elipsis;
        //     currentString;
        // }
        // return currentString;
        let currentString = this.toString();

        if (n > currentString.length-1) {
            return currentString;
        }

        if (n < 4) {
            return '.'.repeat(n)
        }

        while (currentString.lastIndexOf(' ') != -1) {
            if (currentString.lastIndexOf(' ') <= n - 2) {
                return currentString.slice(0, currentString.lastIndexOf(' ')) + '...';
            }
            currentString = currentString.slice(0, currentString.lastIndexOf(' '))
        }
        return currentString.slice(0, n - 3) + '...'
    }

    String.format = function (...params) {
        let string = params[0];
        string;
        for (let i = 1; i < params.length; i++) {
            let currParameter = params[i];
            const regex = /\{(\d)\}/;
            string = string.replace(regex, currParameter);
        }
        return string;
    }
})();


let str = 'my currentString'
str = str.ensureStart('my')
str = str.ensureStart('hello ')
str = str.truncate(16)
str = str.truncate(14)
str = str.truncate(8)
str = str.truncate(4)
str = str.truncate(2)
str = String.format('The {0} {1} fox',  'quick', 'brown');
str;
str = String.format('jumps {0} {1}',  'dog');
str;
