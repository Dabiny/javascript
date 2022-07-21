outer: for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (i + j === 3)
                break outer;
            
        }
}

let num = null;
num += 20;
console.log (num);

let str = "";
str += "1";
str += "2";
str = parseInt(str);
console.log (str);
console.log (typeof(str));
