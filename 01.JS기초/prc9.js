// /* Date
//     표준 빌트인 객체로써 날짜와 시간을 위한 속성값과 메서드를 제공하는 객체이다.
//     Date객체는 1970년 1월 1일 UTC(협정 세계시) 자정과의 차이를 밀리초로 나타내는 정수값 표현
//     - 생성자 및 대표 매서드
//     * Date 객체 생성자 : new Date()
//     * 현재시간 기준 문자열 : Date()
//     * 날짜 정보 얻기 (년/월/일): Date.getFullYear(), Date.getMonth(), Date.getDate()
//     * 날짜 정보 얻기 (시/분/초/ms): Date.getHours(), Date.getMinutes(), Date.getSeconds()
//     * 날짜 정보 설정 (년/월/일): Date.setFullYear(), Date.setMonth(), Date.setDate()
//     * 날짜 정보 설정 (시/분/초/ms): Date.setHours(), Date.setMinutes(), Date.setSeconds()
//     * 그 외 날짜 정보 얻기: Date.getDay(), Date.getTime(), Date.getTimezoneOffset()
//     * 그 외 날짜 정보 설정: Date.parse(string);
// */

// // Date 생성자.
// let date_now = new Date();
// let date_now_str = Date(); //new 안붙이면 문자열로 나옴

// console.log(date_now);
// console.log(date_now_str); //대한민국 표준시
// console.log(typeof date_now); // object 형
// console.log(typeof date_now_str); //string 형

// // milliseconds (1/1000)sec 
// let date_ms_1 = new Date(0); //default 1970
// let date_ms_2 = new Date(24 * 3600 * 1000); // 1000ms * 3600초 * 24시
// console.log(date_ms_1);
// console.log(date_ms_2); //하루가 지난것

// let date_string = new Date("2020-01-01");
// console.log(date_string); 

// //month는 0월부터 11월까지 1월(0) ~ 12월(11)
// let date_params_1 = new Date(2021, 0, 1); 
// console.log(date_params_1); //utc기준으로 되어있어서 (z가 붙어잇으면 uct임) -9를 한 15시가 나오게됨.
// date_params_1 = new Date(Date.UTC(2021, 0, 1)); //이렇게 해줘야 제대로 나온다. 
// console.log(date_params_1 + "\n"); 


// // 날짜 정보 얻기
// let date = new Date(Date.UTC(2021, 0, 1));
// console.log(date);

// // 1. year, month, day: 0(sun) ~ 6(sat)
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay() + "\n");

// //2. hours
// console.log(date.getHours()); 
// console.log(date.getUTCHours()); //UTC 보정 값.

// //3. getTime: (now - date(0)) milliseconds
// //   getTimezoneOffset: (UTC + 0 - currentZone) minutes
// console.log(date.getTime());
// console.log(new Date(date.getTime()));
// console.log(date.getTimezoneOffset()); //UTC단위로 얼마만큼 차이가 있는지 UTC+0과 우리나라시간이랑 얼마나 차이나는지

// console.log("\n");
// //날짜 정보 설정
// let date2 = new Date();
// console.log(date);

// //1. set year
// let ms_year = date2.setFullYear(2022, 6, 8);
// console.log(date2);
// console.log(new Date(ms_year)); 
// console.log("\n");

// //2. set date
// date2.setDate(1); //1일로 설정 2022-07-01 T12:24:00.433Z
// console.log(date2); 
// date2.setDate(0); // setDate(0) => 이전 달의 마지막 날
// console.log(date2); // 

// //3. set hours
// date2.setHours(date2.getHours() + 2); //기존시간에서 + 2 만 하겠다.
// console.log(date2); 

// /* parse
//     날짜 정보 설정
//     문자열 기반 날짜 정보 설정: Date.parse( YYYY - MM - DD T HH:mm:ss.sssZ )
//     YYYY-MM-DD -> 날짜 년월일, "T" -> 구분기호, HH:mm:ss.sss -> 시분초.밀리초
//     'Z'(option) -> 미 설정할 경우 현재 로컬기준 UTC로, 설정할 경우 UTC+0 기준으로 시간 설정
// */
// let ms_parse = Date.parse("2022-07-08T00:00:00.000");
// console.log(ms_parse);
// console.log(new Date(ms_parse));

// console.log(new Date(Date.parse("2020-07-08T00:00:00.000Z")));



// console.log("\n");
// //성능측정 벤치마크 측정 대상 함수 전후로 시간을 비교하여 알고리즘 성능을 측정할때
// function dateSub(old_date, new_date){
//     return new_date - old_date;
// }
// function getTime(old_date, new_date){
//     return new_date.getTime() - old_date.getTime();
// }

// function benchMark(callback_func) {
//     let date_1 = new Date("2022-01-01");
//     let date_2 = new Date();
//     let start = Date.now();
//     for (let i = 0; i < 100000; i++){
//         callback_func(date_1, date_2);
//     }                       //포문을 10만번 다 돌려보기 (리턴값은 의미 없는거니 저장을 따로 안해도됨 성능을 보는것임)
//     return Date.now() - start;  //10만번 돌린 후 차이를 알아보는 것.
// }

// console.log("dateSub: " + benchMark(dateSub) + "ms"); 
// console.log("getTime: " + benchMark(getTime) + "ms");
