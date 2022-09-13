const str = 'Hello world world';

// str에서 첫 번째 인수 'world'를 검색하여 두 번째 인수 'Lee'로 치환한다. 
console.log(str.replace('world', 'lee'));

// Hello lee world


console.log(str.replace('world', '<strong>$&</strong>'));

console.log(str.replace(/world/gi, 'Lee')); // Hello Lee Lee

function camelToSnake(camelCase){
    // /.[A-Z]/g는 임의의 한 문자와 대문자로 이루어진 문자열에 매치한다. 
    return camelCase.replace(/.[A-Z]/g, match => {
        console.log(match); // oW
        return match[0] + '_' + match[1].toLowerCase();
    });
    // oW -> o_w로 바꾸기
}

const camelCase = 'helloWorld';
console.log(camelToSnake(camelCase)); //hello_world

function snakeToCamel(snakeCase) {
    // /_[a-z]/g는 _와 소문자로 이루어진 문자열에 매치한다. 
    return snakeCase.replace(/_[a-z]/g, match => {
        console.log(match); // _w
        return match[1].toUpperCase();
    });
    // _w -> W로 바꾸기 
}

const snakeCase = 'hello_world';
console.log(snakeToCamel(snakeCase)); // helloWorld