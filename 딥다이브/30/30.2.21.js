const today = new Date(); // today의 지정 로캘을 KST

// UTC와 toay의 지정 로캘 KST와의 차이는 -9시간이다. 
console.log(today.getTimezoneOffset() / 60); // -9