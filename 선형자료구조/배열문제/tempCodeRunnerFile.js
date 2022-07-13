/* 나무 그리기 (다시 보기) */

/* user code */
function answer(height) {
    let str = "";
    //1. 공백 처리

    //2. * 처리

    //3. 개행처리
    for (let i = 0; i < height; i++){
        for (let j = 0; j < height - i - 1; j++){
            str += " ";
        }
        for (let j = 0; j < i * 2 + 1; j++){
            str += "*";
        }
        str += "\n";
    }
    return str;
  }
  
  /* main code */
  let input = [
    // TC: 1
    3,
  
    // TC: 2
    5,
  
    // TC: 3
    7,
  ];
  
  for (let i = 0; i < input.length; i++) {
    console.log(`${answer(input[i])}`);
  }