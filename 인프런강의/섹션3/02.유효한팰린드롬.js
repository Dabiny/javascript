function solution(s) {
    let leg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\")]/g;
    let str = s.replace(/ /g, '').replace(leg, '').toUpperCase();
    let flag = true;
    for (let i = 0; i < parseInt(str.length / 2); i++){
        if (str[i] != str[str.length - i - 1]){
            flag = false;
        }
    }  
    return flag;
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
// / [\ {\ }\ [\ ]\ /? .,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"] /gi;

// /[^a-z]/g // 알파벳이 아닌것들을 골라서 없애기 