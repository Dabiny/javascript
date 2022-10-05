const obj = {
    name: 'Lee',
    age: 20,
    alive: true,
    hobby: ['traveling', 'tennis']
};

// 객체를 JSON 포맷의 문자열로 변환한다. 
const json = JSON.stringify(obj);
console.log(typeof json, json);
// string {"name":"Lee","age":20,"alive":true,"hobby":["traveling","tennis"]}

// 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기 한다. 
const prettyJson = JSON.stringify(obj, null, 2);
console.log(prettyJson);
// {
//     "name": "Lee",
//     "age": 20,
//     "alive": true,
//     "hobby": [
//       "traveling",
//       "tennis"
//     ]
//  }


// relacer함수. 값의 타입이 Number이면 필터링되어 반환되지 않는다.
function filter(key, value) {
    return typeof value === 'number' ? undefined : value;
}

// JSON.stringfy 메서드에 두 번째 인수로 replacer 함수를 전달한다. 
const strFilterdObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilterdObject, strFilterdObject);

// string {
//     "name": "Lee",
//     "alive": true,
//     "hobby": [
//       "traveling",
//       "tennis"
//     ]
//   }
// 넘버 값(age)을 뺀 obj가 출력됨.


const todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false }
];

const todosJson = JSON.stringify(todos, null, 2);
console.log(typeof todosJson, todosJson);
// string {
//     "name": "Lee",
//     "alive": true,
//     "hobby": [
//       "traveling",
//       "tennis"
//     ]
//   }
//   string [
//     {
//       "id": 1,
//       "content": "HTML",
//       "completed": false
//     },
//     {
//       "id": 2,
//       "content": "CSS",
//       "completed": true
//     },
//     {
//       "id": 3,
//       "content": "JavaScript",
//       "completed": false
//     }
//   ]
