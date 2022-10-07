const requestData1 = () => new Promise(resolve => setTimeout(() => resolve(1), 3000));
const requestData2 = () => new Promise(resolve => setTimeout(() => resolve(2), 2000));
const requestData3 = () => new Promise(resolve => setTimeout(() => resolve(3), 1000));

// 정적메서드 Promise.all() 쓰기 전
const res = [];
requestData1().then(data => {
    res.push(data);
    return requestData2();
}).then(data => {
    res.push(data);
    return requestData3();
}).then(data => {
    res.push(data);
    console.log(res);
}).catch(console.error()); // 약6초 소요 비동기 처리를 순차적으로 처리. 


// 정적메서드 Primise.all() 쓰기 후
Promise.all([requestData1(), requestData2(), requestData3()])
.then(console.log).catch(console.error); // 약 3초 소요 세 개의 비동기처리를 병렬로 처리 


