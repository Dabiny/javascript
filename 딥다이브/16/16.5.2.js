const person = { name: 'kim' };

console.log(Object.isSealed(person)); // false

Object.seal(person);
console.log(Object.isSealed(person)); // true

person.age = 20;
console.log(person); //{ name: 'kim' }

console.log(Object.getOwnPropertyDescriptors(person));
/*
{
  name: {
    value: 'kim',
    writable: true,
    enumerable: true,
    configurable: false 
    * 밀봉된 객체는 configurable이 false로 되어 있다. 
  }
}
*/

// 값 갱신은 가능하다.
person.name = 'dabiny';
console.log(person); //{ name: 'dabiny' }