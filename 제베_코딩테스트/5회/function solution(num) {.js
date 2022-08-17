function solution(num) {
    let win = false;
    let more = num;
    let flag = true; // true면 흥민이가 false면 누나차례
    for (let i = 1; i <= 3; i++) {
        while (more == 0) {
            if (flag == true) {
                if (more < 1) {
                    win = false;
                }
                if (more == 1) {
                    win = true;
                }
                more =- i;
                flag == false;
            }
            if (flag == false) {
                more =- i;
            }
        }
    }
    return win;
}

console.log(solution(4));