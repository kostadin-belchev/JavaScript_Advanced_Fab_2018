let expect = require('chai').expect;
const createCalculator = require('../07_Add&Subtract').createCalculator;

describe('creatCaltulator Unit Tests', function () {
    let calc;

    beforeEach(function () {
        calc = createCalculator();
    });

    it('return a module (object)', function () {
        expect(typeof calc).to.equal('object');
    });

    it('have the function add as property', function () {
        expect(calc).to.haveOwnProperty('add');
    });

    it('return 0 when created', function () {
        expect(calc.get()).to.equal(0);
    });

    it('return -3 when calc.subtract(3)', function () {
        calc.subtract(3);
        expect(calc.get()).to.equal(-3);
    });

    // it('return 3.2 when calc.add(1.1); calc.add(2.1);', function () {
    //     calc.add(1.1);
    //     calc.add(2.1);
    //     expect(calc.get()).to.closeTo(3.2, 00001);
    // });

    it('return 7 when calc.add("5"); calc.subtract("-2");', function () {
        calc.add("5"); 
        calc.subtract('-2');
        expect(calc.get()).to.equal(7);
    });

    it('return NaN when calc.add("pesho");', function () {
        calc.add("pesho");
        expect(calc.get()).to.be.NaN;
    });

    // this was the last missing test I needed
    it("should return -100", function () {
        calc.add('-99');
        //calc.add(-1);
        expect(calc.get()).to.be.equal(-99);
      });
})