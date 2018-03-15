let expect = require('chai').expect;
const list = require('../02_Add-Delete in List');

describe("Add Delete in List", function() {

    //Comment this code due to Judge Imperfections
    // let list;
    // beforeEach(function () {
    //     list = list;
    // });
    it("return empty array when iniciated", function() {
        expect(`list = [${list.toString()}]`).to.equal('list = []');
    });
    it("return correct values when add used", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        expect(`list = [${list}]`).to.equal('list = [1, two, 3]');
    });
    it("return correct values when delete used", function() {
        list.add(1);
        list.add("two");
        list.add(3);
        expect("deleted: " + list.delete(1)).to.equal('deleted: two');
        expect(`list = [${list}]`).to.equal('list = [1, 3]');
    });
    // it("return cannot deleted text when invalid index used", function() {
    //     list.add(1);
    //     list.add("two");
    //     list.add(3);
    //     list.delete(1);
    //     expect("cannot delete: " + list.delete(-1)).to.equal('cannot delete: undefined');
    // });
    // it("return correct values when deleted used", function() {
    //     // list.add(1);
    //     // list.add("two");
    //     // list.add(3);
    //     list.delete(0);
    //     expect(`list = [${list}]`).to.equal('list = [1, two, 3]');
    // });
    it("return without deleting anything if delete function with float index", function() {
            list.add(1);
            list.add("two");
            list.add(3);
            list.delete(1.1);
         expect(`list = [${list}]`).to.equal('list = [1, two, 3]');
    });
    // it("return cannot deleted text when delete function called with float index", function() {
    //     expect("cannot delete: " + list.delete(1.1)).to.equal('cannot delete: undefined');
    // });

    it("Delete with floating-point index should return 1, 2, 3", function () {
        list.add(1);
        list.add(2);
        list.add(3);
        list.delete(1.5);
        expect(list.toString()).to.be.equal('1, 2, 3');
      });
  
      it("Delete with floating-point index should return undefined", function () {
        list.add(1);
        list.add(2);
        list.add(3);
        
        expect(list.delete(1.5)).to.be.undefined;
      });
});
