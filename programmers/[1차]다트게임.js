// function solution(dartResult) {
//     var answer = 0;
//     let cal = []; 
//     let q = [...dartResult];
//     let leng = cal.length - 1;
    
    
//     while(q.length !== 0) {
//         let front = q.shift();
//         if (!isNaN(front)){
//            if(cal[leng] == 1 && front == '0') {
//                 cal.pop();
//                 cal.push(10);
//            }
//            else {
//                 cal.push(parseInt(front));
//            }
//         } 
//         if (isNaN(front) && front == 'S') {
//             let pw = cal.pop() ** 1;
//             cal.push(pw);
//         }    
//         if (isNaN(front) && front == 'D') {
//             let pw = cal.pop() ** 2;
//             cal.push(pw);
//         }
//         if (isNaN(front) && front == 'T') {
//             let pw = cal.pop() ** 3;
//             cal.push(pw);
//         }
//         if (isNaN(front) && front == '*') { // cal 안에있는 연산된 숫자들을 모두 2를 곱해야함.
//             let star = cal.reduce((a, b) => a + (b * 2), 0);
//             cal = [];
//             cal.push(star);
//         }
//         if (isNaN(front) && front == '#') {
//             let acha = cal.reduce((a, b) => a + b * -1, 0);
//             cal = [];
//             cal.push(acha);
//         }
//     }
    
//     answer = cal.reduce((a, b) => a + b, 0);
//     return answer;
// }

console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));
console.log(solution("1D#2S*3S"));
console.log(solution("1T2D3D#"));
console.log(solution("1D2S3T*"));

// 음수 값에서 답이 이상하게 나온다. 10같은 붙어있어야하는 숫자처리를 어떻게 해야할지 모르겠다. 
// 지문 잘읽기 ..

// stack활용
function solution(dartResult) {
    const stk = [];
    let sum = [];
    const dartArr = dartResult.split("");
    
    for (let i = 0; i < dartArr.length; i++) {
        if(!isNaN(dartArr[i])){
            if (dartArr[i] === '0' && dartArr[i - 1] === "1") {
                stk.pop();
                stk.push(10);
            }
            else {
                if (stk.length > 0) sum.push(stk.pop());
                stk.push(parseInt(dartArr[i]));
            }
        }
        if (dartArr[i] === 'D') stk[0] = stk[0] ** 2;
        if (dartArr[i] === 'T') stk[0] = stk[0] ** 3;
        if (dartArr[i] === '*') {
            stk[0] = stk[0] * 2;
            if (sum.length > 0) {
                const tmp = sum.pop() * 2;
                sum.push(tmp);
            }
        }
        if (dartArr[i] === '#') stk[0] = stk[0] * -1;
    }
    
    return sum.reduce((a, b) => a + b, stk[0]);
}


// 풀이 예시 정규표현식 활용
function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    let darts = dartResult.match(/\d.?\D/g);

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}