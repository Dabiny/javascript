class Animal {
    constructor(age, weight) {
        this.age = age;
        this.weight = weight; 
    }

    eat() { return `eat`; }

    move() { return 'move'; }
}

// 상속을 통해 Animal 클래스를 확장한 Bird 클래스
class Bird extends Animal {
    fly() { return 'fly'; }
}

// 상속을 통해 Animal 클래스를 확장한 Lion 클래스
class Lion extends Animal {
    attack() { return 'attack'; }
}

const bird = new Bird(5, 2);

console.log(bird); // Bird { age: 5, weight: 2 }
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true

console.log(bird.eat()); // eat
console.log(bird.move()); // move
console.log(bird.fly()); // fly
console.log(bird.age); // 5
