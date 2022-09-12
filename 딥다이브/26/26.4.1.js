// function foo(...rest) {
//     console.log(rest); // [1, 2, 3, 4, 5]
// }

// foo(1, 2, 3, 4, 5);


// function foo(param, ...rest){
//     console.log(param); // 1
//     console.log(rest); // [2, 3, 4, 5]
// }

// foo(1, 2, 3, 4, 5);

function foo(...rest){
    console.log(foo.length);
}
foo(); // 0

function foo2(x, ...rest){
    console.log(foo2.length);
}
foo2(); // 1

function foo3 (x, y, ...rest) {
    console.log(foo3.length);
}
foo3(); // 2