// // 순열 예제 1
// let input = ["a", "b", "c"];
// let count = 0;

// function permutation(arr){
//     for (let i = 0; i < arr.length; i++)                //첫번째 index 위치시킬 요소 [i,0,0]
//         for (let j = 0; j < arr.length; j++){           //두번째 index 위치시킬 요소 [i,j,0]
//             if (i == j)                             // 값 같으면 안되니까 컨티뉴처리
//                 continue;
//             for (let k  = 0; k < arr.length; k++){      //세번째 index 위치시킬 요소 [i,j,k]
//                 if (i == k)
//                     continue;
//                 if (j == k)
//                     continue;
//                 console.log(arr[i], arr[j], arr[k]);    //중복안되는 애들
//                 count++;
//             }
//         }
// }
// permutation(input);
// console.log(count);

// 순열 예제 2
// let count2 = 0;
// function permutation2(arr, s, r) {      // s. 시작할위치 , R. 몇개를 뽑을지
//     //1. 재귀를 멈춰야할 조건
//     if (s == r){    //시작위치랑 개수가 똑같으면 카운트를 증가시키고 리턴할게
//         count2++;
//         console.log(arr.join(" "));
//         return;
//     }
//     //2. 재귀를 돌면서 변경되어야 할 부분/메인로직
//     for (let i = s; i < arr.length; i++){
//         [arr[s], arr[i]] = [arr[i], arr[s]];
//         permutation2(arr, s + 1, r);
//         [arr[s], arr[i]] = [arr[i], arr[s]];
//     }
// }
// permutation2(input, 0, 2);
// console.log(count2);


// // 조합 예제 1.
// let count3 = 0;
// function combination(arr) {
//     for (let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             count3++;
//             console.log(arr[i],arr[j]);
//         }
//     }
// }
// combination(input);
// console.log(count3);

// // 조합 예제 2.
// let input = [1, 2, 3, 4]
// let output = [];
// let count4 = 0;
// function combination2(arr, data, s, idx, r){ //idx -> 현재 인덱스 정보, 
//     if (s == r){    // start지점과 r과 같으면 멈추기 
//         count4++;
//         console.log(data);
//         return;
//     }
//     for (let i = idx; arr.length - i >= r; i++){
//         // 어레이 길이가 i보다 크거나 같고 r-s만큼만 돌겠다. 
//         data[s] = arr[i];
//         combination2(arr, data, s + 1, i + 1, r);
//     }
// }
// combination2(input, output, 0, 0, 2);
// console.log(count4);

// 스타팅 포인트 부터 돌면서 ; (배열 길이(4) - 스타팅포인트)를 뺀 값이 (2개만 뽑는 조건과 재귀스타트횟수를 뺀 값)보다 크거나 같아질때까지만 돈다.
