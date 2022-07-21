// /*  Math
//     표준 Built-int객체로써 수학적인 연산을 위한 속성값과 메서드를 제공하는 객체이다.
//     Math는 생성자 함수가 아니며, 모든 속성과 메서드는 정적이기에 Math.fucntion()으로
//     언제든 호출이 가능하다.
//     - 대표 속성 및 메서드
//         * 오일러 상수: Math.E
//         * PI : Math.PI
//         * 절대값 : Math.abs(x)
//         * 최대값 : Math.max(x)
//         * 최소값 : Math.min(x)
//         * 랜덤 난수 값: Math.random()
//         * 제곱과 제곱근: Math.pow(x, y), Math.sqrt(x)
//         * 소수점 처리: Math.round(x), Math.ceil(x), Math.floor(x)
// */

// /* 최대 / 최소 / 절대값 
//     배열을 인수로 받아 최대 최소를 산출하려면 apply함수 혹은 스프레드 문법 사용 필요.
// */

// console.log(Math.max(1, -1));
// console.log(Math.min(1, -1));

// console.log(Math.max(1, -1, 5, 23, 17, -4));
// console.log(Math.min(1, -1, 5, 23, 17, -4));

// //use apply
// let nums = [1, -1, 5, 23, 17, -4];
// console.log(`Max : ${Math.max.apply(null, nums)}`);
// console.log(`Min: ${Math.min.apply(null, nums)} \n`);

// //use spread
// console.log(`Max: ${Math.max(...nums)}`);
// console.log(`Min: ${Math.min(...nums)} \n`);

// console.log(Math.abs(1));
// console.log(Math.abs(-1));
// console.log(Math.abs(-Infinity) + "\n");

// /* 속성 및 랜덤
//     0과 1사이의 난수 랜덤 값. Math.random()
// */

// //1. Math property 외우기 어렵기때문에 파이값, 오일러값이 맞는지 확인할때 주로 사용
// console.log(Math.E);
// console.log(Math.PI);

// //2. random 난수 소수점으로 반환한다. 정수로 반환하려면 * 10 을 해주면 된다.  
// for(let i = 0; i < 3; i++)
//     console.log(Math.random());

// for(let i = 0; i < 3; i++)
//     console.log(Number.parseInt(Math.random() * 10)); //parseInt : 정수로 바꿔주는 애

// //pow
// console.log(Math.pow(2, 3)); //2의 3승
// console.log(2 ** 3); //이렇게도 가능

// // sqrt
// console.log(Math.sqrt(4)); //제곱근을 구할때 
// console.log(Math.sqrt(2)); 

// //round, ceil, floor
// console.log(Math.round(3, 5)); //반올림처리
// console.log(Math.round(-2, 3));

// console.log(Math.ceil(3, 5)); //올림처리

// console.log(Math.floor(3, 5)); //내림처리
