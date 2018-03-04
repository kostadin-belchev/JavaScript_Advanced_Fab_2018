let expect = require('chai').expect;
let rgbToHexColor = require('../06_RGB to Hex').rgbToHexColor;

describe('RGG to HEX Unit testing', function () {
    
    it('return #000000 for rgbToHexColor(0, 0, 0)', function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('return #FFFFFF for rgbToHexColor(255, 255, 255)', function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('return undefined for rgbToHexColor(256, 15, 15)', function () {
        expect(rgbToHexColor(256, 15, 15)).to.be.undefined;
    });

    it('return undefined for rgbToHexColor(15, 256, 15)', function () {
        expect(rgbToHexColor(15, 256, 15)).to.be.undefined;
    });

    it('return undefined for rgbToHexColor(15, 15, 256)', function () {
        expect(rgbToHexColor(15, 15, 256)).to.be.undefined;
    });

    it('return #020D0F for rgbToHexColor(2, 13, 15)', function () {
        expect(rgbToHexColor(2, 13, 15)).to.equal('#020D0F');
    });

    it('return undefined for rgbToHexColor("pesho", {}, []', function () {
        expect(rgbToHexColor("pesho", {}, [])).to.be.undefined;
    });

    it('return undefined for rgbToHexColor("pesho", {}, []', function () {
        expect(rgbToHexColor()).to.be.undefined;
    });

    it('return undefined for rgbToHexColor(3.14, 0, 0)', function () {
        expect(rgbToHexColor(3.14, 0, 0)).to.be.undefined;
    });

    it('return undefined for rgbToHexColor(0, 3.14, 0)', function () {
        expect(rgbToHexColor(0, 3.14, 0)).to.be.undefined;
    });

    it('return undefined for rgbToHexColor(0, 0, 3.14)', function () {
        expect(rgbToHexColor(0, 0, 3.14)).to.be.undefined;
    });

    it('return undefined for rgbToHexColor(-1, 0, 0)', function () {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });

    it('return undefined for rgbToHexColor(0, -1, 0)', function () {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    });

    it('return undefined for rgbToHexColor(0, 0, -1)', function () {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });
})