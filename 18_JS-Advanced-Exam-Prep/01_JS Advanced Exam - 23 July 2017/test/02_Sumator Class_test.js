let expect = require('chai').expect;
const Sumator = require('../02_Sumator Class');

describe("Sumator Class", function() {
    let list;
    beforeEach(function () {
        list = new Sumator();
    });
    // it('has all properties', function () {
    //     expect(list.hasOwnProperty('data')).to.equal(true, "Missing data property");
    // });
    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(list).hasOwnProperty('add')).to.equal(true, "Missing add function");
        expect(Object.getPrototypeOf(list).hasOwnProperty('sumNums')).to.equal(true, "Missing sumNums function");
        expect(Object.getPrototypeOf(list).hasOwnProperty('removeByFilter')).to.equal(true, "Missing removeByFilter function");
        expect(Object.getPrototypeOf(list).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
    });
    // it('must initialize data to an empty array', function () {
    //     expect(list.data instanceof Array).to.equal(true, 'Data must be of type array');
    //     expect(list.data.length).to.equal(0, 'Data array ust be initialized empty');
    // });
    it("be correctly defined as a class/function", function() {
        expect(typeof Sumator).to.equal('function');
    });
    it("be initialized as an empty string if printed", function() {
        expect(`list = [${list}]`).to.equal('list = [(empty)]');
    });
    it("fill data when add is used", function() {
        list.add(1);
        list.add(2);
        list.add("three");
        list.add(4);
        expect(`list = [${list}]`).to.equal('list = [1, 2, three, 4]');
    });
    it("sum only numbers when sumNums invoked", function() {
        list.add(1);
        list.add(2);
        list.add("three");
        list.add(4);
        expect("sum = " + list.sumNums()).to.equal('sum = 7');
    });
    it("sum only numbers, even floats when sumNums invoked", function() {
        list.add(1);
        list.add(2);
        list.add("three");
        list.add(4);
        list.add("5.5"); // not a number!
        list.add(7.7);
        expect("sum = " + list.sumNums()).to.equal('sum = 14.7');
    });
    it("remove by filter", function() {
        list.add(1);
        list.add(2);
        list.add("three");
        list.add(4);
        list.add("5.5"); // not a number!
        list.add(7.7);
        list.removeByFilter(x => x % 2 === 0);
        expect(`list = [${list}]`).to.equal('list = [1, three, 5.5, 7.7]');
    });
    it("if there are no numbers stored, the sumNums should return zero.", function() {
        list.add("three");
        list.add("5.5"); // not a number!
        expect("sum = " + list.sumNums()).to.equal('sum = 0');
    });
    // it("if there is no data stored, the string should return (empty).", function() {
    //     expect("list = " + list).to.equal('list = (empty)');
    // });
});
