let expect = require('chai').expect;
const isOddOrEven = require('../02_Even Or Odd').isOddOrEven;

describe('isOddOrEven unit testing', function () {
    // We can write one or two tests passing things other than string to the function and expecting it to return undefined.
    it('return undefined for ([])', function () {
        expect(isOddOrEven([])).to.be.undefined;
    });

    it('return undefined for ({name: "Ivan"})', function () {
        expect(isOddOrEven({name: 'Ivan'})).to.be.undefined;
    });

    it('return undefined for numbers (7)', function () {
        expect(isOddOrEven(7)).to.be.undefined;
    });

    // Testing EVEN
    it('return even for even length strings ("sd")', function () {
        expect(isOddOrEven('sd')).to.equal('even');
    });

    // Testing ODD
    it('with odd length strings, should return odd', function () {
        expect(isOddOrEven('kosta')).to.equal('odd');
    });


    //Extra test
    it('with multiple consecutive chesks, should return correct values', function () {
        expect(isOddOrEven('kosta')).to.equal('odd');
        expect(isOddOrEven('kostadin')).to.equal('even');
        expect(isOddOrEven('kosa')).to.equal('even');
        expect(isOddOrEven('kos')).to.equal('odd');
    });
})