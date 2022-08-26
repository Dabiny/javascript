/* 미로 찾기 */
function Node (x, y, c) { //x축, y축, 최단경로 count
    this.x = x;
    this.y = y;
    this.c = c;
}

function Queue() {
    this.array = [];
}
Queue.prototype.enqueue = function (elem) {
    this.array.push(elem);
};
Queue.prototype.dequeue = function (elem) {
    return this.array.shift();
};
Queue.prototype.isEmpty = function () {
    return this.array.length === 0;
};

/* user code */
function answer(input) {
    let result = -1;
    let size = input.length;
    let dir = [[1, 0], [0, -1], [-1, 0], [0, 1]]; //이런식으로 상하좌우를 만든다.

    // 문자열 -> map이란 배열에 (0, 1정수로 바꾸기) 2차원배열 만들기
    let map = [];
    for (let i = 0; i < size; i++) {
        map[i] = [];
        for (let j = 0; j < size; j++) {
            map[i][j] = Number(input[i][j]);
        }
    }
    // 시작과 끝 설정
    let s = [0, size - 1];
    let e = [size - 1, 0];

    // 시작 -> Queue
    let q = new Queue();
    q.enqueue(new Node(s[0], s[1], 1)); //노드를만들어서 여러개의 데이터를 한꺼번에저장한다.

    // Queue 순회 하면서 끝이면 break
    // while(큐 값이 있을때까지 돈다. dx, dy 활용) 
    while (!q.isEmpty()){
        let v = q.dequeue();

        // 맵 안에 있는 좌표값인지 확인. 이미 방문했는지없는지 또는 벽인지
        if (v.x < 0 || v.x >= size || v.y < 0 || v.y >= size) continue;
        if (map[v.y][v.x]) continue;

        // v == ㅡ끝이면 포인트 break;
        if (v.x == e[0] && v.y == e[1]) {
            result = v.c;
            break;
        }
        map[v.y][v.x] = 1; //visited배열을 만드는대신 벽을쳐준다.

        // map <- 방문처리 인접한길을 큐에 너허준다. 
        for (let i = 0; i < 4; i++) {
            //벽도 일단 넣어준다.
            q.enqueue(new Node(v.x + dir[i][0], v.y + dir[i][1], v.c + 1));
        }

    }
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    ["00110", "00010", "00110", "00000", "01011"],
    // TC: 2
    ["00110", "00010", "00110", "00010", "01011"],
    // TC: 3
    [
      "1111111100",
      "1111111101",
      "1111111101",
      "1000111101",
      "1010111101",
      "1010011101",
      "1011011101",
      "1011011101",
      "1011000001",
      "0011111111",
    ],
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
  }