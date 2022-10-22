function solution(numbers, hand) {
    let l = [1, 4, 7];
    let r = [3, 6, 9];
    
    let leftHand = 10; //왼손 현재 위치
    let rightHand = 12;  // 오른속 현재 위치

    let answer = '';
    let n = [];
    for (let i = 0; i < numbers.length; i++) {
        console.log(leftHand , rightHand);
        if (l.includes(numbers[i])) { // 왼쪽 키패드 숫자이면
            leftHand = numbers[i];
            n += leftHand;
            answer += 'L';
        }
        else if (r.includes(numbers[i])) { // 그렇지 않고 오른쪽 키패드 숫자면
            rightHand = numbers[i];
            n += rightHand;
            answer += 'R';
        }
        else { // 둘다 아니고 가운데 키패드 숫자이면 
            // 근데 만약 왼쪽핸드와 오른쪽핸드 거리가 가운데 버튼과 같을 때
            console.log(Math.abs(leftHand - numbers[i]), Math.abs(rightHand - numbers[i]))

            if (Math.abs(leftHand - numbers[i]) > Math.abs(rightHand - numbers[i])) {
                rightHand = numbers[i];
                answer += 'R';
            }
            else if (Math.abs(leftHand - numbers[i]) < Math.abs(rightHand - numbers[i])) {
                leftHand = numbers[i];
                answer += 'L';
            }
            else if (hand === 'right' && Math.abs(leftHand - numbers[i]) === Math.abs(rightHand - numbers[i])){
                rightHand = numbers[i];
                answer += 'R';
            }
            else if (hand === 'right' && Math.abs(leftHand - numbers[i]) === Math.abs(rightHand - numbers[i])) {
                leftHand = numbers[i];
                answer += 'L';
            }
          
        }
    }
    return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
// ===가 먹히지 않음. 왼 -> 4, 오 -> 2일때 5번버튼을 누르는 케이스일때 키패드상 같은 거리로 놔져있기 때문에 이렇게 숫자로 연산 하면 안될것같다. 2차원배열 이용해보기

// 객체로 이차원배열을 사용한 해답.
function solution(numbers, hand) {
    function dis(num, lH, rH, pos, hand) {
        // 현재 왼손 좌표 leftDirect
        const lD = Math.abs(keyPad[lH][0] - keyPad[num][0]) + Math.abs(keyPad[lH][1] - keyPad[num][1]);
        // [lH][0]뜻 => keyPad lH:[0]값이다. 
        
        // 현재 오른손 좌표 rightDirect
        const rD = Math.abs(keyPad[rH][0] - keyPad[num][0]) + Math.abs(keyPad[rH][1] - keyPad[num][1]);
        
        if (lD === rD) return hand === 'left' ? 'L' : 'R';
        return lD < rD ? 'L' : 'R';
    }

    let keyPad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    

    let leftHand = '*', rightHand = '#';
    let answer = '';

    for (let x of numbers) {
        if (x % 3 === 1) { // 1, 4, 7 이면
            answer += 'L';
            leftHand = x;
        }
        else if (x !== 0 && x % 3 === 0) { // 3, 6, 9 이면
            answer += 'R';
            rightHand = x;
        }
        else { // 2, 5, 8, 0 이면
            answer += dis(x, leftHand, rightHand, keyPad, hand);

            // 손 갱신해주기 
            answer[answer.length - 1] === 'L' ? leftHand = x : rightHand = x;
        }
    }
    return answer;
}