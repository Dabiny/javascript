// console.log(Person);
// // ReferenceError: Cannot access 'Person' before initialization

// class Person {}

// console.log(typeof Person); // function


// 25-07
const Person = '';

{
    // 호이스팅이 발생하지 않는다면 ''이 출력되어야 한다. 
    console.log(Person); // ReferenceError: Cannot access 'Person' before initialization
    
    class Person {}
}