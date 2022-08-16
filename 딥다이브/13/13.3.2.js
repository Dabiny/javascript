function foo() { //2
    console.log('global function foo');
}

function bar() {
    // 중첩 함수
    function foo() {
        console.log('local function foo');
    }

    foo(); //1
}

bar(); //local function foo
foo(); //global function foo