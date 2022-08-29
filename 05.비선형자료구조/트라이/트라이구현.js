// TrieNode(): 문자값과 단어 여부값 저장을 위한 노드 생성자
function TrieNode() {
    this.children = {}; //obj내에 딕셔너리구조로 c: {child형태로}그려나갈것임
    this.endOfWord = false; //끝지점인지 아닌지 체크
}

// Trie(): 노드의 시작인 루트 노드 저장을 위한 생성자.
function Trie() {
    this.root = new TrieNode();
}

// insert(): 문자열을 추가
Trie.prototype.insert = function (word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
        let ch = word[i];
        let node = current.children[ch];

        if (node === undefined) { //노드안에 아무것도없다면 c a n일때 c만 넣고 a를 넣으려고할때 아무것도 없음 그때얘기하는것
            node = new TrieNode();
            current.children[ch] = node;
        }

        current = node;
    }

    current.endOfWord = true; //그림의 주황색 표시
};

// delete(): 문자열 삭제
Trie.prototype.delete = function (word, current = this.root, index = 0){
    if (index === word.length) {
        if (!current.endOfWord) return false;

        current.endOfWord = false;
        return Object.keys(current.children).length === 0;
    }

    let ch = word[index];
    let node = current.children[ch];

    if (node === undefined) return false;

    let isDeleteNode = this.delete(word, node, index + 1) && !node.endOfWord;

    if (isDeleteNode) {
        delete current.children[ch];
        return Object.keys(current.children).length === 0;
    }
    return false;
};


// search(): 문자열 검색
Trie.prototype.search =  function (word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
        let ch = word[i];
        let node = current.children[ch];

        if (node === undefined) {
            return false;
        }
        current = node;
    }
    return current.endOfWord;
};

let trie = new Trie();

trie.insert("be");
trie.insert("bee");
trie.insert("cat");
trie.insert("can");
trie.insert("cd");

console.log(trie.root);
console.log(trie.root.children["c"]);

trie.delete("bear");
console.log(trie.search("bee"));
trie.delete("bee");
console.log(trie.search("bee"));

trie.delete("b");
console.log(trie.search("b"));

console.log(trie.root.children["b"]);
console.log(trie.root.children["b"].children["e"]);