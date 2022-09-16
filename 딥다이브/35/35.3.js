const obj = {
    x: 1, 
    y: 2,
};
// 얕은 복사
const copy = { ...obj };
console.log(copy); // { x: 1, y: 2 }
console.log(obj === copy); // false;

// 객체 병합
// const merged = {
//     x: 1,
//     y: 2,
//     // 스프레드가 된다. 
//     ...{
//         a: 3,
//         b: 4
//     }
// };

// console.log(merged); // { x: 1, y: 2, a: 3, b: 4 }

// const merged = Object.assign({}, {
//     x: 1, 
//     y: 2
// },
// {
//     y: 10,
//     z: 3
// });

// // 프로퍼티가 중복되는경우 뒤에위치한 프로퍼티가 우선권을 갖는다. (덮어쓰기느낌)
// console.log(merged); //{ x: 1, y: 10, z: 3 }

// // y: 2를 y:100으로 바꿔치기
// const changed = Object.assign({}, { x: 1, y: 2 }, { y: 100 });


const merged = {
    ...{ x: 1, y: 2 },
    ...{ y: 10, z: 3 }
};
console.log(merged); // { x: 1, y: 10, z: 3 }

const changed = {
    ...{ x: 1, y: 2 },
    //...{ y: 100 }
    y: 100 //둘다 똑같이 동작함
};
console.log(changed); // { x: 1, y: 100 }

const add = {
    ...{ x: 1, y: 2 },
    z: 100
};
console.log(add); // { x: 1, y: 2, z: 100 }