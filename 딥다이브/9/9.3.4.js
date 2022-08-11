// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Boolean('x'));
console.log(Boolean(''));
console.log(Boolean('false'));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(NaN));
console.log(Boolean(Infinity));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean([]));
console.log("\n");

// 2. ! 부정 논리 연산자를 두 번 사용하는 방법
// 문자열 타입 => 불리언 타입
console.log(!!'x');
console.log(!!'');
console.log(!!'false');
console.log(!!0);
console.log(!!1);
console.log(!!NaN);
console.log(!!Infinity);
console.log(!!null);
console.log(!!undefined);
console.log(!!{});
console.log(!![]);
