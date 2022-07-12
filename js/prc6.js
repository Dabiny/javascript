// /* 생성자
//     생성자 함수
//     - 유사한 객체를 다중으로 만들 때 사용되는 함수 (타 언어에서의 class 개념과 유사)
//     - 일반적으로 생성자 함수의 첫 글자는 대문자로 시작
//     - 생성자 함수로 객체 생성 시 new 연산자를 통해 객체를 생성.
// */

// // 생성자 함수와 new 연산자를 통해 빠른 객체 생성 가능
// //빵틀
// function FishBread(flavor, price) {
//     this.flavor = flavor;
//     this.price = price;
//     this.base = "flour";
// }

// //붕어빵
// let bread_1 = new FishBread("cream", 1200);
// let bread_2 = new FishBread("redbean", 1000);
// let bread_3 = new FishBread("milk", 1500);

// console.log(bread_1);
// console.log(bread_2);
// console.log(bread_3);

// console.log("\n");
// // new.target
// // new.target 속성을 사용하여 new와 함께 호출했는지 확인 가능

// function User(name) {
//     console.log(new.target);
//     this.name = name;
// }

// let result_1 = User("john");
// console.log(result_1); //undefind undefind

// let result_2 = new User("john");
// console.log(result_2); //function: user, user {name: jon}

// //⬇️undefine 안뜨게 하기

// function User2(_name) {
//     if(!new.target) //undefine이면 다시 생성하기 
//         return new User2(_name);
//     this._name = _name;
// }

// let result_3 = User2("john"); //new를 안붙여도 유저생성자함수에 들어가긴 하는구나
// console.log(result_3);

// let result_4 = new User2("john");
// console.log(result_4);
