let expect = require('chai').expect;
//let jsdom = require('jsdom');
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
    });
});