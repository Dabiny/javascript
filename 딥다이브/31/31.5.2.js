const target = 'Is this all there is?';

const reg = /.... .../g;
console.log(target.match(reg));
/*
[
  'Is ', 'thi',
  's a', 'll ',
  'the', 're ',
  'is?'
]
*/