/* 이중 연결 리스트 (Double Linked List)
    각 노드가 데이터와 포인터를 가지며, 두 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료구조
    구현 메서드
    - 노드 개수/비어있는지 확인: DoubleLinkedList.size(), DoubleLinkedList.isEmpty()
    - 순차 출력/역 출력: DoubleLinkedList.printNode(), DoubleLinkedList.printNodeInverse()
    - 노드 추가: DoubleLinkedList.append(), DoubleLinkedList.insert()
    - 노드 삭제: DoubleLinkedList.remove(), DoubleLinkedList.removeAt()
    - 데이터 위치 확인: DoubleLinkedList.indexOf()
*/

// Node() : data와 point인 next, prex를 가지고 있는 객체
function Node(data){
    this.data = data;
    this.next = null;
    this.prev = null;
}

// LinkedList(): head, tail과 length를 가지고 있는 객체
function DoubleLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

// size(): 연결 리스트 내 노드 개수 확인
DoubleLinkedList.prototype.size = function(){
    return this.length;
}

// isEmpty(): 객채 내 노드 존재 여부 파악
DoubleLinkedList.prototype.isEmpty = function(){
    return this.length === 0;
}

// printNode(): 노드 정방향 출력
DoubleLinkedList.prototype.printMode = function(){
    process.stdout.write("head -> ");
    for (let node = this.head; node != null; node = node.next){
        process.stdout.write(`${node.data} -> `);
    }
    console.log("null");
}

// printNodeInverse(): 노드 역방향 출력
DoubleLinkedList.prototype.printModeInverse = function(){
    let temp = [];

    process.stdout.write("null <- ");
    for (let node = this.tail; node != null; node = node.prev){
        temp.push(node.data);
    }
    for (let i = temp.length - 1; i >= 0; i--){
        process.stdout.write(`${temp[i]} <- `);
    }
    console.log("tail");
}


// append(): 연결 리스트 가장 끝에 노드 추가
DoubleLinkedList.prototype.append = function(value){
    let node = new Node(value);
    if (this.head === null){
        this.head = node;
        this.tail = node;
    }else{
        this.tail.next = node; //dll tail이 가리키고있는 위치의 넥스트가 해당 노드 가리킴
        node.prev = this.tail; // this.tail이 가리키는 곳을 prev가 가리킴
        this.tail = node; 
    }
    this.length++;
}


// insert(): position 위치에 노드 추가
DoubleLinkedList.prototype.insert = function (value, position = 0){
    if (position < 0 || position > this.length){
        return false;
    }
    let node = new Node(value),
    current = this.head, //c -> this.head (null)
    index = 0,
    prev;

    if (position === 0){
        if (this.head === null){    //dll에 아무것도 없을 경우
            this.head = node;
            this.tail = node;
        }else{       
        node.next = current;
        current.prev = node;
        this.head = node;
        }
    }
    else if (position === this.length){
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
    }
    else{
        while (index++ < position){
            prev = current;
            current = current.next;
        }
        node.next = current;
        prev.next = node;

        current.prev = node;
        node.prev = prev;
    }
    this.length++;
    return true;
}


// remove() : value 데이터를 찾아 노드 삭제
DoubleLinkedList.prototype.remove = function(value){
    let current = this.head,
    prev = current;
    
    while (current.data != value && current.next != null){
        prev = current;
        current = current.next;
    }   // data 밸류값과 넥스트가 널이 아닐때까지 돌면서 current prev 업데이트
    if (current.data != value){
        return null;    // 찾는 값이 업스면 null 반환
    }

    if (current === this.head){     //첫번째 노드인지 확인해주기
        this.head = current.next;
        if (this.length === 1)      // 만약에 길이가 1일경우 tail은 null로 처리
            this.tail = null;
        else
            this.head.prev = null;  // 그렇지않으면 head prev에 null 처리
    }
    else if (current === this.tail){    //만약 끝부분에 걸렸을때에는
        this.tail = current.prev;       // 테일에 이전값을 저장.
        this.tail.next = null;          // tail next에는 null값 저장
    }
    else{
        prev.next = current.next;
        current.next.prev = prev;
    }
    this.length--;
    return current.data;
}


// removeAt(): position 위치 노드를 삭제한다.
DoubleLinkedList.prototype.removeAt = function(position = 0){
    if (position < 0 || position >= this.length){
        return null;
    }
    let current = this.head,
    index = 0,
    prev;
    
    if (position === 0){
        this.head = current.next;
        if (this.length === 1) //요소가 하나밖에 없다면
            this.tail = null;
        else
            this.head.prev = null;
    }
    else if (position === this.length - 1){ //만약 위치가 끝부분이면 
        current = this.tail;
        this.tail = current.prev; // current.prev가 가리키는 곳을 가라킨다.
        this.tail.next = null; // tail.next (테일이 가리키는 넥스트 요소는 널을 가리킨다.)
    }
    else {
        while (index++ < position) {
            prev = current;
            current = current.next;
        }
        prev.next = current.next;
        current.next.prev = prev;
    }
    this.length--;
    return current.data;
}


// indexOf() : value값을 갖는 노드 위치 반환하기
DoubleLinkedList.prototype.indexOf = function(value){
    let current = this.head,
    index = 0;

    while (current != null){
        if (current.data == value){
            return index;
        }
        index++;
        current = current.next;
    }
    return - 1;
}


// remove2() : indexOf + removeAt = remove2
DoubleLinkedList.prototype.remove2 = function(value){
    let index = this.indexOf(value);
    return this.removeAt(index);
}


/*---------------------------------------------------------------*/
let dll = new DoubleLinkedList();
/* 구현 1 */
// let node;
// console.log(dll);

// node = new Node(123);
// dll.head = node;
// dll.tail = node;
// dll.length++;
// console.log(dll);

// node = new Node(456);
// dll.tail.next = node; //dll tail이 가리키고있는 위치의 넥스트가 해당 노드 가리킴
// node.prev = dll.tail;
// dll.tail = node;
// dll.length++;
// console.log(dll);


/* 구현 2 */
// dll.append(1);
// dll.append(10);
// dll.append(100);

// dll.printMode();
// dll.printModeInverse();

/* 구현 3, 4, 5*/
//3
dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.printMode();
dll.printModeInverse();

dll.insert(2, 1);
dll.insert(3, 3);
dll.printMode();
dll.printModeInverse();

//4
console.log(dll.remove(1000));
console.log(dll.remove(1));
console.log(dll.remove(100));
dll.printMode();
console.log(dll.size());

//5
console.log(dll.removeAt(2));
dll.printMode();

//6
dll.insert(1000);
dll.insert(24, 2);
dll.printMode();
console.log(dll.indexOf(1000));
console.log(dll.indexOf(24));
dll.remove2(24);
dll.printMode();