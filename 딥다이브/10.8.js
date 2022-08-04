var person = {
    name: 'Lee'
};
person.age = 20;
delete person.age; // o
delete person.address; // x 에러없이 무시됨

console.log(person); // { name: 'Lee' }
