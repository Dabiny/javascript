const set = new Set([1, 2, 3]);

// 요소 2를 삭제한다. 
set.delete(2);
console.log(set); //Set(2) { 1, 3 }

// 존재하지 않는 요소 0을 삭제하려고 하면 애러없이 무시된다. 
set.delete(0); 
console.log(set); // const set = new Set([1, 2, 3]);

// 요소 2를 삭제한다. 
set.delete(2);
console.log(set); //Set(2) { 1, 3 }
