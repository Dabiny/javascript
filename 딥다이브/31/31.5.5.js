const target = 'AA BB 12 Aa Bb';
let reg = /[^0-9]+/g;
console.log(target.match(reg));
// [ 'AA BB ', ' Aa Bb' ]