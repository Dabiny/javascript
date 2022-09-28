const map = new Map();
console.log(map); // Map(0) {}

map.set('key1', 'value1');
console.log(map); // Map(1) { 'key1' => 'value1' }

map
    .set('key1', 'value2')
    .set('key2', 'value2');
console.log(map); // Map(2) { 'key1' => 'value2', 'key2' => 'value2' }


map
    .set('key1', 'value1')
    .set('key1', 'value2')
    .set('key1', 'value3');
console.log(map); //Map(2) { 'key1' => 'value3', 'key2' => 'value2' }

map
    .set(NaN, 'value1').set(NaN, 'value2');
console.log(map);
// Map(3) { 'key1' => 'value3', 'key2' => 'value2', NaN => 'value2' }
// NaN이 중복으로 들어가있지 않는다. 

map
    .set(+0, 'value1').set(-0, 'value2');
console.log(map); // 0 => 'value2' 중복으로 허용되지 


const map1 = new Map();

const lee = { name: 'lee' };
const kim = { name: 'kim' };

map1
    .set(lee, 'developer')
    .set(kim, 'designer');

console.log(map1);

console.log(map1.get(lee)); // developer
console.log(map1.get('key')); // undefined

console.log(map1.has(lee)); // true
console.log(map1.has('key')); // false

console.log(map1.delete(kim)); // true
console.log(map1); // Map(1) { { name: 'lee' } => 'developer' }

// Map(2) {
//     { name: 'lee' } => 'developer',
//     { name: 'kim' } => 'designer'
//   }