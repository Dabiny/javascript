const myProto = {x: 10};

const obj = {
    y: 20,
    __proto__: myProto
};

// 위코드는 아래와 동일하다. 
// const obj = Object.create(myProto, {
//     y {
//         value: 20, 
//         wirtable: true,
//         enumerable: true,
//         configurable: true
//     }
// });

console.log(obj.x, obj.y); // 10 20
console.log(Object.getPrototypeOf(obj) === myProto); // true