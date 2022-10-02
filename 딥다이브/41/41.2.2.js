let count = 1;

// 1초 후 타이머가 만료될 떄마다 콜백 함수가 호출된다. 
const timeoutId = setInterval(() => {
    console.log(count);
    if(count++ == 5) clearInterval(timeoutId);
}, 5000);

