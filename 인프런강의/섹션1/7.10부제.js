function solution(day, arr){
    let answer=0;
    let car =[];
    for (let i of arr){
        if (i % 10 == day){
            answer++;
            car.push(i);
        }
    }  
    return car;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
// ⭐️ 어떤숫자든지 10의자리를 %하면 1의자리가 나머지로 나온다.