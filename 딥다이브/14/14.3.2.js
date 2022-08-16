var MYAPP = {}; // 네임스페이스로 쓸 빈객체

MYAPP.name = 'lee';
console.log(MYAPP.name); // lee

MYAPP.person = {
    name: 'Kim',
    address: 'Seoul'
};

console.log(MYAPP.name); //lee
console.log(MYAPP.person.name); //Kim