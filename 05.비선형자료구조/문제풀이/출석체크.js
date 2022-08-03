/* 출석 체크 */
function Dictionary(items = {}){
    this.items = items;
}
Dictionary.prototype.has = function (key) {
    return this.items.hasOwnProperty(key);
};
Dictionary.prototype.set = function (key, value) {
    this.items[key] = value;
}
// getBuffer(): 모든 개체(Entity) 반환
Dictionary.prototype.getBuffer = function () {
    return { ...this.items }; //객체형태는 slice로 반환이 되지않아서 스프레드로 반환한다.
}

/* user code */
function answer(class_1, class_2) {
    let result = [];
    let dic = new Dictionary();
    for (let i = 0; i < class_2.length; i++){
        dic.set(class_2[i], 1);
        
    }
    for (let i = 0; i < class_1.length; i++){
       if (dic.has(class_1[i])){
            result.push(class_1[i]);
       } 
    };
    
    for (let i = 0; i < dic.length; i++){
        for (let k in dic.items){
            if (dic.has(k) && dic[k] == 2) {
                result.push(k);
            }
        }
    }
    
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [
      ["Kali", "Oliver", "Naomi"], //1학기
      ["Oliver", "Naomi", "Maya"], //2학기
    ],
  
    // TC: 2
    [
      ["Roxy", "Olga", "Kara", "Nana"],
      ["Oliver", "Roxy", "Kara", "Nana", "Maya"],
    ],
  
    // TC: 3
    [
      ["Roxy", "Ravi", "Nana", "Rei", "Karis", "Mana", "Naomi"],
      ["Olga", "Nana", "Rei", "Naomi", "Kali", "Ravi", "Kara"],
    ],
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1]));
  }