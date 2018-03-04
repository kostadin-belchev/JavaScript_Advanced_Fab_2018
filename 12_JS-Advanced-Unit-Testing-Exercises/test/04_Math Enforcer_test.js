let expect = require('chai').expect;
const mathEnforcer = require('../04_Math Enforcer');

describe('mathEnforce Unit Testing', function () {
    describe('addFive tests', function () {
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.addFive('pesho')).to.be.undefined;
        });
        // •	Test how the program behaves when passing in negative values.
        it('with a negative number parameter, should return correct result', function () {
            expect(mathEnforcer.addFive(-2)).to.equal(3);
        });

        // •	Test the program with floating point numbers (use Chai’s closeTo method to compare floating point numbers).
        it('with a floating point number parameter, should return correct result', function () {
            expect(mathEnforcer.addFive(2.1)).to.be.closeTo(7.1, 0.01);
        });
    });

    describe('subtractTen tests', function () {
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.subtractTen('gosho')).to.be.undefined;
        });
        // •	Test how the program behaves when passing in negative values.
        it('with a negative number parameter, should return correct result', function () {
            expect(mathEnforcer.subtractTen(-2)).to.equal(-12);
        });

        // •	Test the program with floating point numbers (use Chai’s closeTo method to compare floating point numbers).
        it('with a floating point number parameter, should return correct result', function () {
            expect(mathEnforcer.subtractTen(2.1)).to.be.closeTo(-7.9, 0.01);
        });
    });

    describe('sum tests', function () {
        it('with a non-number first parameter, should return correct result', function () {
            expect(mathEnforcer.sum('gosho', 1)).to.be.undefined;
        });
        it('with a non-number second parameter, should return correct result', function () {
            expect(mathEnforcer.sum(7, 'pesho')).to.be.undefined;
        });
        it('with a non-number first & second parameter, should return correct result', function () {
            expect(mathEnforcer.sum('gosho', 'pesho')).to.be.undefined;
        });
        // •	Test how the program behaves when passing in negative values.
        it('with a negative number parameters, should return correct result', function () {
            expect(mathEnforcer.sum(-2, -9)).to.equal(-11);
        });

        // •	Test the program with floating point numbers (use Chai’s closeTo method to compare floating point numbers).
        it('with a floating point number parameter, should return correct result', function () {
            expect(mathEnforcer.sum(2.1, 1.1)).to.be.closeTo(3.2, 0.01);
        });
    });
});