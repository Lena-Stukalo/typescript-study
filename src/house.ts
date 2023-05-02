
class Key{
  private signature :number
  constructor (){
    this.signature=Math.random()
  }
  getSignature(): number{
    return this.signature;
  }
}
class Person{
    constructor(private key:Key){}

    getKey():Key{
        return this.key 
    }
}
abstract class House {
    protected door =false
    private tenats:Person[]=[]
    constructor(protected key:Key) {}
    comeIn( tenat:Person):void{
        if(!this.door){
            throw Error('Door is close')
        }
        this.tenats.push(tenat)
        console.log("Person inside")
    }
    abstract openDoor(key:Key):void
}
class MyHouse extends House{
    openDoor(key: Key): void {
        if(key.getSignature()!==this.key.getSignature()){
            throw Error('Wrong key')
        }
        this.door=true;
        console.log('Door open')
    }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);