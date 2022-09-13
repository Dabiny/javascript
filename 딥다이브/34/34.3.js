for (const item of [1, 2, 3]) {
    // item 변수에 순차적으로 1, 2, 3이 할당된다. 
    console.log(item); // 1 2 3
}

const iterable = [1, 2, 3];

const iterator = iterable[Symbol.iterator]();

for (;;) {
    const res = iterator.next();

    if (res.done) break;

    const item = res.value;
    console.log(item);
}