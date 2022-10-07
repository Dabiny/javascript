Promise.allSettled([
    new Promise(resolve => setTimeout(() => resolve(1), 2000)),
    new Promise((_, reject) => setTimeout(() => reject(new Error('error!!!'), 1000)))
]).then(console.log);

/*
처리결과를 배열로 반환한다. fullfilled인지, rejected인지..
[
  { status: 'fulfilled', value: 1 },
  {
    status: 'rejected',
    reason: Error: error!!!
        at Timeout._onTimeout (/Users/dabinkim/javascript/딥다이브/45/45.6.4.js:3:56)
        at listOnTimeout (node:internal/timers:559:17)
        at processTimers (node:internal/timers:502:7)
  }
]
*/