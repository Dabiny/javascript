// 제너레이터 함수 선언문
function* getDecFunc() {
    yield 1;
}

// 제너레이터 함수 표현식
const genExpFunc = function* () {
    yield 1;
};

// 제너레이터 메서드
const obj = {
    * genObjMtd() {
        yield 1;
    }
};

// 제너레이터 클래스 메서드
class Myclass {
    * genClsMtd() {
        yield 1;
    }
}

// 화살표함수로 정의 x, nw 연산자와 함꼐 생성자 함수로 호출 x