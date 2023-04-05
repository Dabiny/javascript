function solution(str) {
    const mon = {1: '일', 2: '이', 3: '삼', 4: '사', 5: '오', 6: '육', 7: '칠', 8: '팔', 9: '구'};
    const dir = {1: '', 2: '십', 3: '백', 4: '천', 5: '만', 6: ['십', '십만'], 7: ['백', '백만'], 8: ['천', '천만'], 9: '억'};


}
console.log(solution('1원'));
console.log(solution('80,720원'));
console.log(solution('111,111원'));
console.log(solution('1,000,000원'));
function solution(number) {
    const koNum = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
    const unit = ['', '만', '억', '조'];
    const tenUnit = ['', '십', '백', '천'];
    const parseNum = +number.split('').filter((v) => !isNaN(v)).join('');
    
    let answer = '';
    let u = 10000;

    let index = 0;
    let division = u ** index;

    while (Math.floor(parseNum / division) > 0) {
        const m = Math.floor(parseNum % (division * u) / division);
        if (m) {
            const modToArray = m.toString().split('');
            const modLen = modToArray.length - 1;
            const koParse = modToArray.reduce((a, c, i) => {
                let str = `${koNum[c * 1]}${tenUnit[modLen - i]}`;
                if (str === '일십') {
                    str = '십';
                }
                if (str === '일천') {
                    str = '천';
                }
                if (str === '일백') {
                    str = '백';
                }
                a += str;
                return a;
            }, '');

            answer = `${koParse}${unit[index]}` + answer;
        }
        division = Math.pow(u, ++index);
    }

    return `${answer}원`;
    //while(Math.floor())
}