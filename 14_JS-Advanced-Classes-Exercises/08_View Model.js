let jsdom = require('jsdom-global')();
let $ = require('jquery');

class Textbox {
    constructor(selector, regex) {
        //this.value;
        this._elements = $(selector);
        this._invalidSymbols = regex;
        $(this._elements).on('input', (e) => {
            this._value = $(e.target).val(); // this is the e.target
            this.updateElements();
        })
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
        this.updateElements();
    }
    get elements() {
        return this._elements;
    }
    isValid() {
        // if (this._invalidSymbols.test(this._value)) {
        //     return false;
        // } else {
        //     return true;
        // }
        return !this._invalidSymbols.test(this._value);
    }
    updateElements() {
        for (const element of this._elements) {
            $(element).val(this._value);
        }
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input', function(){console.log(textbox.value);});
