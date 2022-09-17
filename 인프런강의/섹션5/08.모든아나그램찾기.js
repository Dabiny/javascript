function solution(arr, str){
    let answer = 0;
    let a = [];

    for (let i = 0; i < arr.length - str.length; i++){
        a.push(arr[i]);
        for (let j = i + 1; j < i + str.length; j++){
            a.push(arr[j]);
        }
        let flag = 0;
        for (let x of a){
            if (str.includes(x)) flag++;
        }
        if (flag === str.length) answer++;
        a = [];
    }
    return answer;
}
console.log(solution("bacaAacba", "abc"));