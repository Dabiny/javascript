const person = { name: 'kim' };

console.log(Object.isFrozen(person)); // false

Object.freeze(person);
console.log(Object.isFrozen(person)); // true

console.log(Object.getOwnPropertyDescriptors(person));
/*
{
  name: {
    value: 'kim',
    writable: false, // false
    enumerable: true,
    configurable: false // false
  }
}
*/

// 동적추가 x
person.age = 20;
console.log(person); //{ name: 'kim' }

// 값 갱신도 x
person.name = 'dabin';
console.log(person); // { name: 'kim' }

// 값 삭제도 x
delete person.name;
console.log(person); //{ name: 'kim' }

// 프로퍼티 어트리뷰트 재정의도 금지
Object.defineProperty(person, 'name', {
    configurable: true
}); //TypeError: Cannot redefine property: name

