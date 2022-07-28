console.log('cat' || 'dog'); 
console.log(false || 'dog');
console.log('cat' || false);

console.log('Cat' && 'Dog');
console.log(false && 'Dog');
console.log('Cat' && false);


// if문 활용예시1
var done = true;
var message = '';

// 주어진 조건이 true일 때
if (done)
    message = '완료';
// if문은 단축 평가로 대체가능하다.
message = done && '완료';
console.log(message);


// if문 활용예시2
var done = false;
var message = '';

// 주어진 조건이 false일 때
if (!done)
    message = '미완료';
// 단축평가
message = done || '미완료';
console.log(message);


// if else 예시3
var done = true;
var message = '';

if (done)
    message = '완료';
else
    message = '미완료';
console.log(message);

//삼항 연산자
message = done ? '완료' : '미완료';
console.log(message);



// 예제 09-23
// var elem = null;
// var value = elem.value; //Cannot read properties of null (reading 'value')
// console.log(value);

var elem2 = null;
var value2 = elem2 && elem2.value;
console.log(value2); //null


// 예제 09-25
function getStringLength(str){
    str = str || '';
    return str.length;
}
console.log(getStringLength());
console.log(getStringLength('hi'));

function getStringLength2(str = ''){
    return str.length;
}
console.log(getStringLength2());
console.log(getStringLength2('hello'));