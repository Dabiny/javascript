Number.isSafeInteger(0); // true

Number.isSafeInteger(0.5); //false
Number.isSafeInteger('false'); // false
Number.isSafeInteger(Infinity); // false