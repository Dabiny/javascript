function solution(sizes) {
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] < sizes[i][1]){
            let tmp = sizes[i][0];
            sizes[i][0] = sizes[i][1];
            sizes[i][1] = tmp;
        }
        arr1.push[sizes[i][0]];
        arr2.push[sizes[i][1]];
    }

}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))