
const lee = { name: 'lee' };
const kim = { name: 'kim' };

const map = new Map([[lee, 'developer'], [kim, 'designer']]);

map.forEach((v, k, map) => console.log(v, k, map));
// developer { name: 'lee' } Map(2) {
//     { name: 'lee' } => 'developer',
//     { name: 'kim' } => 'designer'
//   }
//   designer { name: 'kim' } Map(2) {
//     { name: 'lee' } => 'developer',
//     { name: 'kim' } => 'designer'
//   }

// Map 객체는 Symbol.iterator메서드를 상속받는 이터러블이다. 
console.log(Symbol.iterator in map); // true

// 이터러블인 Map 객체는 for...of 문으로 순회할 수 있다. 
for (const entry of map) {
    console.log(entry);
}
// [ { name: 'lee' }, 'developer' ]
// [ { name: 'kim' }, 'designer' ]

// 이터러블인 Map 객체는 스프레드 문법의 대상이 될 수 있다. 
console.log([...map]);
// [ [ { name: 'lee' }, 'developer' ], [ { name: 'kim' }, 'designer' ] ]

// 이터러블인 Map 객체는 배열 디스트럭처링 할당 대상이 될 수 있다. 
const [a, b] = map;
console.log(a); // [ { name: 'lee' }, 'developer' ]
console.log(b); // [ { name: 'kim' }, 'designer' ]


for(const key of map.keys()) {
    console.log(key);
} //{ name: 'lee' } { name: 'kim' }

for (const value of map.values()) {
    console.log(value);
}// developer designer

for (const entry of map.entries()) {
    console.log(entry);
}// [ { name: 'lee' }, 'developer' ] [ { name: 'kim' }, 'designer' ]