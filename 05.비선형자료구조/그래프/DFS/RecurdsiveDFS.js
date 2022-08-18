function Graph() {
    this.edge = {};
    this.visited = {}; //방문도장obj 만들기
}
// addVertex(): 정점(vertex)추가
Graph.prototype.addVertex = function (v) {
    this.edge[v] = [];
    this.visited[v] = false;
};
// addEdge() : 간선(edge) 추가
Graph.prototype.addEdge = function (v1, v2) {
    this.edge[v1].push(v2);
};

// print(): 현재 Graph 연결 상태 출력
Graph.prototype.print = function () {
    for (let vertex in this.edge) {
        let neighbors = this.edge[vertex]; // 버텍스의 배열 저장해놓기 ["B", "C"] 이렇게
        if (neighbors.length === 0) continue;

        process.stdout.write(`${vertex} -> `); // A ->
        for (let j = 0; j < neighbors.length; j++) {
            process.stdout.write(`${neighbors[j]} `); // A -> B C
        }

        console.log(""); //개행
    }
};

// ------------------------------------------------------

// dfs() : DFS 탐색
Graph.prototype.dfs = function (startVertex) {
    this._dfsRecursiveVisit(startVertex);
};

// _dfsRecursiveVisit(): 재귀를 이용한 DFS 탐색
Graph.prototype._dfsRecursiveVisit = function (vertex) {
    if (this.visited[vertex]) {
        return;
    }

    this.visited[vertex] = true; //방문도장 찍기
    console.log(`visit "${vertex}"`);

    let neighbors = this.edge[vertex];
    for (let i = 0; i < neighbors.length; i++) {
        this._dfsRecursiveVisit(neighbors[i]);
    }
};

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (let i = 0; i < vertices.length; i++){
    graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

graph.print();
console.log("");

graph.dfs("A"); // A부터 시작