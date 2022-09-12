const target = 'Is this all there is?';
const reg = /is/g;

console.log(target.match(reg));
// [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
// [ 'is', 'is' ]