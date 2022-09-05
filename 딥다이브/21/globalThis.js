// browsers 
globalThis === this // true
globalThis === window // true
globalThis === self // true
globalThis === frames // true



// Node.js
console.log(globalThis === this); // Node.js 12.0.0 이상은 true
console.log(globalThis == global); // true
