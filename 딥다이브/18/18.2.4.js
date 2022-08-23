// 기명함수 표현식
var nameFunc = function foo () {
    console.log(nameFunc.name); // foo
}

// 익명함수 표현식
var anonymosFunc = function() {
}
console.log(anonymosFunc.name); //anonymosFunc ES5에서는 빈문자열