function solution(n, arr1, arr2) {
    var answer = [];
    let map1 = Array.from(Array(n), () => Array(n).fill(0));
    let map2 = Array.from(Array(n), () => Array(n).fill(0));

    let binary1 = arr1.map((v, i) => { 
        if (v.toString(2).length < n) {
            const zero = '0';
            let str = (zero.repeat(n - v.toString(2).length) + v.toString(2)).split('');
            return str
        }
        else return v.toString(2).split('');
    });
    let binary2 = arr2.map((v) => {
        if (v.toString(2).length < n) {
            const zero = '0';
            let str = (zero.repeat(n - v.toString(2).length) + v.toString(2)).split('');
            return str
        }
        else return v.toString(2).split('');
    });
    
    for (let i = 0; i < n; i++) {
        let sharp = '';
        for (let j = 0; j < n; j++) {
            if(binary1[i][j] == '1') map1[i][j] = 1;
            else if (binary2[i][j] == '1') map2[i][j] = 1;

            if (binary1[i][j] == 1 || binary2[i][j] == 1)  sharp += '#';
            else if (binary1[i][j] == 0 && binary2[i][j] == 0) sharp += ' ';
        }

        answer.push(sharp);
    } 
    return answer;
}
console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));


