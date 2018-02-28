function getModel() {
    let input1;
    let input2;
    let result;
    //alert('getModel invoked correctly!');

    function init(selector1, selector2, resultSelector) {
        //alert('init working');
        input1 = $(selector1);
        input2 = $(selector2);
        result = $(resultSelector);
    }

    function add() {
        //alert('add working');
        result.val(Number(input1.val()) + Number(input2.val()));
    }

    function subtract() {
        //alert('subtract working');
        result.val(Number(input1.val()) - Number(input2.val()));
    }
    return  {
        init,
        add,
        subtract
    }
}