// 함수는 객체
function foo() {}

// 프로퍼티도 소유가능
foo.prop = 10;

// 함수는 객체이므로 메서드를 소유할 수 있다. 
foo.method = function() {
    console.log(this.prop);
};

foo.method(); // 10