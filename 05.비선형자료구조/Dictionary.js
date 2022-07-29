// Dictionaty(): 개체(Entity)를 저장할 생성자
function Dictionary(items = {}){
    this.items = items; //매개변수가없다면 디폴트매개변수인 빈오브젝트를 대입한다.
}

// getBuffer(): 모든 개체(Entity) 반환
Dictionary.prototype.getBuffer = function () {
    return { ...this.items }; //객체형태는 slice로 반환이 되지않아서 스프레드로 반환한다.
}

// clear(): 초기화
Dictionary.prototype.clear = function () {
    this.items = {}; //빈 오브젝트로 반환
}

// size(): 크기 반환
Dictionary.prototype.size = function () {
    return Object.keys(this.items).length; //Object.keys메서드를 써서 아이템 키의 길이 반환 (옵젝형 길이를 반환하는 메서드가따로없음)
}

// -------------- 딕셔너리 고유 기능..? -----------------

// has() : 개체 존재 여부 확인 (key 정보를 배열로 반환) 내가 찾는키 정보가 있는지
Dictionary.prototype.has = function (key) {
    //1
    // return value in this.items;

    //2
    return this.items.hasOwnProperty(key);
};


// set(): 개체(Entity) 추가
Dictionary.prototype.set = function (key, value) {
    this.items[key] = value; // 아이템 오브젝트[key값]에 벨류값을 대입해라
};

// get(): 개체(Entity)의 value 반환
Dictionary.prototype.get = function (key) {
    return this.has(key) ? this.items[key] : undefined;
};

// remove(): 개체(Entity) 삭제
Dictionary.prototype.remove = function (key) {
    if (this.has(key)){ //만약 키가 있다면
        delete this.items[key];
        return true;
    }
    return false;
};


// keys(): 모든 key 값을 배열 형태⭐️⭐️로 반환
Dictionary.prototype.keys = function () {
    return Object.keys(this.items);
};

// values(): 모든 value값을 배열 형태⭐️⭐️로 반환
Dictionary.prototype.values = function () {
    // 방법 1. 직접 배열에 푸시
    // let values = []; //배열
    // for (let k in this.items){
    //     if (this.has(k)){
    //         values.push(this.items[k]);
    //     }
    // }
    // return values;

    // 방법 2. 매서드 활용
    return Object.values(this.items);
};

// each(): 모든 개체 요소에 대해 callback 함수 수행 (:= foreach) 고차함수를 만들어 출력한다.
Dictionary.prototype.each = function (fn) {
    for (let k in this.items){ 
        if (this.has(k)){ //생략해줘도됨 어짜피 포문이 돈다는것은 값이 있다는거니깐..
            fn(k, this.items[k]); //printDictionary(인자1, 인자2) 호출
        }
    }
};

// printDictionary(): 개체 출력 callback함수 
function printDictionary(key, value) {
    console.log(`key: ${key}`);
    console.log(`value: ${value}`);
}

// let dict = new Dictionary({ age: 19, name: "alice" });
// console.log(dict);

// console.log(dict.getBuffer());
// console.log(dict.size());
// dict.clear();
// console.log(dict);


let dict = new Dictionary();
dict.set("age", 19);
dict.set("name", "alice");
console.log(dict);

dict.remove("age");
console.log(dict);
console.log(dict.get("age"));
console.log(dict.get("name"));