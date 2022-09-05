(function () {
    'use strict';

    function foo (x, x) { //SyntaxError: Duplicate parameter name not allowed in this context
        return x + x;
    }
    console.log(foo(1, 2));

}());