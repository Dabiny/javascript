// Node(): data와 point를 가지고 있는 객체
function Node(data){
    this.data = data;
    this.next = null;
}

// LinkedList(): head와 length를 가지고 있는 객체
function LinkedList() {
    this.head = null;
    this.length = 0;
}

// printNode(): 노드 출력
LinkedList.prototype.printNode = function(){
    for (let node = this.head; node != null; node = node.next){
        process.stdout.write(`${node.data} -> `); //연속적으로 개행없이 붙게되는 출력문
    }
    console.log("null");
};

// append(): 연결리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function(value){
    let node = new Node(value),     // 노드 새로 추가
    current = this.head;            // 

    if (this.head === null){
        this.head = node;           // 만약 
    }
    else{
        while (current.next != null){
            current = current.next;
        }
        current.next = node;
    }
    this.length++;
};

let lll = new LinkedList();
lll.append(1);
lll.append(10);
lll.append(100);

lll.printNode();

