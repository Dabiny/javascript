// 내가 시도한 코드
// function solution(n, stations, w) {
//     var answer = 0;
//     let arr = Array.from({ length: n + 1 }, () => 0);
//     for (let x of stations) {
//         arr[x] = 1;
//     }

//     for (let i = 1; i < arr.length; ) {
//         if (arr[i + w] !== 1) {
//             arr[i + w] = 1;
//             answer++;
//             i += w * 2 + 1;
//         }
//         if (arr[i] === 1) {
//             i += w + 1;
//         }
//     }
//     return answer;
// }

// 해답
function solution(n, stations, w) {
    var answer = 0;
    const coverage = w * 2 + 1; // 전파길이

    const endPoint = n - stations.reduce((prev, cur) => {
        const apts = cur - w - 1 - prev; // 기지국이 없는(전파가 안닿는)아파트의 개수 0 ~ 2 아파트 => 2개
        answer += apts > 0 ? Math.floor((apts - 1) / coverage) + 1 : 0;
        return cur + w; // prev를 전파가 닿는 끝쪽으로 이동시키기 
    }, 0);

    if (endPoint > 0) {
        answer += Math.floor((endPoint - 1) / coverage) + 1;
    }

    return answer;
}
console.log(solution(11, [4, 11], 1));
console.log(solution(16, [9], 2));

// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EA%B8%B0%EC%A7%80%EA%B5%AD-%EC%84%A4%EC%B9%98%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EA%B8%B0%EC%A7%80%EA%B5%AD-%EC%84%A4%EC%B9%98-JS

function solution(n, stations, w) {
    let answer = 0;
    let index = 0;
    let start = 1; // 1번아파트부터

    while(start <= n) {
        if (start >= stations[index] - w && start <= stations[index] + w) {
            start = stations[index] + w;
            index++;
        } else {
            start += 2 * w;
            answer++;
        }
        start++;
    }
    return answer;
}