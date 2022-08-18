/* 무방향 그래프 */

// Graph(): edge object 객체 저장을 위한 생성자. 
// key -> vertex, value -> list 형태로 연결된 vervex를 표현하여 edge 연결관계 표현
function Graph() {
    this.edge = {};
}

// addVertex(): 정점(vertex)추가
Graph.prototype.addVertex = function (v) {
    this.edge[v] = [];
};

// addEdge() : 간선(edge) 추가
Graph.prototype.addEdge = function (v1, v2) {
    this.edge[v1].push(v2);
    this.edge[v2].push(v1); 
};

// removeEdge(): 간선 삭제
Graph.prototype.removeEdge = function (v1, v2) {
    if (this.edge[v1]) {
        let idx = this.edge[v1].indexOf(v2); // 만약 A 에서 'D'라는 값을 지우게된다면 'D' 인덱스값 가져오기 
        
        if (idx != -1) { // 그 인덱스가 -1이 아니라면 
            this.edge[v1].splice(idx, 1); // 인덱스 특정 제거 
        }
        if (this.edge[v1].length === 0) { // 만약 A배열이 다 비어있다면
            delete this.edge[v1]; // A배열(vertex) 제거
        }
    }

    if (this.edge[v2]) {
        let idx = this.edge[v2].indexOf(v1); // 만약 A 에서 'D'라는 값을 지우게된다면 'D' 인덱스값 가져오기 
        
        if (idx != -1) { // 그 인덱스가 -1이 아니라면 
            this.edge[v2].splice(idx, 1); // 인덱스 특정 제거 
        }
        if (this.edge[v2].length === 0) { // 만약 A배열이 다 비어있다면
            delete this.edge[v2]; // A배열(vertex) 제거
        }
    }
};

// removeVertex(): 정점 삭제
Graph.prototype.removeVertex = function (v) {
    if (this.edge[v] === undefined) return; //인자에서 가져온 정점이 없으면 리턴

    let length = this.edge[v].length; // 인자배열의 길이 가져오기
    let connectedVertex = [...this.edge[v]]; // 인자배열 저장

    for (let i = 0; i < length; i++) { //길이만큼돌면서
        this.removeEdge(v, connectedVertex[i]); // 정점[i]들을 다 해제하기 
    }
};

// sizeVertex(): vertex 개수 반환
Graph.prototype.sizeVertex = function () {
    return Object.keys(this.edge).length;
};

// sizeEdge(): edge개수 반환
Graph.prototype.sizeEdge = function (vertex) {
    return this.edge[vertex] ? Object.keys(this.edge[vertex]).length : 0;
    // 만약 이 edge[인자버텍스]가 있으면 Object.keys를 통해 키값(인자버텍스)들을 알아내서 그 길이를 알아내고 아님 0반환.
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



let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "E");
graph.addEdge("E", "I");
graph.addEdge("B", "F");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.print();

graph.removeEdge("A", "D");
graph.removeEdge("E", "I");
console.log(graph.edge);

graph.print();
console.log("");

