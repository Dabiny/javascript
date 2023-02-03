// function solution(user_id, banned_id) {
//     let result = 0; // 제재 아이디 경우의수
//     const check = Array.from({length: user_id.length}, () => 0); // id체크
//     const ch = Array.from({length: banned_id}, () => 0);

//     function dfs(v, bann) {
//         for (let i = 0; i < user_id.length; i++) {
//             // 여기서 banid랑 userid랑 맞는지 확인하는방법이 어렵다.
//             const ban = banned_id[i].split('');
//             const user = user_id[i].split('');
//             for (let j = 0; j < user.length; j++) {

//             }
//         }
//     }
//     for (let i = 0; i < banned_id.length; i++) {
//         // dfs(0, banned_id[i]);
//         const ban = banned_id[i].split('');
//         console.log(ban);
//     }
// }
// console.log(
//     solution(
//         ["frodo", "fradi", "crodo", "abc123", "frodoc"],
//         ["fr*d*", "abc1**"]
//     )
// );
// console.log(
//     solution(
//         ["frodo", "fradi", "crodo", "abc123", "frodoc"],
//         ["*rodo", "*rodo", "******"]
//     )
// );
// console.log(
//     solution(
//         ["frodo", "fradi", "crodo", "abc123", "frodoc"],
//         ["fr*d*", "*rodo", "******", "******"]
//     )
// );

// ⭐️ 내가 궁금했던 것. 
function match(id, pattern) {
    pattern = pattern.replace(/\*/g, "."); //*값을 .으로 바꿔주기
    const regex = RegExp("^(" + pattern + ")$");
    //  /^(prodo.)$/
    return regex.test(id);
}

function solution(user_id, banned_id) {
    let answer = 0;
    let arr = []; // 경우의수를 넣을 배열

    function dfs(users, bann_id, ban) {
        if (bann_id.length === 0) {
            arr.push(ban);
            return;
        } else {
            for (let i = 0; i < users.length; i++) {
                // 만약 user[i]와 bann_id[0]이 맞으면
                if (match(users[i], bann_id[0])) {
                    dfs(
                        [...users.slice(0, i), ...users.slice(i + 1)],
                        bann_id.slice(1), // 앞에 하나 지운 상태를 넣어주기
                        [...ban, users[i]] // match에 맞는 user를 제재아디 배열에 넣어주기
                    )
                }
            }
        }
    }
    dfs(user_id.slice(), banned_id.slice(), []);
    // 중복제거를 해주어야한다. 이것도 유용하니 꼭 익히기 
    answer = new Set(arr.map((v) => v.sort().join())).size;
    return answer;
}

console.log(
    solution(
        ["frodo", "fradi", "crodo", "abc123", "frodoc"],
        ["fr*d*", "abc1**"]
    )
);
console.log(
    solution(
        ["frodo", "fradi", "crodo", "abc123", "frodoc"],
        ["*rodo", "*rodo", "******"]
    )
);
console.log(
    solution(
        ["frodo", "fradi", "crodo", "abc123", "frodoc"],
        ["fr*d*", "*rodo", "******", "******"]
    )
);

// 다시복습하기 복잡하지만 그만큼 공부가되는 문제이다. 