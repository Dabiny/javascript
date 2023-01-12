const x = 1;
const y = 1;

function foo(a) {
    const x = 10;
    const y = 20;

    console.log(a + x + y);
    function bar() {
        console.log(x + y);
    }
    bar();
}

foo(100);

console.log(x + y);
