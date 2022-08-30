// 배열 요소 중 10보다 큰 수가 있는지?
[5, 10, 15].some(item => item > 10);


// 배열 요소 중 0보다 작은 요소가 있는지?
[1, 2, 3].some(item => item < 0);

// 배열에 오렌지라는 요소가 있는지?
['apple', 'orange', 'mango'].some(item => item === 'orange');

// 빈배열은 언제나 false이다. 
[].some(item => item > 3);