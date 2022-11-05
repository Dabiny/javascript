const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [
    "How are you today?",
    "Quite well, thank you, how about yourself?",
    "I live at number twenty four.",
    "#"
];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function() {
    solution(input);
    process.exit();
})


const solution = input => {
    return str.toLowerCase().replace(/[^aeiou]/g, "").length;
};