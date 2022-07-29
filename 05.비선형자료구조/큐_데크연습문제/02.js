/* 카드 뽑기 */

/* user code */
function answer(n) {
    let result = [];
    let card = [];
    
    for (let i = 1; i <= n; i++){
        card.push(i);
    }
    
    while (card.length != 0){ //카드배열이 0이 아닐때까지
        //1. 한장을 빼서 result에 넣고
        let num = card.shift();
        result.push(num);

        // 예외. 만약 카드가 1장 남아있다면 바로 푸쉬해주고 break  
        if (card.length == 1){
            result.push(card[0]);
            break;
        }
        //2. 그다음 맨 위에있는 한장을 아래로 집어넣는다.
        let num2 = card.shift();
        card.push(num2);
    }
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    4,
  
    // TC: 2
    7,
  
    // TC: 3
    10,
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
  }