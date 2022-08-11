function changeVal(primitive, obj) {
    // let s = primitive + 100;
    // num = s;
    primitive += 100;
    obj.name = 'Kim';
}

var num = 100;
var person = {
    name: 'Lee'
};
console.log(num); // 100 
console.log(person); // 'lee' 

//원시값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num, person);

console.log(num); // 100
console.log(person); // 'Kim'