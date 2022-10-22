process.stdin.setEncoding('utf8');
process.stdin.on('data', data => { // 입력받은 숫자를 'data'에 입력받는다. 
    const n = data.split(" "); 
    const a = Number(n[0]), b = Number(n[1]);  // a는 한줄에대한 별의 갯수, b는 몇줄인지 출력
    for(let i = 0; i < b; i++) {
        let str = "";
        for (let j = 0; j < a; j++) {
            str += '*';
        }
        console.log(str);
    }
});

// repeat을 써서 별을 찍는 방법
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => { // 입력받은 숫자를 'data'에 입력받는다. 
    const n = data.split(" "); 
    const a = Number(n[0]), b = Number(n[1]);  // a는 한줄에대한 별의 갯수, b는 몇줄인지 출력
    const row = '*'.repeat(a);
    for (let i = 0; i < b; i++)  console.log(row);
});
