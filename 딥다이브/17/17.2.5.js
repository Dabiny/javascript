// 일반 함수 정의
function foo() {}
const bar = function () {};

const baz =  {
    x: function() {}
};

new foo(); // {}
new bar(); // {}
new baz.x(); // {}

// 화살표 함수 정의
const arrow = () => {};
new arrow(); // 에러

const obj = {
    x() {}
};

new obj.x(); // 에러


