class MyMath {
    // static public 필드 정의
    static PI = 22 / 7;

    static #num = 10;

    static increment() {
        return ++MyMath.#num;
    }
}

console.log(MyMath.PI); // 3.142857142857143
console.log(MyMath.increment()); // 11