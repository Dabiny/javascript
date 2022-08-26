// 해시함수 충돌문제 (use loselose algorithm)
const HASH_SIZE = 37;
HashTable.prototype.hashCode = function (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++){
        hash += key.charCodeAt(i);
    } // 아스키코드로 변환해서 한자한자 더해준다.
    return hash % HASH_SIZE; // 더해준값을 사이즈랑 모듈러연산을통해 충돌을 최소화시킨다.
}

let ht = new HashTable();

ht.put("Ana", 172);
ht.put("Donnie", 183);  //collision
ht.put("Jamie", 168);   //collision
//  해시가 충돌되어 두 밸류가 유실된다. (큰 문제)


// 해결법 (dib2 알고리즘) 소수를 이용해 충돌을 방지.
const HASH_SIZE2 = 1013; // 애초에 크게 소수값으로 잡아버린다. (충돌을 방지하기 위해)
HashTable.prototype.hashCodeDib2 = function (key) {
    /* djb2 hash function */
    let hash = 5381; //seed 소수점으로 잡는다.
    for (let i = 0; i < key.length; i++){
        hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % HASH_SIZE2;
}

