// this 바인딩은 함수 호출방식에 따라 동적으로 결정된다. 
const foo = function() {
    console.dir(this);
};

// 1. 일반함수 호출
// foo 함수를 일반적인 방식으로 호출. foo함수 내부의 this는 전역객체 window를 가리킴.
foo(); // window

// 2. 메서드 호출
// foo 함수를 프로퍼티 값으로 할당하여 호출. this는 메서드를 호출한 객체 obj를 가리킴.
const obj = { foo };
obj.foo(); // obj

// 3. 생성자 함수 호출
// foo 함수를 new 연산자와 한께 생성자 함수로 호출
// foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다. 
new foo(); // foo {}

// 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
// foo 함수 내부에 this는 인수(인자)에 의해 결정된다. 
const bar = {
    name: 'b'
};

foo.call(bar); // bar
foo.apply(bar); // bar
foo.bind(bar); // bar