// Node(): value left right node저장을 위한 생성자.
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// BinaryTree(): 시작 노드인 root를 저장하기 위한 생성자.
function BinaryTree() {
    this.root = null;
}

// _inOrderTraverseNode(): 재귀로 트리를 순회하며 중위 순회
BinaryTree.prototype._inOrderTraverseNode = function (node, callback) {
    if (node === null) {
        return;
    }

    this._inOrderTraverseNode(node.left, callback);
    callback(node);
    this._inOrderTraverseNode(node.right, callback);
};

// inOrderTraverse(): 중위순회하며 노드 출력
BinaryTree.prototype._inOrderTraverseNode = function (callback) {
    this._inOrderTraverseNode(this.root, callback);
    console.log("end");
};

// _insertNode(): 재귀로 트리르 순회하며 노드 추가 (내부 사용)
BinaryTree.prototype._insertNode = function (node, value) {
    if (node === null) {
        node = new Node(value);
    }
    else if (value < node.value) {
        node.left = this._insertNode(node.left, value);
    }
    else if (value >= node.value) {
        node.right = this._insertNode(node.right, value);
    }
    return node;
};

BinaryTree.prototype.insert = function(value) {
    this.root = this._insertNode(this.root, value);
};

// _minNode(): 반복문으로 트리를 순회하여 최솟값 노드 탐색
BinaryTree.prototype._minNode = function (node) {
    if (node === null) {
        return null;
    }
    while (node && node.left !== null) {
        node = node.left; //최솟값은 트리 맨 왼쪽에 위치해 있음. 
    }
    return node.value;
};

// _maxNode(): 반복문으로 트리를 순회하며 최댓값 노드 탐색
BinaryTree.prototype._maxNode = function (node) {
    if (node === null) {
        return null;
    }
    while (node && node.right !== null) {
        node = node.right; // 최댓값은 트리 맨 오른쪽에 위치해있음
    }
    return node.value;
};

// min(): 최솟값 노드 탐색
BinaryTree.prototype.min = function () {
    return this._minNode(this.root);
};

// max(): 최대값 노드 탐색
BinaryTree.prototype.max = function () {
    return this._maxNode(this.root);
};

let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree.root);

console.log(tree.min());
console.log(tree.max());