const obj = {
    name: 'Lee',
    age: 20,
    alive: true,
    hobby: ['traveling', 'tennis']
};

// 객체를 JSON 포맷의 문자열로 변환한다.
const json = JSON.stringify(obj);

// JSON 포맷의 문자열을 객체로 변환한다. 
const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);
// object { name: 'Lee', age: 20, alive: true, hobby: [ 'traveling', 'tennis' ] }


const todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false }
];

// 배열을 JSON포맷의 문자열로 변환한다.
const jsonTodos = JSON.stringify(todos);

// JSON 포맷의 문자열을 배열로 변환한다. 배열의 요소까지 객체로 변환된다.
const parsedTodos = JSON.parse(jsonTodos);
console.log(typeof parsedTodos, parsedTodos);

/* 
object [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'JavaScript', completed: false }
]
*/