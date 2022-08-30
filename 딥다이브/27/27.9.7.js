// 배열의 요소들이 3보다 큰지?
[5, 10, 15].every(item => item > 3); //true


// 배열의 모든 요소가 10보다 큰가?
[1, 2, 3].every(item => item > 10); //false

// 빈 배열일 경우 언제나 true를 반환한다.
[].every(item => item > 3); // true