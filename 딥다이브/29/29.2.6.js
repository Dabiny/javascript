console.log(Math.random()); //0.23107011469087935

/*
1에서 10범위의 랜덤 정수 획득
1) Math.random으로 0에서 1미만의 랜덤 실수를 구한다음, 10을 곱해 0에서 10미만의 랜덤실수를 구한다. 
2) 0에서 10미만의 랜덤 실수에 1을 더해 1에서 10범위의 실술ㄹ 구한다. 
3) Math.floor로 1에서 10의 범위의 랜덤 실수의 소수점 이하를 떼어버린다음 정수를 반환한다.
*/

const random = Math.floor((Math.random() * 10) + 1);
console.log(random);

//0.6638018380927513 * 10 = 6.6638010.... + 1 => 7.6638010...이런식