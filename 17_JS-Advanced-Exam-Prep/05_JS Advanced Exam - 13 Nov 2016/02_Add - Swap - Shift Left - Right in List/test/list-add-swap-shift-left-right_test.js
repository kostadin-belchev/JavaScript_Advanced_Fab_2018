let expect = require('chai').expect;
const createList = require('../list-add-swap-shift-left-right');

describe("List Add Swap Shift", function() {
    let list;
    beforeEach(function () {
        list = createList();
    });
    it('has functions attached to prototype', function () {
        expect(list.hasOwnProperty('add')).to.equal(true, "Missing add function");
        expect(list.hasOwnProperty('shiftLeft')).to.equal(true, "Missing shiftLeft function");
        expect(list.hasOwnProperty('shiftRight')).to.equal(true, "Missing shiftRight function");
        expect(list.hasOwnProperty('swap')).to.equal(true, "Missing swap function");
        expect(list.hasOwnProperty('toString')).to.equal(true, "Missing toString function");
    });
    it("return empty when initialized", function() {
        expect(list.toString()).to.equal('');
    });
    it("return correct result when toString invoked", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        expect(list.toString()).to.equal('1, two, 3');
    });
    it("return correct result when add invoked", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        expect(`list = [${list}]`).to.equal('list = [1, two, 3]');
    });
    it("return correct result when add shiftLeft invoked", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        list.shiftLeft();
        expect(`list = [${list}]`).to.equal('list = [two, 3, 1]');
    });
    it("return correct result when add shiftLeft invoked with 1 element", function() {
        list.add(1);
        list.shiftLeft();
        expect(`list = [${list}]`).to.equal('list = [1]');
    });
    it("return correct result when add shiftRigth invoked with 1 element", function() {
        list.add(1);
        list.shiftRight();
        expect(`list = [${list}]`).to.equal('list = [1]');
    });
    it("return correct result when add shiftRight invoked", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        list.shiftLeft();
        list.add(["four"]);
        list.shiftRight();
        expect(`list = [${list}]`).to.equal('list = [four, two, 3, 1]');
    });
    it("return correct result when swap invoked", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        list.shiftLeft();
        list.add(["four"]);
        list.shiftRight();
        expect(`Swaping [0] and [3]: ${list.swap(0,3)}`).to.equal('Swaping [0] and [3]: true');
    });
    it("return correct result when swap invoked", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        list.shiftLeft();
        list.add(["four"]);
        list.shiftRight();
        list.swap(0,3);
        expect(`Swaping [1] and [1]: ${list.swap(1,1)}`).to.equal('Swaping [1] and [1]: false');
    });
    it("return correct result when swap invoked with out of range index", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        expect(`Swaping [-1] and [1]: ${list.swap(-1,1)}`).to.equal('Swaping [-1] and [1]: false');
    });
    it("return correct result when swap invoked with out of range index", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        expect(`Swaping [1] and [-1]: ${list.swap(1,-1)}`).to.equal('Swaping [1] and [-1]: false');
    });
    it("return correct result when swap invoked with out of range index", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        expect(`Swaping [-1] and [-1]: ${list.swap(-1,-1)}`).to.equal('Swaping [-1] and [-1]: false');
    });
    it("return correct result when swap invoked with float index", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        expect(`Swaping [1.1] and [1]: ${list.swap(1.1,1)}`).to.equal('Swaping [1.1] and [1]: false');
    });
    it("return correct result when swap invoked with float index", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        expect(`Swaping [1] and [1.7]: ${list.swap(1,1.7)}`).to.equal('Swaping [1] and [1.7]: false');
    });
    it("return correct result when swap invoked, see edge cases, first index", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        expect(`Swaping [0] and [1]: ${list.swap(0,1)}`).to.equal('Swaping [0] and [1]: true');
    });
    it("return correct result when swap invoked with string index as first argument", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        expect(`Swaping ["pesho"] and [1]: ${list.swap('pesho',1)}`).to.equal('Swaping ["pesho"] and [1]: false');
    });
    it("return correct result when swap invoked with string index as second argument", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        expect(`Swaping [1] and ["pesho"]: ${list.swap(1,'pesho')}`).to.equal('Swaping [1] and ["pesho"]: false');
    });
    it("return correct result when swap invoked, see edge cases, last index", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        expect(`Swaping [1] and [2]: ${list.swap(1,2)}`).to.equal('Swaping [1] and [2]: true');
    });
    it("return correct result when add shiftLeft invoked n times", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        list.shiftLeft();
        list.shiftLeft();
        list.shiftLeft();
        expect(`list = [${list}]`).to.equal('list = [1, two, 3]');
    });
    it("return correct result when swap invoked, with index bigger than length", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        expect(`Swaping [1] and [3]: ${list.swap(1,3)}`).to.equal('Swaping [1] and [3]: false');
    });
    it('with a non integer first index, should not change the collection', function () {
        list.add('one');
        list.add('two');
        list.swap([4, 13], 1);
        expect(list.toString()).to.equal("one, two");
    });
    it('with a non integer second index, should not change the collection', function () {
        list.add('one');
        list.add('two');
        list.swap(0, [4, 13]);
        expect(list.toString()).to.equal("one, two");
    });
});
