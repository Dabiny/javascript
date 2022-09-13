const str = 'Hello world';

// 문자열 str이 'He'로 시작하는지 확인 
str.startsWith('He'); // true

str.startsWith('x'); // false

str.startsWith(' ', 5); // true

// 문자열 str이 'ld'로 끝나는지 확인
str.endsWith('ld'); // true

str.endsWith('x'); //false

// 문자열 str의 처음부터 5자리까지('hello')가 'lo'로 끝나는지 확인
str.endsWith('lo', 5); //true