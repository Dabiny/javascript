function solution(s) {
    let numArr = new Array(10).fill(0);
    console.log(numArr)
    for (let i = 0; i < s.length; i++) {
        numArr[s[i]]++;
    }
    console.log(numArr);

    let answer = '';
    for (let i = 0; i < numArr.length; i++) {
        let max = numArr.indexOf(Math.max(...numArr));
        answer += max;
        numArr[max] = -1;
        
    }
    answer = answer.split('').join(' ');
    return answer;
}
console.log(solution('221123'));