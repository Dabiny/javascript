// let user = {
//     name: "john",
//     age: 27,
//     sizes:{
//         height : 150,
//         weghit : 72,
//     }
// };

// //let admin = { ...user };
// let admin = JSON.parse(JSON.stringify(user)); //2. Json파싱을 활용한 깊복
// for (let key in user)
// {
//     admin[key] = user[key];
// } // 1, 얕복

// let admin = Object.assign({}, user); // 2. 얕복

// let admin = { ...user }; // 3.얕복


// admin.sizes.height = admin.sizes.height + 1;
// console.log(admin);
// console.log(user);

// console.log(String(123));
// console.log(String(1 / 0));
// console.log(String(-1 / 0));
// console.log(String(NaN));

// console.log(Number(""));
// console.log(Number("123"));
// console.log(Number("123hello"));

// console.log(parseInt("123.123"));
// console.log(parseFloat("123.123"));

// console.log(Boolean(""));
// console.log(Boolean("123"));
// console.log(Boolean("hello"));
// console.log(Boolean(0));
// console.log(Boolean(123));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

// let browser = "Chrome";
// switch (browser)
// {
//     case "Explorer":
//         msg = "ActiveX installation required.";
//         break;
//     case "Chrome":
//     case "Firefox":
//     case "Safari":
//     case "Opera":
//         msg = "Supported browers!";
//         break;
//     default:
//         msg = "Unsupported browsers!";
//         break;
// }

// console.log(msg);

// const day = 3;
// let weekend = "";

// switch(day)
// {
//     case 1:
//         weekend = "monday";
//         break;
//     case 2:
//         weekend = "tusday";
//         break;
//     case 3:
//         weekend = "wendsday";
//         break;
//     default:
//         break;
// }
// console.log(weekend);

// const person = {
//     fname : "dabin",
//     lname : "bob",
//     age: 25,
// }
// let text = "";
// for (let x in person)
// {
//     text += person[x];
// }
// console.log(text);

// let language = "javascript";
// let str = "";

// for (let i of language)
// {
//     text += i;
//     console.log(text);
// }