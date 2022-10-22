let obj = {
    string: "",
    number: 0,
};

function solution(s) {
    

    let str = "";
    let keyArr = [];
    for(let i = 0; i < s.length; i++){
        str += s[i];
        // 만약 str 값이 배열 키밸류값에 존재한다면
        console.log(str);
        if(numInfo.includes(str)){
        }
    }
    return keyArr;
}

let str = "onetwothree4fivesix";
console.log(solution(str));