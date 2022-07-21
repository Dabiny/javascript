// 인강 다시보고 풀기!!!!

/* user code */
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function LinkedList() {
    this.head = null;
    this.length = 0;
  }

  LinkedList.prototype.append = function(value){
    let node = new Node(value),
    current = this.head;
    if (this.head == null)
        this.head = node;
    else{
        while (current != this.head)
            current.current.next;
        current.next = node;
    }
    node.next = this.head;
    this.length++;
  }
  
  LinkedList.prototype.remove = function(value){
    let current = this.head,
    prev = current,
    data;
    while (current.data != value && current.next != this.head){
        prev = current;
        current = current.next;
    }
    if (current.data != value){
        return null;
    }
    data = current.data;
    if (current = this.head){
        while (current.next != this.head){
            current.current.next;
        }
        this.head = this.head.next;
        current.next = this.head;
    }
    else{
        prev.next = current.next;
    }
    this.length--;
  }

  function answer(n, m, k) {
    let result = [];
    let ll = new LinkedList();
    for (let i = 1; i <= n; i++){
        ll.append(i);
    }
    ll.remove(m);
    while (ll.length != 0){

    }
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [8, 2, 3],
  
    // TC: 2
    [10, 2, 3],
  
    // TC: 3
    [20, 5, 7],
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1], input[i][2]));
  }