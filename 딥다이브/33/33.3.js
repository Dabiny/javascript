// const Direction = {
//     UP: 1,
//     DOWN: 2, 
//     LEFT: 3,
//     RIGHT: 4
    
// };

// // 변수에 상수를 할당
// const myDirection = Direction.UP;

// if (myDirection === Direction.UP){
//     console.log('u r going UP'); //u r going UP
// }

// 중복될 가능성이 없는 심벌 값으로 상수 값을 생성한다. 
const Direction = {
    UP: Symbol('up'),
    DOWN: Symbol('down'), 
    LEFT: Symbol('left'),
    RIGHT: Symbol('right'),
    
};

const myDirection = Direction.UP;

if (myDirection === Direction.UP){
    console.log(myDirection); // Symbol(up)
    console.log('u r going UP'); //u r going UP
}


// const Direction = Object.freeze(
//     {
//         UP: Symbol('up'),
//         DOWN: Symbol('down'), 
//         LEFT: Symbol('left'),
//         RIGHT: Symbol('right')
//     }
// );

// const myDirection = Direction.UP;

// if (myDirection === Direction.UP){
//     console.log(myDirection); // Symbol(up)
//     console.log('u r going UP'); //u r going UP
// }