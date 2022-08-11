function repeat(n) {
    for (var i = 0; i < n; i++)
        console.log(i);
}
repeat(5);

function repeat2(n) {
    for (var i = 0; i < n; i++){
        if (i % 2) console.log(i);
    }
}
repeat2(5); // 1 3



function repeat3 (n, f) {
    for (var i = 0; i < n; i++){
        f(i);
    }
}

var logAll = function(i) {
    console.log(i);
};
//반복 호출할 함수를 인수로 전달한다.
repeat3(5, logAll); // 0 1 2 3 4


var logOdds = function(i) {
    if (i % 2) console.log(i);
};
//반복 호출할 함수를 인수로 전달한다.
repeat3(5,logOdds); // 1 3 


// repeat4(5, functionz(i){
//     if (i % 2) console.log(i);
// });

// document.getElementById('myButton').addEventListener('click', function() {
//     console.log('button clicked!');
// })

// //콜백함수를 사용한 비동기 처리
// //1초 후에 메시지를 출력한다.
// setTimeout(function () {
//     console.log('1초 경과');
// }, 1000);


var res = [1, 2, 3].map(function (item) {
    return item * 2;
});
console.log(res); // [2, 4, 6]

res = [1, 2, 3].filter(function (item) {
    return item % 2 == 0;
});
console.log(res); // [2]

res = [1, 2, 3].reduce(function (acc, cur) {
    return acc + cur;
}, 0);
console.log(res); // 6
