var obj = {
    name: 'Lee',
    SayHi: function () {
        console.log('Hi ' + this.name);
    }
};
obj.SayHi(); // Hi Lee

const ES6obj = {
    name: 'Lee',
    
    SayHi() {
        console.log('Hi ' + this.name);
    }
};
ES6obj.SayHi(); //Hi Lee