const arr = [1, 2, 3, 4];

const result = arr.splice(1, 2, 20, 30);
console.log(result); //제거한 요소가 반환됨

console.log(arr); // [ 1, 20, 30, 4 ]


const arr2 = [1, 2, 3, 4];
const res = arr2.splice(1, 0, 100);
console.log(res); // []

console.log(arr2); // [ 1, 100, 2, 3, 4 ]


const arr3 = [1, 2, 3, 1, 2];

function remove(array, item) {
    const index = array.indexOf(item);

    if (index !== -1) array.splice(index, 1);
    return array;
}

console.log(remove(arr3, 2)); // [ 1, 3, 1, 2 ]
console.log(remove(arr3, 100)); // [ 1, 3, 1, 2 ]


const arr4 = [1, 2, 3, 1, 2];

function removeAll (array, item) {
    return array.filter(v => v !== item); 
    // iterator v가 item 이랑 같지않은 것만 골라서 리턴
}

console.log(removeAll(arr4, 2)); // [ 1, 3, 1 ]
