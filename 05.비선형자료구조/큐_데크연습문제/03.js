/* 프린터 출력 */
function Queue(){
    this.array = [];
}
Queue.prototype.enqueue = function (element) {
    this.array.push(element);
};
Queue.prototype.dequeue = function () {
    return this.array.shift();
};
Queue.prototype.front = function () {
    return this.array[0];
};
Queue.prototype.max = function () {
    return Math.max(...this.array); //스프레드 문법 공부하기!!
};

/* user code */
function answer(priorities, select) {
    // 내가 푼 문제 반례 3번이 틀렸음.
    // let result = 0;
    // let print = [];
    // for (let i = 0; i < priorities.length; i++){
    //     let obj = {
    //         priot: priorities[i],
    //         target: i == select ? true : false
    //     };
    //     print.push(obj);
    // }
    // // 우선순위 젤 높은 수 구하기
    // priorities.sort(function(a, b){
    //     return b - a;
    // })

    // //print 순서를 돌면서 인큐 디큐해주기
    // for (let i = 0; i < print.length; i++){
    //     //만약 프린트i의 우선순위가 젤높은 우선순위가 아닐경우 
    //     if (print[i].priot != priorities[0]){
    //         let n = print[i];
    //         print.shift();
    //         print.push(n);
    //     }
    //     // 만약 프린트i의 우선순위가 젤 높은 우선순위 일경우
    //     if (print[i].priot == priorities[0]){
    //         let obj = print[i];    
    //         result++;
    //         priorities.shift();
    //         print.shift();
    //         if (obj.target == true){
    //             break;
    //         }
            
    //     }
    // }
    // return result;

    //해답
    // 1. 큐 내 우선순위가 가장 높으 문서를 확인한다.
    // 2. 그 문서가 나올 때까지, 나머지문서는 -> dequeue -> enqueue (순서를 바꿈)
    // 3. 문서 번호 select를 찾을때까지 계속 반복
    let result = -1;
    let vq = new Queue(); //출력물의 인덱스 저장 나중에 pq랑같이 움직인다.
    let pq = new Queue(); // 출력물의 우선순위 저장
    for (let i = 0; i < priorities.length; i++){
        vq.enqueue(i);
        pq.enqueue(priorities[i]);
    }
    let count = 0;
    while (true){
        //출력부분
        if (pq.front() === pq.max()){
            count++;
            // 확인 필요 문서냐
            if (vq.front() === select){
                result = count;
                break;
            }
            // 다른 문서 제거
            else{
                vq.dequeue();
                pq.dequeue();
            }
        }
        // 순서변경 부분
        else {
            vq.enqueue(vq.dequeue());
            pq.enqueue(pq.dequeue());
        }
    }
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [[3], 0],
  
    // TC: 2
    [[3, 4, 5, 6], 2],
  
    // TC: 3
    [[1, 1, 5, 1, 1, 1], 0],
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1]));
  }