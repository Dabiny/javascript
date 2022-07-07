// console.log("line\nfeed"); //개행
// console.log("line\tfeed"); //tab
// console.log("line\u{1F60D}feed") //emoji

// console.log("\n");

// let str = "hello world";
// console.log(str.charAt(1));
// console.log(str.charCodeAt(1));
// console.log(str[3]);

// console.log("\n"); 
// console.log(str.indexOf("w")); //l의 인댁스가 몇번째인지
// console.log(str.indexOf("l", 3)); //l을 어디서부터 찾을지 
// console.log(str.lastIndexOf("l")); //뒤에서부터 탐색할래 9번째 l

// console.log("\n");
// console.log(str.includes("HeLlo")); //이 문자열이 있는지
// console.log(str.startsWith("ello", 1)); //무조건 전체에서 찾는게아니라 얘로 시작하는지 찾는것, 1부터 탐색을해라
// console.log(str.endsWith("world")); //뒤에서부터 순차적으로 찾는

// console.log(str.toUpperCase()); //대문자로 만들어주셈
// console.log(str.toLowerCase()); //소문자로 만들어주라

// console.log("\n")
// let str2 = "heLlo, world!!!";
// let changed = "";
// changed = str2.replace("world", "earth"); //원본값은 변형이 안됨.
// console.log(changed);
// changed = str2.replace("!","?"); //하나밖에 안바뀜
// console.log(changed);
// changed = str2.replace(/!/g, "?"); //한꺼번에 바뀜 /바꾸고싶은 문자열 / g, 
// console.log(changed);

// changed = str2.replace(/l/gi, "i"); //한꺼번에 바뀌지만 대문자도 바뀜같이
// console.log(changed);

// console.log("\n");

// //문자열 추출
// let str3 = "hello, world!!!";

// console.log(str3.slice(0, 3));
// console.log(str3.slice(5)); //5이후로 쭈욱
// console.log(str3.slice(-4)); //뒤부터 출력

// console.log(str3.slice(6, 2)); //시작값이 크면 안돌아가짐
// console.log(str3.substring(6, 2)); //결과값은동일하지만 substring은 더작은값을 스타트위치로 인식하여 변환되어서 돌아가짐

// console.log(str3.substr(2, 6));
// console.log(str3.substr(-5, 3));

// //문자열 분할
// console.log("\n");

// let fruits = "apple banana melon";
// result = fruits.split(" "); //어떤기준으로 문자열을 나눌지
// console.log(result);

// console.log(result[0]);
// console.log(result[1]);
// console.log(result[2]);

// let text = "hello";
// result = text.split("") //기준이없다면 문자열 하나하나 쪼갠다.
// console.log(result);
// console.log(result.length);
// console.log(result[0]);

// result = text.split("", 3);
// console.log(result);
// console.log(result.length);