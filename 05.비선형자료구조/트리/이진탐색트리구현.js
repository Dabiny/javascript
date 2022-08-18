// Node(): value left right node저장을 위한 생성자.
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// BinarySearchTree(): 시작 노드인 root를 저장하기 위한 생성자.
function BinarySearchTree() {
    this.root = null;
}

// _inOrderTraverseNode(): 재귀로 트리를 순회하며 중위 순회
BinarySearchTree.prototype._inOrderTraverseNode = function (node, callback) {
    if (node === null) {
        return;
    }

    this._inOrderTraverseNode(node.left, callback);
    callback(node);
    this._inOrderTraverseNode(node.right, callback);
};

// inOrderTraverse(): 중위순회하며 노드 출력
BinarySearchTree.prototype._inOrderTraverse = function (callback) {
   this._inOrderTraverseNode(this.root, callback);
   console.log("end");
};

// _insertNode(): 재귀로 트리르 순회하며 노드 추가 (내부 사용)
BinarySearchTree.prototype._insertNode = function (node, value) {
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

BinarySearchTree.prototype.insert = function(value) {
    this.root = this._insertNode(this.root, value);
};

// _minNode(): 반복문으로 트리를 순회하여 최솟값 노드 탐색
BinarySearchTree.prototype._minNode = function (node) {
    if (node === null) {
        return null;
    }
    while (node && node.left !== null) {
        node = node.left; //최솟값은 트리 맨 왼쪽에 위치해 있음. 
    }
    return node.value;
};

// _maxNode(): 반복문으로 트리를 순회하며 최댓값 노드 탐색
BinarySearchTree.prototype._maxNode = function (node) {
    if (node === null) {
        return null;
    }
    while (node && node.right !== null) {
        node = node.right; // 최댓값은 트리 맨 오른쪽에 위치해있음
    }
    return node.value;
};

// min(): 최솟값 노드 탐색
BinarySearchTree.prototype.min = function () {
    return this._minNode(this.root);
};

// max(): 최대값 노드 탐색
BinarySearchTree.prototype.max = function () {
    return this._maxNode(this.root);
};

// _searchNode(): 재귀로 트리를 순회하여 값을 만족하는 노드 탐색
BinarySearchTree.prototype._searchNode = function (node, value) {
    if (node === null) { //재귀 기저조건
        return false;
    }

    if (node.value === value) {
        return true;
    }
    else if (node.value > value){
        return this._searchNode(node.left, value);
    }
    else if (node.value < value) {
        return this._searchNode(node.right, value);
    }
}

// search(): value 노드 탐색
BinarySearchTree.prototype.search = function(value) {
    return this._searchNode(this.root, value);
};

// _findMinNode(): 반복문으로 트리를 순회하며 최솟값을 보유한 노드 탐색
BinarySearchTree.prototype._findMinNode = function(node) {
    while (node && node.left !== null){
        node = node.left;
    }
    return node;
}

// _removeNode(): 재귀로 트리를 순회하며 값을 만족하는 노드를 찾고 삭제 
BinarySearchTree.prototype._removeNode = function (node, value) {
    if (node === null) return null; //재귀 기저조건

    //내가 찾는 value노드일때
    if (node.value === value) { 
        // 1. 자식노드가 없을 때 (리프노드일때) 기냥 삭제해주면됨
        if (node.left === null && node.right === null) {
            node = null;
        }
        // 2. 1개의 자식노드가 있을때 "I"같은 경우 맨 아래의 H(자식)를 끌어올려주면됨.
        else if (node.left === null) {
            node = node.right;
        }
        else if (node.right === null){
            node = node.left;
        }
        // 3. 2개의 자식노드가 있을때 제일 작은 값 리프노드를 끌어올리면된다. 암기나 끌어올리면 규칙이 꺠지게됨
        else {
            let aux = this._findMinNode(node.right); // 젤 작은 값 찾기
            node.value = aux.value; // 젤 작은값으로 바뀜
            node.right = this._removeNode(node.right, aux.value); // 젤작은값은 이제 부모노드가 됐으니깐 없애줘야함. 
        }
    } else if (node.value > value) { // 노드밸류가 내가찾는 밸류보다 클때 -> 내가찾는 깂이 왼쪽에 있는거임
        node.left = this._removeNode(node.left, value);  
    } else if (node.value < value) { // 노드밸류가 내가찾는 밸류보다 작을때 -> 내가찾는 값이 오른쪽에 있는거임
        node.right = this._removeNode(node.right, value);
    }
    return node;
}

// remove(): 노드 삭제
BinarySearchTree.prototype.remove = function (value) {
    this.root = this._removeNode(this.root, value);
}




let tree = new BinarySearchTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

function printNode(node) {
    process.stdout.write(`${node.value} -> `);
}
// console.log("**** in-order ****");
// tree._inOrderTraverse(printNode);

console.log(tree.root);

// console.log(tree.min());
// console.log(tree.max());

// console.log(tree.search("J") ? "Found J" : "Not found J");
// console.log(tree.search("I") ? "Found I" : "Not found I");



tree._inOrderTraverse(printNode);
tree.remove("H");

tree._inOrderTraverse(printNode);
tree.remove("B");
tree._inOrderTraverse(printNode);