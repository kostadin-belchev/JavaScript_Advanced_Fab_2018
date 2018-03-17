let expect = require('chai').expect;
const StringBuilder = require('../string-builder');

describe("String Builder testing", function() {
    let strBld;
    beforeEach(function () {
        strBld = new StringBuilder('test');
    });
    // Make sure it is correctly defined as a class
    // it('has all properties', function () {
    //     expect(strBld.hasOwnProperty('_stringArray')).to.equal(true, "Missing _stringArray property");
    // });
    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(strBld).hasOwnProperty('append')).to.equal(true, "Missing append function");
        expect(Object.getPrototypeOf(strBld).hasOwnProperty('prepend')).to.equal(true, "Missing sprepend function");
        expect(Object.getPrototypeOf(strBld).hasOwnProperty('insertAt')).to.equal(true, "Missing insertAt function");
        expect(Object.getPrototypeOf(strBld).hasOwnProperty('remove')).to.equal(true, "Missing remove function");
        expect(Object.getPrototypeOf(strBld).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
    });

    // Can be instantiated with a passed in string argument or without anything
    it("Can be instantiated with a passed in string argument", function() {
        expect(strBld.toString()).to.equal('test');
    });
    it("Can be instantiated without anything", function() {
        strBld = new StringBuilder();
        expect(strBld.toString()).to.equal('');
    });
    
    // All passed in arguments should be strings. If any of them are not, throws a type error with the following message: "Argument must be a string"
    it("All passed in arguments should be strings, if any of them are not, throws a type error", function() {
        expect(() => {strBld = new StringBuilder(4)}).to.throw(TypeError);
    });

    // Function append(string)
    // – converts the passed in string argument to an array and adds it to the end of the storage
    it("converts the passed in string argument to an array", function() {
        strBld.append(', pesho');
        // expect(strBld._stringArray.length).to.equal(11);
        expect(strBld._stringArray instanceof Array).to.equal(true);
    });
    it("converts the passed in string argument to an array AND adds it to the end of the storage", function() {
        strBld.append(', pesho');
        expect(strBld.toString()).to.equal('test, pesho');
    }); // All passed in arguments should be strings. If any of them are not, throws a type error with the following message: "Argument must be a string"
    it("All passed in arguments should be strings, if any of them are not, throws a type error", function() {
        expect(() => {strBld.append({})}).to.throw(TypeError);
    });

    // Function prepend(string)
    // – converts the passed in string argument to an array and adds it to the beginning of the storage
    // it("converts the passed in string argument to an array", function() {
    //     strBld.prepend('Text: ');
    //     expect(strBld._stringArray instanceof Array).to.equal(true);
    // });
    it("converts the passed in string argument to an array AND adds it to the start of the storage", function() {
        strBld.prepend('Text: ');
        expect(strBld.toString()).to.equal('Text: test');
    });

    // Function insertAt(string, index)
    // – converts the passed in string argument to an array and adds it at the given index (there is no need to check if the index is in range)
    // it("converts the passed in string argument to an array", function() {
    //     let str = new StringBuilder('hello');
    //     str.append(', there');
    //     str.prepend('User, ');
    //     let string = 'woop';
    //     let index = 5;
    //     str.insertAt(string, index);
    //     expect(str._stringArray instanceof Array).to.equal(true);
    // });
    it("converts the passed in string argument to an array and adds it at the given index (there is no need to check if the index is in range)", function() {
        let str = new StringBuilder('hello');
        str.append(', there');
        str.prepend('User, ');
        let string = 'woop';
        let index = 5;
        str.insertAt(string, index);
        expect(str.toString()).to.equal('User,woop hello, there');
    });

    // •	Function remove(startIndex, length) 
    // – removes elements from the storage, starting at the given index (inclusive), length number of characters (there is no need to check if the index is in range)
    it("removes elements from the storage, starting at the given index (inclusive), length number of characters (there is no need to check if the index is in range)", function() {
        let str = new StringBuilder('hello');
        str.append(', there');
        str.prepend('User, ');
        let string = 'woop';
        let index = 5;
        str.insertAt(string, index);
        str.remove(6, 3);
        expect(str.toString()).to.equal('User,w hello, there');
    });
});
