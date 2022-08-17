const person = {
    name: 'lee'
};

// console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// { value: 'lee', writable: true, enumerable: true, configurable: true }

person.age = 20;

console.log(Object.getOwnPropertyDescriptors(person));
/*
{
  name: {
    value: 'lee',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 20, writable: true, enumerable: true, configurable: true }
}
*/