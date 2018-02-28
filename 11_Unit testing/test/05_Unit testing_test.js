let expect = require('chai').expect;
const SUM = require('../05_Unit testing');

describe("sum(arr)", function () {
    
    it("should return 0", function () {
        expect(SUM([])).to.be.equal(0);
    });

    it("should return 3 for [1, 2]", function () {
        expect(SUM([1, 2])).to.be.equal(3);
    });

    it("should return 3.15", function () {
        expect(SUM([-1,3.15,1])).to.be.equal(3.15);
    });
    it("should return NaN", function () {
        expect(SUM('test')).to.be.NaN;
    });
   
});