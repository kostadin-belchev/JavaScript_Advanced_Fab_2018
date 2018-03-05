let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
const sharedObject = require('../05_Shared Object');

document.body.innerHTML =
`<body>
<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>
</body>`;

describe('sharedObject Unit testing', function () {
    describe('inicialization tests', function () {
        //•	Test that the initial state of the sharedObject meets the specification (i.e. name and income start as null).
        it('inicialize name as null', function () {
            expect(sharedObject.name).to.be.null;
        });
        it('inicialize income as null', function () {
            expect(sharedObject.income).to.be.null;
        });
    });

    describe('changeName tests', function () {
        // In case the passed in parameter is an empty string - no changes should be made, 
        // alternatively the sharedObject's name property and the name textbox's value should be set to the passed in parameter
        it('name with empty string, should return with no changes', function () {
            sharedObject.changeName('Ivan');
            sharedObject.changeName('');
            expect(sharedObject.name).to.equal('Ivan');
        });

        it('name with a non-empty string, should return the non-empry string', function () {
            sharedObject.changeName('Kosta');
            expect(sharedObject.name).to.equal('Kosta');
        });
        // the name textbox's value should be set to the passed in parameter
        it('with a non-empty string, should return the non-empry string', function () {
            sharedObject.changeName('Kosta');
            let nameTextboxValue = $('#name').val();
            expect(nameTextboxValue).to.equal('Kosta');
        });
    });

    describe('changeIncome tests', function () {
        // - In case the passed in parameter is not a positive integer  - no changes should be made,
        // alternatively the sharedObject's income property and the income textbox's value should be set to the passed in parameter.
        it('income with not a positive integer, should return with no changes', function () {
            sharedObject.changeIncome(-100);
            expect(sharedObject.income).to.be.null;
        });

        it('income with not a positive floating point number, should return with no changes', function () {
            sharedObject.changeIncome(3.14);
            expect(sharedObject.income).to.be.null;
        });

        it('income with a valid integer, should return correct result', function () {
            sharedObject.changeIncome(1000);
            expect(sharedObject.income).to.equal(1000);
        });
        // the income textbox's value should be set to the passed in parameter
        it('income with a valid integer, should return correct value in income textbox', function () {
            sharedObject.changeIncome(2000);
            let incomeTextboxValue = $('#income').val();
            expect(incomeTextboxValue).to.equal('2000');
        });

        // edge case with 0
        it('income with a 0, should return with no changes', function () {
            sharedObject.changeIncome(1000);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.equal(1000);
        });
    });

    describe('updateName() tests', function () {
        // In case the name textbox's value is an empty string - no changes should be made,
        // alternatively the name property of the sharedObject should be set to the value of the name textbox. 
        it("with name textbox's value is an empty string, should return with no changes", function () {
            sharedObject.changeName('Stoyan');
            let nameField = $('#name').val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Stoyan');
        });

        it("name textbox's value with a non-empty string, should return the non-empry string", function () {
            let nameField = $('#name').val('Kosta');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Kosta');
        });
        
    });

    describe('updateIncome() tests', function () {
        // In case the income textbox's value cannot be parsed to a positive integer - no changes should be made,
        // alternatively the income property of the sharedObject should be set to the value of the income textbox.
        it("with income textbox's value that cannot be parsed to a positive integer(e.g. string), should return with no changes", function () {
            sharedObject.changeIncome(1000);
            let incomeField = $('#income');
            incomeField.val('pesho');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(1000);
        });

        it("with income textbox's value that cannot be parsed to a positive integer(e.g. floating point), should return with no changes", function () {
            sharedObject.changeIncome(1000);
            let incomeField = $('#income');
            incomeField.val('3.14');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(1000);
        });

        it("income textbox's value with a valid interger, should set value of income property of sharedOnbect to that value", function () {
            sharedObject.changeIncome(3000);
            let incomeField = $('#income');
            incomeField.val(500);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(500);
        });

        it("income textbox's value with a negative, should return with no changes", function () {
            sharedObject.changeIncome(3000);
            let incomeField = $('#income');
            incomeField.val(-100);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(3000);
        });
        
        // edge case with 0
        it("income textbox's value with 0, should return with no changes", function () {
            sharedObject.changeIncome(3000);
            let incomeField = $('#income');
            incomeField.val(0);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(3000);
        });
    });
});