/* 원형 연결 리스트 (Circular Linked List)
    각 노드가 데이터와 포인터를 가지며, 원형 형태로 연결되어 있는 방식으로 데이터를 저장하는 자료구조이다.
    구현 메서드
    - 노드 개수 / 비어있는지 확인 : size(), isEmpty()
    - 노드 추가 : append(), insert()
    - 노드 삭제 : remove(), removeAt()
    - 데이터 위치 확인 / 노드 출력 : indexOf(), printNode()
*/

// Node() : data와 point를 가지고 있는 객체
function Node(data) {
    this.data = data;
    this.next = null;
}

// LinkedList() : head와 length를 가지고 있는 객체
function CirculerLinkedList() {
    this.head = null;
    this.length = 0;
}

// size() : 연결 리스트 내 노드 개수 확인
CirculerLinkedList.prototype.size = function(){
    return this.length;
}

// isEmpty() : 객체 내 존재 여부 파악
CirculerLinkedList.prototype.isEmpty = function(){
    return this.length === 0;
}

// printNode() : 노드 출력
CirculerLinkedList.prototype.printNode = function(){
    process.stdout.write("head -> ");
    if (this.length != 0){ //최소 요소가 1개 이상인지 체크
        process.stdout.write(`${this.head.data} -> `); //1차적으로 첫번쨰요소 출력
        for (let node = this.head.next; node != this.head; node = node.next){
            process.stdout.write(`${node.data} -> `);
        }   // 첫번쨰 요소 다음 요소부터 head일때까지 (처음요소를 다시 가리킬때까지) 돌기 
    }
    console.log ("null");
}


// append() : 연결 리스트 가장 끝에 노드 추가
CirculerLinkedList.prototype.append = function(value){
    let node = new Node(value),
    current = this.head;

    if (this.head === null){
        this.head = node;
    }
    else{
        while (current.next != this.head){
            current = current.next;
        }
        current.next = node;
    }
    node.next = this.head;
    this.length++;
}


// insert() : position 위치에 노드 추가
CirculerLinkedList.prototype.insert = function (value, position = 0){
    if (position < 0 || position > this.length){
        return false;
    }
    let node = new Node(value),
    current = this.head,    //flag1
    index = 0,              
    prev;                   //flag2

    if (position === 0){
        node.next = current;
        if (this.isEmpty()){
            current = node;
        }
        else{
            while (current.next != this.head){      //원형모양을 만들기위해 업데이트 
                current = current.next;
            }
        }
        this.head = node;
        current.next = this.head;
    }
    else {
        while (index++ < position){
            prev = current;
            current = current.next;
        }
        node.next = current;
        prev.next = node;

        if (node.next === null){
            node.next = this.head;
        }
    }
    this.length++;
    return true;
}


// remove() : value 데이터를 찾아 노드 삭제
CirculerLinkedList.prototype.remove = function(value){
    let current = this.head,    //커랜트가 지울 요소를 가리키는 역할을 한다.
    prev = current,             //프리브는 지운요소를 빼고나서 이어주는 역할을 하는 변수.
    data;                       

    while (current.data != value && current.next != this.head){
        prev = current;
        current = current.next;
    } //커렌트가 가리키는 데이터값과 밸류가 같아질때까지 && 커렌트 다음이 헤드가 가리키는곳(처음)이 아닐떄까지 계속돌리기

    if (current.data != value){
        return null;
    }
    data = current.data;    
    if (current === this.head){             //current가 가리키는곳이 this.head가 가리키는 곳이랑 같다면
        while (current.next != this.head){  //current.next가 가리키는곳이 this.head가 아닐때까지
            current = current.next;         // 커렌트에 = 커렌트.next가 가리키는곳으로 계속 업데에트
        }
        this.head = this.head.next;         // 헤드가 가리키는 곳을 = 헤드가 가리키는 다음요소로 가리키게하기
        current.next = this.head;           // 커렌트가 가리키는 넥스트요소에 지금 헤드가 가리키는 곳을 가리키게하기
    }
    else{
        prev.next = current.next;
    }
    this.length--;
    return data;
}


// removeAt() : position 위치 노드 삭제
CirculerLinkedList.prototype.removeAt = function(position = 0){
    if (position < 0 || position >= this.length){
    return null;
    }
    let current = this.head,
    index = 0,
    prev,
    data;

    if (position === 0){
        data = current.data;
        while (current.next != this.head){
            current = current.next;
        }
        this.head = this.head.next;
        current.next = this.head;
    }
    else{
        while (index++ < position){
            prev = current;
            current = current.next;
        }
        data = current.data;
        prev.next = current.next;
    }
    this.length--;
    return data;
}


// indexOf() : value 값을 갖는 노드 위치 반환
CirculerLinkedList.prototype.indexOf = function(value){
    let current = this.head,
    index = 0;

    do {
        if (current.data === value){
            return index;
        }
        index++;
        current = current.next;
    } while (current != this.head);

    return -1;
}


// remove2() : indexOf + removeAt = remove2
CirculerLinkedList.prototype.remove2 = function (value){
    let index = this.indexOf(value);
    return this.removeAt(index);
}


/* ---------------Test Code------------------ */
let cll = new CirculerLinkedList();

//구현 1
// let node;
// console.log(cll);
// node = new Node(123);
// cll.head = node;
// node.next = cll.head;   // 자기 자신을 가리킴 순환 모양(기존과 다른점 기존은 널을 가리킨다)
// cll.length++;
// console.log(cll);

// node = new Node(456);
// node.next = cll.head.next;
// cll.head.next = node;
// cll.length++;
// console.log(cll);

// 구현 2
// cll.append(1);
// cll.append(10);
// cll.append(100);
// cll.printNode();

// 구현 3
cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.printNode();

cll.insert(2, 1);
cll.insert(3, 3);

// 구현 4
// console.log(cll.remove(1000));
// cll.printNode();
// console.log(cll.remove(1));
// cll.printNode();
// console.log(cll.remove(2));
// cll.printNode();

// 구현 5
// console.log(cll.removeAt(1000));
// cll.printNode()
// console.log(cll.removeAt(1));
// cll.printNode()
// console.log(cll.removeAt(2));
// cll.printNode()

// 구현 6

console.log(cll.indexOf(1000));
console.log(cll.indexOf(1));
console.log(cll.indexOf(10));
console.log(cll.indexOf(100));

console.log(cll.remove2(1000));
cll.printNode();
console.log(cll.remove2(1));
cll.printNode();
console.log(cll.remove2(2));
cll.printNode();