import { Stack } from "../DFS/stack.mjs";
import { Queue } from "./queue.mjs";

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

// -------------------------------------------------------
// _bfsShortesPath(): 다른 정점간 최단경로 비용 산출
Graph.prototype._bfsShortsPath = function (vertex) {
    let queue = new Queue();
    queue.enqueue(vertex);

    let distance = {};
    let pre_visit = {};
    for (let vertex in this.edge) {
        distance[vertex] = 0;
        pre_visit[vertex] = null;
    }

    while(!queue.isEmpty()) {
        let vertex = queue.dequeue();

        this.visited[vertex] = true;
        console.log(`visit "${vertex}"`);

        let neighbors = this.edge[vertex];
        for (let i = 0; i < neighbors.length; i++) {
            if (!this.visited[neighbors[i]]){
                distance[neighbors[i]] = distance[vertex] + 1;
                pre_visit[neighbors[i]] = vertex;
                queue.enqueue(neighbors[i]);
            }
        }
    }

    return { distance, pre_visit };
};

// _from_to_path(): from 정점에서 to 정점으로 최단경로 출력
Graph.prototype._from_to_path = function (pre_visit, from, to) {
    let stack = new Stack();
    for (let v = to; v !== from; v = pre_visit[v]) {
        stack.push(v);
    }
    stack.push(from);
    
    while (!stack.isEmpty()){
        let v = stack.pop();
        process.stdout.write(`${v} -> `);
    }
    console.log("end");
};

// shortestPath(): 다른 정점간 최단경로 탐색
Graph.prototype.shortestPath = function (startVertex) {
    let result = this._bfsShortsPath(startVertex);

    console.log(result.distance);
    console.log(result.pre_visit);

    for (let vertex in this.edge) {
        if (vertex === startVertex) continue;
        this._from_to_path(result.pre_visit, startVertex, vertex);
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
console.log(graph.edge);
console.log("");
graph.shortestPath("A");