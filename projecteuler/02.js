const start = Date.now();
// 변수명
const answer = (num) => {
  let arr = [1, 2];
  let x = 0;
  let i = 1;
  while (true) {
    if (x >= num) break;
    x = arr[i] + arr[i - 1];
    i++;
    arr.push(x);
  }
  return arr.filter((iter) => iter % 2 === 0).reduce((acc, cur) => acc + cur, 0);
};

console.log(answer(4000000));

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);
