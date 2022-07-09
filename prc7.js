// /*
//     Collection
//     구조 혹은 비구조화 형태로 프로그래밍 언어가 제공하는 값을 담을 수 있는 공간이다.
//     자바스크립트에서 제공하는 collection
//     */

// /* Keyed Collection - Map 
//     다양한 자료형의 key를 허용하고, key- value 형태의 자료형을 저장 가능할 수 있는 Collection
//     Map은 Object대비 비교하면 다양한 key의 사용을 허용하고, 값의 추가/삭제 시 메서드를 통해 수행이 필요하다.
//     - 대표속성(property) 및 메서드(method)
//     * 생성자: new Map()
//     * 개수확인: Map.size
//     * 요소추가: Map.set(key, value)
//     * 요소접근: Map.get(key)
//     * 요소삭제: Map.delete(key)
//     * 전체삭제: Map.clear()
//     * 요소 존재 여부 확인: Map.has(key)
//     * 그 밖의 메서드: Map.keys(), Map.values(), Map.entries()
// */

// /* 요소 추가/삭제
//     다양한 자료형을 key로 사용가능하며, map.set 호출시 map이 반환되므로 체이닝(chaining)가능
//     */
// let map = new Map();
// map.set("name", "john"); //string key
// map.set(123, 456); // number key
// map.set(true, "bool_type")//bool key

// console.log(map); //Map(3) { 'name' => 'john', 123 => 456, true => 'bool_type' }
// console.log(map.get(123));
// console.log(map.get("name"));
// console.log(map.size);

// //chaining
// map.clear();
// console.log(map);
// map.set("name", "alice").set(123, 789).set(false, "bool_type");
// // 한구문이 리턴되면 map반환 .set 또반환map.set.또반환map.set...이처럼 연달아 쓸수 있다.
// console.log(map);

// /* Map 반복문
//     Collection 객체인 Map이 가지고 있는 iterator속성을 이용하여 for...of 구문을 통해 반복문 수행가능
//     c++ 의 범위 포문같은 존재이다.
//     */
// let recipe_juice = new Map([
//     ["strawberry", 50],
//     ["banana", 100],
//     ["ice", 150],
// ]);
// for (let i of recipe_juice.keys())
//     console.log(i);
// for (let i of recipe_juice.values())
//     console.log(i);
// for (let i of recipe_juice)
//     console.log(i);

// console.log(recipe_juice);
// let recipe_juice_obj = Object.fromEntries(recipe_juice);
// console.log(recipe_juice_obj);

// let recipe_juice_kv = Object.entries(recipe_juice_obj);
// console.log(recipe_juice_kv);

// let recipe_juice_map = new Map(recipe_juice_kv);
// console.log(recipe_juice_map);
// /*  Map <-> Object 변환 
//     Object.entries(object), fromentries(map)를 통해 Map과 Object간 변환이 가능하다.
// */
// console.log("\n");
// /*  Set
//     - value만을 저장하며 중복을 허용하지 않는 Collection
//     - 대표 속성(property)및 메서드
//         * 생성자: new set()
//         * 개수확인: Set.size
//         * 요소 추가: Set.add(value)
//         * 요소 삭제: Set.delete(value)
//         * 전체 삭제: Set.clear()
//         * 요소 존재 여부 확인: Set.has(key)
//         * 그 밖의 메서드: Set.keys(), Set.values(), Set.entries()
// */

// /* 요소 추가/삭제 */
// let set = new Set();
// let num = new Set([1, 2, 3, 4, 5]);
// let str = new Set("Hello!");

// console.log(set);
// console.log(num);
// console.log(str); //중복된값은 제거되서 helo!만 저장됨

// set.add(1).add(1).add(10).add(20);
// //set.add호출시 set이 반환되므로 체이닝가능
// console.log(set); //1 하나는 제거된채로 저장됨

// console.log(set.has(10)); //10이 있는가?
// console.log(set.has(2)); //2가 있는가?

// set.delete(1); //1제거 삭제되면 ture
// set.delete(-1); // -1제거 삭제되지않으면 false
// console.log(set); 

// /* for은 map과 똑같음 */
