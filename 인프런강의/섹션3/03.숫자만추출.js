function solution (s) {
    let str = [...s].filter(v => {
        if (v.charCodeAt()>= 48 && v.charCodeAt() <= 57){
            return v;
        }
    })

    return str.join('');
}

console.log(solution("g0en2T0s8eSoft"));