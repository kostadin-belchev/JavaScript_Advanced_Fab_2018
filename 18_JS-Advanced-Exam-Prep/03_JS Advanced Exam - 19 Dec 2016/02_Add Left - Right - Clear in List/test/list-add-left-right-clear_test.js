let expect = require('chai').expect;
const makeList = require('../list-add-left-right-clear');

describe("List", function() {
    let myList = {};
    beforeEach(function () {
        myList = makeList();
    });
    // "Testing addLeft function"
    it("return correct result when addLeft used with numbers", function() {
        myList.addLeft(2);
        myList.addLeft(1);
        myList.addLeft(0);
        expect(`list = [${myList}]`).to.equal('list = [0, 1, 2]');
    });
    it("return correct result when addLeft used with strings", function() {
        myList.addLeft('pesho');
        myList.addLeft(1);
        myList.addLeft('gosho');
        expect(`list = [${myList}]`).to.equal('list = [gosho, 1, pesho]');
    });
    // Testing inicialization of list
    it("Testing inicialization of list", function() {
        it("return empty string when initialized", function() {
            expect(myList.toSting()).to.equal('');
        });
    });
    // "Testing addRight function"
    it("return correct result when addRight used with numbers", function() {
        myList.addRight(2);
        myList.addRight(1.1);
        myList.addRight(0);
        expect(`list = [${myList}]`).to.equal('list = [2, 1.1, 0]');
    });
    it("return correct result when addRight used with strings", function() {
        myList.addRight('pesho');
        myList.addRight(1);
        myList.addRight('gosho');
        expect(`list = [${myList}]`).to.equal('list = [pesho, 1, gosho]');
    });
    // "Testing clear function"
    it("return correct result when clear used with numbers", function() {
        myList.addRight(2);
        myList.addRight(1.1);
        myList.addRight(0);
        myList.clear();
        expect(`list = [${myList}]`).to.equal('list = []');
    });
    it("return correct result when clear used with strings", function() {
        myList.addRight('pesho');
        myList.addRight(1);
        myList.addRight('gosho');
        myList.clear();
        expect(`list = [${myList}]`).to.equal('list = []');
    });
});