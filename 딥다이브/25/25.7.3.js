class Person {
    // 클래스 필드 정의
    name = 'lee';

    getName = function () {
        return this.name;
    }

    // 화살표 함수로 정의할 수도 있다.
    // getName = () => this.name;
}

const me = new Person();
console.log(me); //Person { name: 'lee' }