const target = 'It this all there is?';

// 패턴은 is
// 플래그: i => 대소문자를 구별하지 않고 검색한다는 뜻
const regExp = /is/i;

// test 메서드는 target 문자열에 대해 정규 표현식 regexp의 패턴을 검색하여 매칭 결과를 불리언으로 반환
console.log(regExp.test(target)); // true

/**
 * pattern: 정규 표현식의 패턴
 * flags: 정규 표현식의 플래그(g, i, m, u, y)
    
    new RegExp(pattern[, flags])
 */

const regexp = new RegExp(/is/i); // ES6
// const regexp = new RegExp(/is/, 'i');
// const regexp = new RegExp('is', 'i');

console.log(regexp.test(target)); // true

const count = (str, char) => (str.match(new RegExp(char, 'gi')) ?? []).length;

console.log(count('Is this all there is?', 'is')); // 3 Is ,th'is', is
console.log(count('Is this all there is?', 'xx')); // 0 없음