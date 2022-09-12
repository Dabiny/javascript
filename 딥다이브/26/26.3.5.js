(function(){
    // 화살표 함수 foo의 arguments는 상위 스코프인 즉시 실행 함수의 arguments를 가리킨다. 
    const foo = () => console.log(arguments);
    foo(3, 4);
}(1, 2)); // { '0': 1, '1': 2 } 3,4 는 없음 