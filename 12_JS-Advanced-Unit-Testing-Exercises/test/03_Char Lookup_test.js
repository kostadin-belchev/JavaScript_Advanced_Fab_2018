let expect = require('chai').expect;
const lookupChar = require('../03_Char Lookup').lookupChar;

describe('lookupChar unit testing', function () {
    // Testing if the first parameter is not a string or the second parameter is not an integer - return undefined
    // First param
    it('with incorrect first parameter, should return undefined', function () {
        expect(lookupChar(55, 0)).to.be.undefined;
    });
    // Second param
    it('with incorrect second parameter, should return undefined', function () {
        expect(lookupChar('test string', 'gosho')).to.be.undefined;
    });

    // we need to make sure that the passed in index is not a floating point number
    it('with incorrect second parameter as a floating point number, should return undefined', function () {
        expect(lookupChar('test string', 7.7)).to.be.undefined;
    });

    //o	If both parameters are of the correct type, but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return the text "Incorrect index". 
    it('with incorrect second parameter as negative index, should return "Incorrect index"', function () {
        expect(lookupChar('test string', -2)).to.equal("Incorrect index");
    });

    it('with incorrect second parameter as index bigger than or equal to the length of the string, should return "Incorrect index"', function () {
        expect(lookupChar('test', 14)).to.equal("Incorrect index");
    });
    // testing edge case, where length is equal to given index
    it('with incorrect second parameter as index bigger than or equal to the length of the string, should return "Incorrect index"', function () {
        expect(lookupChar('test', 4)).to.equal("Incorrect index");
    });

    // Having cleared all the validation checks it’s time for the last exit condition - returning a correct result,
    it('with correct parameters, should return correct value', function () {
        expect(lookupChar('kosta', 2)).to.equal('s');
    });

    it('with correct parameters, should return correct value', function () {
        expect(lookupChar('kosta', 0)).to.equal('k');
    });

    it('with correct parameters, should return correct value', function () {
        expect(lookupChar('stefan', 5)).to.equal('n');
    });
})