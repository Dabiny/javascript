/* 숫자 카드 */
const HASH_SIZE = 21;
function Element(key, value){
  this.key = key;
  this.value = value;
}
function HashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}
HashTable.prototype.hashCode = function(key) {
  return (key + 10) % HASH_SIZE; //음수값을 양수값으로 바꾸는
};
HashTable.prototype.put = function(key){
  let index = this.hashCode(key);
  console.log(`key: ${key} -> index: ${index}`);
  if (this.table[index] === undefined ){
    this.table[index] = 0;
  }
  this.table[index]++;
};
HashTable.prototype.get = function (key) {
  index = this.hashCode(key);
  return this.table[index] === undefined ? 0 : this.table[index];
}

/* user code */
function answer(card, select) {
    let result = [];
    let ht = new HashTable();
    for (let i = 0; i < card.length; i++){
        ht.put(card[i]);
    }
    for (let i = 0; i < select.length; i++){
        result.push(ht.get(select[i]));
    }
    
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [
      [-6, -1, 6, 1, 1],
      [-2, 1, 3],
    ],
  
    // TC: 2
    [
      [7, 4, 3, 10, 10, 10, -10, -10, 7, 3],
      [10, 9, -5, 4, 6, -10],
    ],
  
    // TC: 3
    [
      [5, -3, -7, 10, -3, 4, 8, 4, -3, 3, 8, -2, -9, -8, -1],
      [4, 5, 1, 10, -2, -3, 3, -8],
    ],
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1]));
  }