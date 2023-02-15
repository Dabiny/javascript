function solution(n, k) {
    let binary = n.toString(k);
    let len = binary.length - 1; // 끝 인덱스
    let arr = [];
    for (let i = len; i >= 0; i--) {
        if (binary[i] === '0') continue;
        let prime = binary[i];

        for (let j = i - 1; j >= 0; j--) {
            if (binary[j] === '0') break;
            prime += binary[j];
        }
        let reverse = prime.split('').reverse().join('');
        if (isPrime(reverse, i, binary)) {
            arr.push(reverse);
        }
    }
    return arr.length;
}

// 첫머리 인덱스, 끝머리 인덱스
function isPrime (primeNumber, startIndex, binary) {
    let num = Number(primeNumber);
    if (num === 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }
    
    let index = startIndex - primeNumber.length;
    
    if (binary[index] === '0' && binary[startIndex + 1] === '0') {
        return true;
    } // 0P0
    if (!binary[index] && binary[startIndex + 1] === '0') {
        return true;
    } // P0
    if (binary[index] === '0' && !binary[startIndex + 1]) {
        return true;
    } // 0P
    if (!binary[index] && !binary[startIndex + 1]) {
        return true;
    }// P
}

console.log(solution(437674, 3));
console.log(solution(110011, 10));

// 더 간단한 풀이
function solution(n, k) {
    function isPrime(num) {
        if (!num || num === 1) return false; // !num은 split '' 거르기위해

        for (let i = 2; i <= +Math.sqrt(num); i++) {
            if(num % i === 0) return false;
        }
        return true;
    }

    // k진법으로 나누기
    const candidates = n.toString(k).split('0'); // '0'을 빼준다. (전제조건 0)

    // 소수 개수세기
    return candidates.filter((v) => isPrime(+v)).length;
}