(function (a) {
    'use strict';
    // 매개변수에 전달된 인수를 재할당하여 변경
    a = 2;

    // 변경된 인수가 arguments객체에 반영되지 않는다. 
    console.log(arguments); // [Arguments] { '0': 1 }
}(1))