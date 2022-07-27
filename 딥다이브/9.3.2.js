// 1. Number생성자 함수를 new 연산자 없이 호출하는 법
console.log(Number('0'));
console.log(Number('-1'));
console.log(Number('10.53'));
console.log(Number(true));
console.log(Number(false));
console.log("\n");
// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환가능)
console.log(parseInt('0'));
console.log(parseInt('-1'));
console.log(parseInt('10.53'));
console.log(parseInt('-0'));
console.log("\n");

// 3. + 단항 산술 연산자를 이용하는 방법
console.log(+'0');
console.log(+'-1');
console.log(+'10.53');
console.log(+true);
console.log(+false);
console.log("\n");

// 4. * 산술 연산자를 이용하는 방법
console.log('0' * 1);
console.log('-1' * 1);
console.log('10.53' * 1);
console.log(true * 1);
console.log(false * 1);
console.log("\n");