let expect = require('chai').expect;
const sum = require('../04_Sum of Numbers').sum;

describe('sum(arr) unit testing', function () {
    
    it('return 0 when empty array is given', function () {
        expect(sum([])).to.equal(0);
    });

    it('return 3 when sum([1,2])', function () {
        expect(sum([1,2])).to.equal(3);
    });

    // it('work with negative numbers, should return -4 when sum([-1,-3])', function () {
    //     expect(SUM([-1,-3])).to.equal(-4);
    // });

    it("should return 3.15", function () {
        expect(sum([-1,3.15,1])).to.be.equal(3.15);
    });

    // it('work with fractions, should return 3.2 when sum([1.1, 2.1])', function () {
    //     expect(SUM([1.1, 2.1])).to.be.closeTo(3.2, 0.00001);
    // });

    it('with invalid argument, should return NaN when sum("test")', function () {
        expect(sum('test')).to.be.NaN;
    });
})