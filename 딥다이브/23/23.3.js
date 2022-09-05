const x = 1;
const y = 2;

function foo(a) {
    // 지역변수 선언
    const x = 10;
    const y = 20;

    console.log(a + x + y); // 130
}

foo(100);

console.log(x + y); // 3