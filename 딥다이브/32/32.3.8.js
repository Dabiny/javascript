const str = 'hello world';

// substring과 slice는 동일하게 동작한다. 
console.log(str.substring(0, 5)); // hello
console.log(str.slice(0, 5));  // hello

// 인덱스가 2인 문자부터 마지막 문자까지 잘라내어 반환
console.log(str.substring(2)); // llo world
console.log(str.slice(2)); // llo world

// 인수 < 0 또는 NaN인경우 0으로 취급된다. 
console.log(str.substring(-5)); // hello world

// slice 메서드는 음수인 인수를 전달할 수 있다. 뒤에서 5자리를 잘라내어 반환한다.
console.log(str.slice(-5)); // world