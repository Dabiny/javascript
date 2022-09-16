

function solution(fruits) {
    let mx = 0;

    for (let i = 0; i < fruits.length; i++) {
        let num = fruits[i];
        for (let j = i + 1; j < fruits.length - i; j++) {
            num += fruits[j];
        }
        mx = Math.max(mx, num);
    }

    return mx;
}

console.log(solution([-2, 5, -3, 6, 8, -1, -5, 3]));