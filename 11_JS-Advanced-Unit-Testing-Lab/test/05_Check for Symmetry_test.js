let expect = require('chai').expect;
const isSymmetric = require('../05_Check for Symmetry').isSymmetric;

describe('isSymetric unit testing', function () {
    
    it('return false for any input that isn’t of the correct type which is array', function () {
        expect(isSymmetric('pesho')).to.be.false;
    });

    it('return true for even length array [1,2,3,3,2,1] ', function () {
        expect(isSymmetric([1,2,3,3,2,1])).to.be.true;
    });

    it('return false for even length array [1,2,3,4,2,1] ', function () {
        expect(isSymmetric([1,2,3,4,2,1])).to.be.false;
    });

    it('return true for odd length array [1,2,3,2,1] ', function () {
        expect(isSymmetric([1,2,3,2,1])).to.be.true;
    });

    it('return false for odd length array [1,2,3,7,1] ', function () {
        expect(isSymmetric([1,2,3,7,1])).to.be.false;
    });

    it('return true for [7]', function () {
        expect(isSymmetric([7])).to.be.true;
    });

    it('return false for [2,7]', function () {
        expect(isSymmetric([2,7])).to.be.false;
    });

    it("return false for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.true;
    });

    it("return false for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),'pesho','hi',5])).to.be.false;
    });
})