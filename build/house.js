"use strict";
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenats = [];
    }
    comeIn(tenat) {
        if (!this.door) {
            throw Error('Door is close');
        }
        this.tenats.push(tenat);
        console.log("Person inside");
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw Error('Wrong key');
        }
        this.door = true;
        console.log('Door open');
    }
}
const key = new Key();
const notKey =new Key();
const house = new MyHouse(key);
const person = new Person(key);
const notPerson= new Person(notKey)
house.openDoor(person.getKey());
house.comeIn(person);
house.openDoor(notPerson.getKey());
house.comeIn(notPerson);
//# sourceMappingURL=house.js.map