// var funcs = [];

// for (var i = 0; i < 3; i++) {
//     funcs[i] = function () {
//         return i;
//     }; // (1)
// }

// for (var j = 0; j < funcs.length; j++) {
//     console.log(funcs[j]()); // (2)
// }

var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs[i] = (function (id) {
        return function() {
            return id;
        }
    }(i));
}

for (var j = 0; j < funcs.length; j++) {
    console.log(funcs[j]()); // 0 1 2
}