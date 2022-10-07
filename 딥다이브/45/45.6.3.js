Promise.race([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),
]).then(console.log).catch(console.error); // 3 
// 이름그대로 배열 안의 프로미스 요소가 레이스 하듯이 먼저 resolve하게 되면 그 리솔브 값을 반환시킨다. 
// 하나라도 rejected상태가 되면 에러를 reject하는 새로운 프로미스를 반환한다. 
