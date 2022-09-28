// function solution(s) {
//     var answer = "";
//     let map1 = new Map( // 문자키
//         [["zero", '0'], ["one", '1'], ["two", '2'], 
//         ["three", '3'], ['four', '4'], ['five', '5'], ['six', '6'], ['seven', '7'], 
//         ['eight', '8'], ['nine', '9']]);
//     let str = "";
//     for (let i = 0; i < s.length; i++) {
//         str += s[i];
//         let num = Number(str);
//         if (!isNaN(num)){
//             answer += num;
//             str = "";
//         }
//         else if (isNaN(num) && map1.has(str)) {
//             answer += map1.get(str);
//             str = "";
//         }
//     }
//     return parseInt(answer);
// }

console.log(solution("one4seveneight"));
//console.log(solution("23four5six7"));
//console.log(solution("2three45sixseven"));
//console.log(solution("123"));

// 다른사람의 풀이 split을 이용해서 간단하게 영단어를 찾고 없애준다음 
// 인덱스번호가 똑같으니까 인덱스번호를 붙여버리기
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;
    
    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}