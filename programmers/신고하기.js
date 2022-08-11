
function solution(id_list, report, k) {
    let mp1 = new Map(); //이름 리스트와 신고한 횟수
    let mp2 = new Map(); //이름 리스트와 신고당한 횟수
    for (let i = 0; i < id_list.length; i++) {
        mp1.set(id_list[i], 0);
    }
    for (let i = 0; i < report.length; i++){
        let n = report[i].split(" ");
        mp1[n[0]]++;
    }

    return mp1;
}



console.log(solution(["muzi", "frodo", "apeech", "neo"],
 ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2));

console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3));
