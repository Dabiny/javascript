/* 스택 (Stack) ADT : 추상컨셉 컨테이너
    나중에 넣은 데이터가 먼저 나오는 LIFO 기반의 선형 자료 구조
    구현 메서드
    - 데이터 전체 획득 / 비어있는지 확인 : getBuffer(), Stack.isEmpty()
    - 추가 / 삭제 / 마지막 데이터 조회 / 크기 확인 : Stack.push(), pop(), peak(), size()
    - 데이터 위치 / 존재 여부 확인 : indexOf(), includes()
*/

// Stack() : 생성자 함수로 초기 데이터를 설정해준다.
function Stack(array){
    this.array = array ? array : [];    // 인자에 어레이가 들어왔으면 this.array에 대입시켜주고, 들어오지않았다면 빈배열 만들기.
}

// getBuffer() : 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function () {
    return this.array.slice();
}


// isEmpty() : 객체 내 데이터 존재 여부 파악
Stack.prototype.isEmpty = function () {
    return this.array.length == 0;
}


// push() : 데이터 추가
Stack.prototype.push = function(element){
    return this.array.push(element);
}

// pop() : 데이터 삭제
Stack.prototype.pop = function(element){
    return this.array.pop(element);
}

// peek() : 가장 끝 데이터 반환
Stack.prototype.peek = function(){
    return this.array[this.array.length - 1];
}

// size() : 스택 내 데이터 개수 확인
Stack.prototype.size = function() {
    return this.array.length;
}

// indexOf() : 데이터 위치 값 조회 매개변수로 넘어온 element 위치 확인
Stack.prototype.indexOf = function(element, position = 0){
    /* case 1 */
    //return this.array.indexOf(element, position);

    /* case 2 */
    for (let i = position; i < this.array.length; i++){
        if (element == this.array[i])
            return i;
    }
    return -1;
}

// isIndexOf(): 데이터 존재 여부 확인 
Stack.prototype.isIndexOf = function (element,position = 0){
    /* case 1 */
    //return this.array.includes(element, position);

    /* case 2 */
    for (let i = position; i < this.array.length; i++){
        if (element == this.array[i])
            return true;
    }
    return false;
}

/* Code */
let stack = new Stack([1, 2, 3]);

// 구현 1
// console.log(stack);

// let data = stack.getBuffer();
// console.log(data === stack.array); //실제 값은 복사되었구나 하고 알 수 있음. 
// console.log(data);

// console.log(stack.isEmpty());
// console.log(Object.getOwnPropertyDescriptors(Stack.prototype));

// 구현 2
// stack.push(3);
// console.log(stack);

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.size());


// 구현 3
console.log(stack.indexOf(1));      // 0부터 찾기때문에 찾을 수 있음
console.log(stack.indexOf(1, 2));   // 위치를 못찾아서 -1
console.log(stack.isIndexOf(1, 2)); // 요소 1이 인덱스2에 위치해 있는지


