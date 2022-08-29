/* Bubble Sort */

// 스왑 함수 만들기
let swap = function (arr, idx_1, idx_2) {
    let tmp = arr[idx_1];
    arr[idx_1] = arr[idx_2];
    arr[idx_2] = tmp;
};

let bubbleSort_1 = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++){
            if (arr[j] > arr[j + 1]){
                swap(arr, j, j + 1);
            }
        } 
    }
};

let bubbleSort_2 = function (arr) {
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = 0; j < arr.length - i - 1; j++) { // 정렬된 끝자리는 안돌아도되니까 점점 줄어들게하기
            if (arr[j] > arr[j + 1]){
                swap(arr, j, j + 1);
            }
        }
    }
}

let bubbleSort_3 = function (arr) {
    let swapped; // flag 활용
    for (let i = 0; i < arr.length - 1; i++){
        swapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swapped = true;
            }
        }
        if (!swapped) break; // 이미 다 정렬되었으니까 더 안돌아도됨.
    }
};

let init_array = [6, 5, 1, 3, 2];

let array = [...init_array];
bubbleSort_1(array);
console.log(array, "\n");

array = [...init_array];
bubbleSort_2(array);
console.log(array, "\n");

array = [...init_array];
console.log(array);

bubbleSort_3(array);
console.log(array);




// 좀더 가다듬기 

// 스왑 함수는 동일

let ascending = function (x, y) {
    return x > y;
};

let descending = function (x, y) {
    return x < y;
};

let bubbleSort = function (arr, compare) { //compare인자가 추가
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (compare(arr[j], arr[j + 1])){
                swap(arr, j, j + 1);
            }
        }
    }
};

let arr;
let sorting = [bubbleSort]; //.name을 쓰려고 배열에 넣는다. 
let order = [ascending, descending]; // 함수를 배열에 넣는다..

for (let i = 0; i < sorting.length; i++) {
    for (let j = 0; j < order.length; j++) {
        console.log(sorting[i].name, order[j].name);

        arr = [...init_array];
        sorting[i](arr, order[j]);
        console.log(arr);
    } 
    /* 
    bubbleSort ascending
    [ 1, 2, 3, 5, 6 ]

    bubbleSort descending
     6, 5, 3, 2, 1 ]
    */
}
