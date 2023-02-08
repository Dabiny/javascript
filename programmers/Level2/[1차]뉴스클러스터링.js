function solution(str1, str2) {
    const A = str1.toLowerCase();
    const B = str2.toLowerCase();

    let Aarray = [];
    let Barray = [];
    for (let i = 0; i < A.length - 1; i++) {
        Aarray.push(A[i] + A[i + 1]);
    }
    for (let i = 0; i < B.length - 1; i++) {
        Barray.push(B[i] + B[i + 1]);
    }

    // 여기서 공백, 숫자, 특수문자가 들어있는 단어는 빼기
    Aarray = Aarray.filter((value) => match(value));
    Barray = Barray.filter((value) => match(value));



    const set = new Set([...Aarray, ...Barray]);
    let union = 0;
    let intersection = 0;
    
    set.forEach((value) => {
        const has1 = Aarray.filter(x => x === value).length;
        const has2 = Barray.filter(x => x === value).length;
        
        union += Math.max(has1, has2);
        intersection += Math.min(has1, has2);
    })

    return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}
function match(str) {
    const regex = new RegExp(/^[a-z]*$/, 'g');
    return regex.test(str);
}

console.log(solution("FRANCE", "french"));
console.log(solution("handshake", "shake hands"));
console.log(solution("aa1+aa2", "AAAA12"));
console.log(solution("E=M*C^2", "e=m*c^2"));


    // if (Aarray.length === 0 && Barray.length === 0) return Math.floor(1 * 65536);
    // // 교집합
    // let inter = Aarray.filter(iter => Barray.includes(iter)).length;


    // // 합집합
    // let union = [...new Set([...Aarray, ...Barray])].length;
    // if (union === 1) { // 만약 합집합이 1이면 모두 같은 단어의 다중집합이기때문에 최대길이를 산출
    //     union = [...Aarray, ...Barray].length;
    // }
    
    // if (Math.floor(inter / union) === 1) {
    //     return 65536;
    // }
    // else {
    //     return Math.floor((inter / union) * 65536);
    // }