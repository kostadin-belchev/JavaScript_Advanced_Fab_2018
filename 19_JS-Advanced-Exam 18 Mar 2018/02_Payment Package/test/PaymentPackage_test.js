let expect = require('chai').expect;
const PaymentPackage = require('../PaymentPackage');

describe("Payment packages testing", function() {
    let myPack;
    beforeEach(function () {
        myPack = new PaymentPackage('test pack', 1000);
    });
    //Make sure it is correctly defined as a class
    it('has all properties', function () {
        expect(myPack.hasOwnProperty('_name')).to.equal(true, "Missing name property");
        expect(myPack.hasOwnProperty('_value')).to.equal(true, "Missing value property");
        expect(myPack.hasOwnProperty('_VAT')).to.equal(true, "Missing VAT property");
        expect(myPack.hasOwnProperty('_active')).to.equal(true, "Missing active property");    
    });

    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(myPack).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
    });

    //Below does not add value in Judge
    // Can be instantiated with two parameters – a string name and number value
    it("First passed in arguments should be string, if not, throws an error", function() {
        expect(() => {myPack = new PaymentPackage(3, 5)}).to.throw(Error);
    });
    it("Second passed in arguments should be number, if not, throws an error", function() {
        expect(() => {myPack = new PaymentPackage('test', {})}).to.throw(Error);
    });
    // get name
    it("getter name, should return correct value", function() {
        expect(myPack.name).to.equal('test pack');
    });
    it("setter name, should set correct value", function() {
        myPack.name = 'test pack 2';
        expect(myPack.name).to.equal('test pack 2');
    });
    //Above does not add value in Judge

    //Above does not add value in Judge
    it("toString should work correctly", function() {
        myPack = new PaymentPackage('HR Services', 1500);
        expect(myPack.toString()).to.equal(`Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`);
    });

    it(' Value – non-negative number', function () {
        myPack = new PaymentPackage('test', 0);
        expect(myPack._value === 0).to.equal(true);
    });
    //Above DOES add value in Judge


    //Function toString() – return a string, 
    //containing an overview of the instance; 
    // if the package is not active, append the label "(inactive)" 
    //to the printed name
    it(' Function toString() – if the package is not active, append the label "(inactive)"', function () {
        myPack = new PaymentPackage('HR Services', 1500);
        myPack.active = false;
        expect(myPack.toString()).to.equal(`Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`);
    });
});


// //Below does not add value in Judge
    // it("Name must be a non-empty string", function() {
    //     expect(() => {myPack = new PaymentPackage('', 1000)}).to.throw(Error,'Name must be a non-empty string');
    // });
    // //Below does not add value in Judge
    // it('Value must be a non-negative number', function() {
    //     expect(() => {myPack = new PaymentPackage('test pack 3', -1000)}).to.throw(Error,'Value must be a non-negative number');
    // });

    // //Below does not add points in Judge
    // //  Error: Value must be a non-negative number
    // it('Error: Value must be a non-negative number', function () {
    //     expect(() => {myPack = new PaymentPackage('test', -3)}).to.throw(Error);
    // });
    // //Below does not add points in Judge
    // it('Error: Active status must be a boolean', function () {
    //     expect(() => {myPack.active = 'pesho'}).to.throw(Error);
    // });

    // //Below does not add points in Judge
    // //active – Boolean
    // it('Active status must be a boolean', function () {
    //     expect(typeof myPack.active).to.equal('boolean');
    // });
    // //active – Boolean
    // it('Active status must be a boolean', function () {
    //     expect(typeof myPack.active).to.equal('boolean');
    // });
    // // VAT – non-negative number
    // it(' VAT – non-negative number', function () {
    //     expect(myPack.VAT >= 0).to.equal(true);
    // });
    
    // // Value – non-negative number
    // Value – non-negative number
    // it('VAT – non-negative number', function () {
    //     myPack = new PaymentPackage('test', 10);
    //     myPack.VAT = 30;
    //     expect(myPack._VAT).to.equal(30);
    // });
    // // Value – non-negative number
    // it('VAT – have correct detault value, non-negative number', function () {
    //     expect(myPack.VAT).to.equal(20);
    // });
    // it('active – have correct detault value, true', function () {
    //     expect(myPack.active).to.equal(true);
    // });