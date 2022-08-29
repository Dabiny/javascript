const arr = [1, 2, 3];
delete arr[1];
console.log(arr); //[ 1, <1 empty item>, 3 ] 희소배열상태

// length 프로퍼티에 영향을 주지 않는다. 즉, 희소 배열이 된다.
console.log(arr.length); // 3

//Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 수);
arr.splice(1, 1); // [1]부터 1개제거
console.log(arr); // [ 1, 3 ]
console.log(arr.length); // 2 완전히 지워졌다.