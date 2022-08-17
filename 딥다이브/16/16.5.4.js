const person = {
    name: 'lee',
    address: {
        city: 'Seoul'
    }
};

function deepFreeze(target) {
    if (target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);
        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}

deepFreeze(person);

console.log(Object.isFrozen(person)); //true
console.log(Object.isFrozen(person.address)); //true