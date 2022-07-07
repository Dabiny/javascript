const UNITL_NUM = 10;
let sum = 0;

for (let i = 0; i <= UNITL_NUM; ++i)
{
    if (i % 2 == 0){
        sum += i;
        console.log(sum);
    }
}

let num = 1;

for (let i  = 2; i <= 9; i++)
    for (let j = 1; j < 10; j++)
    {
        num = i * j;
       // console.log(i + "*" + j + "=" + num);        
       console.log(`${i} x ${j} = ${i * j}`);
    }

// /* 1. 함수 선언식 */
// function add(x, y){
//     return x + y;
// }

// /* 2. 함수 표현식 */
// const add = function(x, y){
//     return x + y;
// }

// /* 3. 화살표 함수 */
// const add = (x, y) => x + y; 

// // 함수 호출

/* 1. default value */
// function print_add(x, y = 10)
// {
//     console.log(x + y);
// }
// print_add(10, 20, 30); //30 마지막 인자는 무시
// print_add(10, 20); // output: 30
// print_add(10); // 20 디폴트값이 10으로 정해져있기 때문에 y값은 자동으로 10
// print_add(); // NaN ? 이것도근데 20이 맞지 않나 싶음..

// /* 2. dynamic paramaters */
// function print_min()
// {
//     console.log(arguments[0] - arguments[1]); //자동적으로 저장하는 아규먼트 변수
// }
// print_min(10, 20, 30); // 10 - 20 = -10
// print_min(10, 20); // 10 - 20 = -10
// print_min(10); // output : NaN
// print_min();  // output : NaN