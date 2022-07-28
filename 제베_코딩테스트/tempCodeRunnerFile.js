function solution(n) {
    let bnry = (n).toString(2);
    let count = 0;
    let num = 0;

    for (let i = 0; i < bnry.length; i++){
        if (bnry[i] === "1"){
            count++;
        }
        else{
            num = num < count ? cnt : num;
        }
    }
    return num;
}