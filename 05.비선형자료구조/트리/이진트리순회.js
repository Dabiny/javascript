/* 
    이진 트리 순회 (Binary Tree Traversal)
    * 각각의 노드가 최대 두개의 자식 노드를 가지는 트리 자료구조를 순회하는 방법.
    
*/

// 전위 순회 (Pre-order)

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

// _insertNode(): 재귀로 트리를 순회하며 노드 추가 (내부트리에서 사용)
// 왼쪽, 오른쪽에 left, right pointer가 비어있다면 추가할 노드를 연결
// 비어있지 않다면 하위 노드에서 다시 비교하도록 넘겨준다.
BinaryTree.prototype._insertNode = function (node, value) {
    //현재값과 비교
    if (node === null){
        node = new Node(value);
    } else if (value < node.value) { //작으면 왼쪽
        node.left = this._insertNode(node.left, value); 
        // 인자 node를 call-by-value로 복사해서 가져왔기때문에 대입하지않고 재귀를 하게 되면 함수를 빠져나갈때 원래대로 돌아가버린다.
        // 그래서 node.left = 주소값을 대입하여 같은 주소를 가리키게 만든다.  
    } else if (value >= node.value) { // 크면 오른쪽
        node.right = this._insertNode(node.right, value);
    }
    return node;
};

// insert(): 노드 추가
BinaryTree.prototype.insert = function (value) {
    this.root = this._insertNode(this.root, value); //this.root는 결국 변하지 않음
};

let tree = new BinaryTree();
tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("E");
tree.insert("G");
console.log(tree);
