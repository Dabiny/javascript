const xhr = new XMLHttpRequest();

// HTTP 요청 초기화
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

xhr.send();

// readystatechange 이벤트는 HTTP 요청의 현재 상태를 나타내는 readState 프로퍼티가 변경될때마다 발생한다.
xhr.onreadystatechange = () => {   
    // readyState 프로퍼티는 HTTP 요청의 현재 상태를 나타낸다. 
    // readyState 프로퍼티 값이 4(XML.DONE)이 아니면 서버 응답이 완료되지 않은 상태다.
    if (xhr.readyState !== XMLHttpRequest.DONE) return;

    // state프로퍼티는 응답 코드를 나타낸다. 200 => 정상응답
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.response));
    }
    else {
        console.error('Error', xhr.status, xhr.statusText);
    }
}