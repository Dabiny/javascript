const obj = { a: 1 };

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다. 
console.log(obj.__proto__ === Object.prototype); //true

// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다.
// hasOwnProperty 메서드는 Object.prototype의 메서드다.
console.log(obj.hasOwnProperty('a')); // true 
console.log(obj.hasOwnProperty('__proto__')); // false


console.log(Object.getOwnPropertyDescriptors(Object.prototype));
/*
{
  constructor: {
    value: [Function: Object],
    writable: true,
    enumerable: false,
    configurable: true
  },
  __defineGetter__: {
    value: [Function: __defineGetter__],
    writable: true,
    enumerable: false,
    configurable: true
  },
  __defineSetter__: {
    value: [Function: __defineSetter__],
    writable: true,
    enumerable: false,
    configurable: true
  },
  hasOwnProperty: {
    value: [Function: hasOwnProperty],
    writable: true,
    enumerable: false,
    configurable: true
  },
  __lookupGetter__: {
    value: [Function: __lookupGetter__],
    writable: true,
    enumerable: false,
    configurable: true
  },
  __lookupSetter__: {
    value: [Function: __lookupSetter__],
    writable: true,
    enumerable: false,
    configurable: true
  },
  isPrototypeOf: {
    value: [Function: isPrototypeOf],
    writable: true,
    enumerable: false,
    configurable: true
  },
  propertyIsEnumerable: {
    value: [Function: propertyIsEnumerable],
    writable: true,
    enumerable: false,
    configurable: true
  },
  toString: {
    value: [Function: toString],
    writable: true,
    enumerable: false,
    configurable: true
  },
  valueOf: {
    value: [Function: valueOf],
    writable: true,
    enumerable: false,
    configurable: true
  },
  ['__proto__']: {
    get: [Function: get __proto__],
    set: [Function: set __proto__],
    enumerable: false,
    configurable: true
  },
  toLocaleString: {
    value: [Function: toLocaleString],
    writable: true,
    enumerable: false,
    configurable: true
  }
}*/