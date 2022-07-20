/* 달팽이 만들기 */

/* user code */
function answer(length) {
    let result = [];
    //1. result를 2차원배열로 만들기
    for (let i = 0; i < length; i++){
        result[i] = [];
    }
    //2. 4,3,2,1, length 길이만큼 --하면서 ++x, ++y, --x, --y 패턴으로 그려나가기
    let direction = 1;
    let x, y, sum;
    x = y = sum = 0;
    x--;
    while(true){
        for (let i = 0; i < length; i++){
            x += direction;
            result[y][x] = ++sum;
        }
        length--;
        if (length == 0) break;
        for (let i = 0; i < length; i++){
            y += direction;
            result[y][x] = ++sum;
        }
        direction *= -1;
    }

    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    3,
  
    // TC: 2
    5,
  
    // TC: 3
    6,
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
  }