
function isSamePrime(A, B){
    for (let i = 2; i <= parseInt(Math.sqrt(A)); i++){
        if(A % i === 0 && B % i === 0) {
            return true;
        } 
    }
    return false
}

function solution(A, B) {
    if (isSamePrime(A, B)) return 1;
    return 0;
}

console.log(solution(12, 6));
console.log(solution(3, 18));