if(!false) console.log(false + ' is falsy value');
if(!undefined) console.log(undefined + ' is falsy value');
if(!0) console.log(0 + ' is falsy value');
if(!NaN) console.log(NaN + ' is falsy value');
if(!'') console.log('' + ' is falsy value');

//전달받은 인수가 falsy값이면 true, truthy값이면 false를 반환한다.
function isFalsy(v) {
    return !v;
}

// 전달받은 인수가 truthy값이면 true, Falsy값이면 false를 반환한다.
function isTruthy(v) {
    return !!v;
}

isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy('');

isTruthy(true);
isTruthy('0');

