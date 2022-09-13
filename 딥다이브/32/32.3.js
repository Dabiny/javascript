const strObj = new String('lee');

console.log(Object.getOwnPropertyDescriptors(strObj));

/* String 래퍼 객체는 읽기 전용객체다. 
{
  '0': {
    value: 'l',
    writable: false,
    enumerable: true,
    configurable: false
  },
  '1': {
    value: 'e',
    writable: false,
    enumerable: true,
    configurable: false
  },
  '2': {
    value: 'e',
    writable: false,
    enumerable: true,
    configurable: false
  },
  length: { value: 3, writable: false, enumerable: false, configurable: false }
}

*/