const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};

for (let i = 0; i < arrayLike.length; i++){
    // 유사배열객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근 가능하다. 
    console.log(arrayLike[i]); // 1 2 3
}

const arr = Array.from(arrayLike);
console.log(arr); // [ 1, 2, 3 ]