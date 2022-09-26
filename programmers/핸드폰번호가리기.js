function solution(phone_number) {
    var answer = phone_number.replace(/\d(?=\d{4})/g, '*');
    return answer; 
}

console.log(solution("01023436443"));