const person = { name: 'kim' };

console.log(Object.isExtensible(person)); //true
// 확장금지 !!
Object.preventExtensions(person);

console.log(Object.isExtensible(person)); //false

person.age = 20;
console.log(person); // { name: 'kim' }