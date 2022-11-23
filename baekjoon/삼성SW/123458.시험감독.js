const fs = require('fs');
const filePath =
    process.platform === "linux" ? "/dev/stdin" : "baekjoon/삼성SW/123458.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = +input.shift(); // 시험장 개수
const testRoom = input.shift().split(' ').map((v) => +v); // 시험장의 응시자 수를 모아논 배열
const viewer = input.shift().split(' ').map((v) => +v);
let answer = 0;
for(let i = 0; i < N; i++) {
    let people = 1; // 총감독관을 1명 세워놔야함. 
    let num = testRoom[i] - viewer[0] < 0 ? 0 : testRoom[i] - viewer[0]; // 총감독관 감시수 빼기 , 반례 해결해주기
    people += (Math.ceil(num / viewer[1])); // 나머지인원은 부감독관이 감시해야하니까 나누기올림으로 처리
    answer += people;
}
console.log(answer);