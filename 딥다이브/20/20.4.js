(function () {
    var let = 10; // 에러 발생 x

    function foo() {
        'use strict';

        let = 20; //SyntaxError: Unexpected strict mode reserved word
    }
    foo();
})