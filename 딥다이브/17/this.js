function foo() {
    console.log(this);
}

// 일반적인 함수로서 호출 전역객체는 브라우저환경에서는 window, Node.js 환경에서는 global을 가리킴.
foo(); //window


const obj = { foo };

// 메서드로서 호출
obj.foo(); // { foo: [Function: foo] }


// 생성자 함수로서 호출
const inst = new foo(); // inst
