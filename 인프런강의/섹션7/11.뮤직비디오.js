// function count(songs, capacity) {
//     let cd = 0;
//     let sum = 0;
//     for (let x of songs) {
//         if (sum == capacity){
//             cd++;
//             sum = 0;
//         }
//         sum += x;
//     }
//     return cd; // cd가 몇장필요한지 반환
// }
// function solution(songs, m) {
//     let answer = Number.MAX_SAFE_INTEGER; 
//     let lt = 0, rt = songs.length - 1; // pointers
//     let minSize = songs[rt]; // 최소 용량부터
//     let maxSize = songs.reduce((pre, cur) => pre + cur); // 최대용량까지(계속 이분탐색하며 반절로 줄어들거임)

//     while (maxSize > minSize) {
//         let mid = parseInt((minSize + maxSize) / 2);
//         if (count(songs, mid) <= m) {
//             answer = Math.min(mid, answer);
//             maxSize = mid - 1;
//         }
//         else if (count(songs, mid) > m) break;
//     }
    
//     return answer;
// }

// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));



// 해설 다시풀어보기 결정 알고리즘(이분탐색)은 자주 나오는 스타일이니까 꼭 복습해서 내것으로 만들자. 
function count(songs, capacity) {
    let cd = 1, sum = 0; // dvd 한장은 녹음하기시작할때부터 필요하니까 1로 설정한다. 
    for (let x of songs) {
        if(sum + x > capacity) { // 계속저장하다가 용량초과되면 
            cd++; // 시디추가
            sum = x; // sum을 현재x값으로 설정해놓기 (내가 틀린 부분)
        }
        else sum += x; // 계속 저장중 ....
    }
    return cd;
}
function solution(songs, m) {
    let answer;
    let lt = Math.max(...songs), rt = songs.reduce((acc, cur) => acc + cur);
    while(lt <= rt) { // 걍 외우기 이분탐색 (lt가 rt보다 작거나 같을때까지)
        let mid = parseInt((lt + rt) / 2); // 27
        if(count(songs, mid) <= m){
            answer = mid;
            rt = mid - 1; // 반절로 쪼개기
        }
        else lt = mid + 1; // ex ) 28부터 ~ rt까지 계쏙 업데이트해준다. (와일문 종료조건) 내가못한부분
    }
    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));