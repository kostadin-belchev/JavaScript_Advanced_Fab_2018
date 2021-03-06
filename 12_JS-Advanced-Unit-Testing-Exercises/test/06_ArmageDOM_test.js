let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
const nuke = require('../06_ArmageDOM').nuke;



describe('argageDOM unit testing', function () {
    let initialHTML;
    beforeEach(function () {
        document.body.innerHTML = 
        `<body>
        <div id="target">
            <div class="nested target">
                <p>This is some text</p>
            </div>
            <div class="target">
                <p>Empty div</p>
            </div>
            <div class="inside">
                <span class="nested">Some more text</span>
                <span class="target">Some more text</span>
            </div>
        </div>
        </body>
        `;
        initialHTML = $('body').html();
    });

    it('with an invalid jQuery selector', function () {
        let selector1 = $('.inside');
        let selector2 = 7;
        nuke(selector1, selector2);
        let modifiedHTML = $('body').html();
        expect(modifiedHTML).to.equal(initialHTML);
    });
    // deletes all nodes that match both selectors
    it('with a valid jQuery selectors', function () {
        let selector1 = $('.inside');
        let selector2 = $('.nested target');
        nuke(selector1, selector2);
        let modifiedHTML = $('body').html();
        expect(modifiedHTML).to.equal(initialHTML);
    });

    it('with a valud jQuery selectors, BUT should do nothing', function () {
        let selector1 = $('.inside');
        let selector2 = $('.nested')
        nuke(selector1, selector2);
        let modifiedHTML = $('body').html();
        expect(modifiedHTML).to.equal(initialHTML);
    });

    it('Does nothing if the two selectors are the same', function () {
        let selector1 = $('.inside');
        nuke(selector1, selector1);
        let modifiedHTML = $('body').html();
        expect(modifiedHTML).to.equal(initialHTML);
    });
});