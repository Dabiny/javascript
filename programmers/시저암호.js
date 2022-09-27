function solution(s, n) {
    return s.split('').map(v => {
        if (v === " ") return v;
        else{
            return v.toUpperCase().charCodeAt() + n > 90 ?
            String.fromCharCode(v.charCodeAt() + n - 26) :
            String.fromCharCode(v.charCodeAt() + n)
        }
    }).join('');
}
console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));
// fromCharCode안에 charCodeAt을 호출해서 + n만큼 더한뒤
//  - 26해주거나 하는 것을 새로배우게되었다. 
// 쉬운줄 알았지만 -26해주는것을 어려워했다. 

// 초기코드
// function solution(s, n) {
//     var answer = '';
//     for(let i = 0; i < s.length; i++) {
//         let char = s.charCodeAt(i);
//         char
//         if (char == 122) { // 'z'
//             char -= 25;
//             let cnt = n - 1;
//             while(cnt--){
//                 char++;
//             }
//             answer += String.fromCharCode(char);
//             break;
//         }
//         if (char == 90) { // 'Z'
//             char -= 25;
//             let cnt = n - 1;
//             while(cnt--){
//                 char++;
//             }
//             answer += String.fromCharCode(char);
//             break;
//         }
//         if (char == 32) {
//             answer += String.fromCharCode(32);
//         }
//         else {
//             char += n;
//             answer += String.fromCharCode(char);
//         }
//     }

//     return answer;
// }