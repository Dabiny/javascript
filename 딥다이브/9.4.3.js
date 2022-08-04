//null 병합 연산자 ??

//예제 09-30
//좌항의 피연산자가 null or undefined이면 우항의 피연산자를 반환. 그렇지않으면 좌항반환
var foo = null ?? 'default string';
console.log(foo); //default string

//예제 09-31
//falsy값인 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.
var foo = '' || 'default string';
console.log(foo); //default string


//예제 09-32
//좌항의 피연산자가 Falsy값이라도 null | undefined가 아니면 좌항의 피연산자를 반환한다.
var foo = '' ?? 'default string';
console.log(foo); // ''


