// 1. 서버 사용을 위해 http 모듈을 http 변수에 담는다. 
let http = require('http');


// 2. http 모듈로 서버를 생성 사용자로부터 http요청이 들어오면 함수 실행
let server = http.createServer((request,response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('Hello node.js!!');
})


// 3. listen 함수로 8080포트 가진 서버를 실행한다. 
server.listen(8888, () => {
    console.log('Server is running...');
});

// 4. 명령창에 실행하고 브라우저에 8080접속하기 



// let http = require('http');
// -> 웹서버를 실행하기 위해 http 모듈을 require로 불러온다. require는 import와 유사한 기능이다. 
// -> node.js는 require후에 해당 모듈을 http라는 변수에 담은 뒤 하나의 독립적인 객체로 사용한다. 
// -> http 모듈에 정의된 모든 기능이 변수 http로 생성된다. 

// 2. http 모듈로 서버를 생성 사용자로부터 http요청이 들어오면 함수 실행
// let server = http.createServer((request,response) => {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.end('Hello node.js!!');
// })
//  -> createServer에 파라미터로 입력되는 콜백함수는 함수명이 없다. 
// 함수명 없이 작성된 함수는 이벤트 발생시 callback 된다. 즉, 생성된 서버로 어떤 요청이 들어오면
// function 내부의 로직이 실행되면서 function 내부에 선언한 request와 response라는 이름으로 사용하는 값을 넘겨준다. 

// response.writeHead(200, {'Content-Type': 'text/html'});
// {"키":"값"}형태를 받는다. 첫번째 200숫자 값은 웹 서버 들어오는 어떤 요청에 대해 정상적으로 값을 리턴할 때 사용하는 코드다. 
// 오류없이 처리가 정상적으로 완료되면 200코드를 담아서 응답 헤더를 설정해주게 된다. 

