// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(1.5); // Number{1.5}

// toFixed는 Number.prototype의 프로토타입 메서드다. 
// Number.prototype.toFixed는 소수점 자리를 반올림하여 문자열로 반환한다. 
console.log(numObj.toFixed());//2
console.log(2.555.toFixed(2)); //2.56

// isInteger는 Number의 정적메서드다. 
console.log(Number.isInteger(0.5)); //false
