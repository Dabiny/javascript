function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype._insertNode = function (node, value) {
    if (node == null) {
        node = new Node(value);
    }   
    else if (value < node.value) {
        node.left = this._insertNode(node.left, value);
    }
    else if (value > node.value) {
        node.right = this._insertNode(node.right, value);
    }
    return node;
};

BinarySearchTree.prototype.insert = function (value) {
    this.root = this._insertNode(this.root, value);
};

BinarySearchTree.prototype._postOrderTraverseNode = function (node, callback) {
    if (node === null) return;

    
    this._postOrderTraverseNode(node.left, callback);
    this._postOrderTraverseNode(node.right, callback);
    callback(node);
}

BinarySearchTree.prototype._postOrderTraverse = function(callback) {
    this._postOrderTraverse(this.root, callback);
}

let tree = new BinarySearchTree();

tree.insert("A");
tree.insert("B");
tree.insert("C");

function printNode(node) {
    process.stdout.write(`${node.value} -> `);
}

console.log(tree);


