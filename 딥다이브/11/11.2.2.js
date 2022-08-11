const o = { 
    x: {
        y: 1
    }
};

//얕은 복사
const c1 = { ...o };
console.log(c1 === o); // false
console.log(c1.x === o.x); //true