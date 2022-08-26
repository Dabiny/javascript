function solution(n, s, t) {
    const text = '.'.repeat(n) + s + '.'.repeat(n - 1);
    console.log(text);

    const duration = n + s.length;
    const time = t % duration;
    console.log(time);
    
    let res = text.substr(time, n);
    return res;
}
console.log(solution(5, "Snowball", 3));