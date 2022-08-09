function Obj (_name, _comp) {
    this.name = _name;
    this.complain = _comp;
};

function solution(id_list, report, k) {
    let Arr = [];
    for (let i = 0; i < id_list.lenth; i++){
        Arr.push(new Obj(id_list[i], 0));
    }

    return Arr;
}



console.log(solution(["muzi", "frodo", "apeech", "neo"],
 ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2));

console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3));


let arr = [];
arr.push(new Obj("muzi", 0));
console.log(arr);