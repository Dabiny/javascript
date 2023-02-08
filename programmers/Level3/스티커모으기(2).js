function solution(sticker) {
    let answer = Number.MIN_SAFE_INTEGER; // 최대값 찾기

    for (let i = 0; i < sticker.length; i++) {
        let head = i;
        let tail = i - 1 < 0 ? sticker.length - 1 : i - 1;
        let ch = Array.from({ length: sticker.length }, () => 0); // 찢음여부
        let num = [];
        for (let j = head; j < sticker.length; j++) {
            // 찢기 시뮬레이션
            if (ch[j]) continue;
            else {
                ch[j] = 1;
                num.push(sticker[j]); // 해당 스티커 넣기
                ch[tail] = 1; // 뒤 스티커도 찢음처리하기
                ch[j + 1] = 1; // 앞
                tail = j - 1;
            }
        }
        answer = Math.max(
            answer,
            num.reduce((p, c) => p + c, 0)
        );
    }
    return answer;
} // 정확성 7.5, 효율성 0.0
console.log(solution([14, 6, 5, 11, 3, 9, 2, 10]));
console.log(solution([1, 3, 2, 5, 4]));

function solution(sticker) {
    let answer = Number.MIN_SAFE_INTEGER;
    let numLength = Math.floor(sticker.length / 2);
    const tail = sticker.length - 1;

    for (let i = 0; i < sticker.length; i++) {
        let j = i;
        let num = [];
        while (j < sticker.length) {
            num.push(sticker[j]);
            if (num.length === numLength) {
                answer = Math.max(
                    answer,
                    num.reduce((p, c) => p + c, 0)
                );
                break;
            }
            j += 2;
        }
    }
    return answer;
}

// DP로 접근하여 풀어야하는 문제이다.
// 문제를 볼때 '아 스티커를 일일히 뜯어봐야하는데 100,000개나 봐야하네? 너무많은데' 라고 1차생각
// '지금 뜯을 스티커랑 다음에 뜯을 스티커를 봐야하는 형태구나' 라고 2차생각
// '스티커가 i일때 또 j로 돌아서 봐야하네' 까지 3차생각했다면 DP로 접근해야함.

// 왜 DP로 접근해야하는가?
// 문제의 규칙을 볼 대 스티커를 한장씩 뜯되 인접 스티커는 뜯지 못한다. 이 상황에서 최대값을 구해야한다.
// 일단 인접제한을 제치고 보면 누적합과 비슷하다.
// 현재 뜯을 스티커 + 다음에 뜯을 스티커, 이는 이전의 구해놓은 값을 활용하는 형태이다.
// 중복계싼을 DP로 활용해 최적화가 가능하다.

// DP조건 잘살피기
// 1. 첫 DP배열을 만들면 그 DP배열을 어떻게 초기화 하지?
// 2. 점화식을 어떻게 세울까 ?

// 조건을 보며 고려해보기
// 1. 누적합을 연상하는 문제이지만 인접조건때문에 연달아 구할 수 없는상황이다. 인접스티커는 뜯을 수 없기 때문
// 2. 게다가 원모양이기 때문에 그것도 고려해야한다.

// 조건 해결하기
// 1.연달아 구할 수 없을 때 규칙을 보자. 먼저 첫번째 스티커를 뜯었다고 가정했을 때 배열 마지막, 다음 두번째 스티커는 뜯을 수 없다.
//   그렇다면 3번째 스티커부터 뜯기 가능. 하지만 여기서 다시 생각해보아야함. 여기서 세번째를 바로 뜯어버릴 것인지 아니면 네번째를 뜯을것인지..
//   2가지 상황에 따라 누적합이 다를것이다.
// ex) [1, 3, 2, 5, 4] -> [1, 2] ?? [1, 5]

//  다음으로 첫번째를 뜯지않고 그냥 넘어갈 수도 있다. 그렇다면 두번째 스티커부터 시작해서 앞의 결과에 따라 마지막 스티커까지 뜯을 수 있다.
//  여기서 우리는 첫번째를 뜯을지 말지에 따라 2개의 경우로 갈린다.

//       [1, 3, 2, 5, 4]
// [0, 0, 0, 0, 0, 0, 0]
// [0, 0, 1, 3, 3, 8, 0] dp1

// [0, 0, 0, 1, 3, 3, 8] dp2

function solution(sticker) {
    const len = sticker.length + 2; // 점화식구할때 배열밖을 벗어나지 않도록
    let dp1 = new Array(len).fill(0); // 첫번째 스티커를 뜯었을때 dp 경우의 수
    let dp2 = new Array(len).fill(0); // 첫번째 스티커를 뜯지 않았을때 dp 경우의수
    if (sticker.length === 1) return sticker[0];

    // 첫 스티커를 뜯은경우는 마지막배열도 뜯겨나가기 때문에 length - 1을 해주어야한다. 
    for (let i = 2; i < dp1.length - 1; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i - 2]);
    }

    // 첫 스티커를 안뜯은경우 2번째 스티커부터 뜯기
    for (let i = 3; i < dp2.length; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i - 2]);
    }
    
    return Math.max(dp1[len - 2], dp2[len - 1]);
}
