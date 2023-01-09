 //class
 class Car {
        
    //constructor
constructor(name, year) {
this.name = name;
this.year = year;
}
//class Method
age() {
let date = new Date();
return date.getFullYear() - this.year;
}
}

//static Method and properties
class Person{
static name="john";
static height="160";

static getUserinfo(){
    console.log('My name is '+this.name+'and my height is '+this.height);
}
static setUserinfo(value){
   this.height=value;
}
}

Person.getUserinfo();
Person.setUserinfo(300);

// creating object of class
let myCar = new Car("Ford", 2014);
// let myCar2 = new Car("Audi", 2019);

// document.getElementById("demo").innerHTML =
// "My car is " + myCar.age() + " years old.";
console.log(myCar.age())


// getter and setter

class Animal{
    constructor(name){
        this.name=name;
        
    }
    run(){
        console.log(this.name+' is running')
    }
    get name(){
     return this._name   
}
 set name(Newname){
    return this.name;
 }
}

class Monkey extends Animal{
    eatbanana(){
      console.log(this.name+'is eating banana')
    }
   
  }

 let a = new Monkey('montus')
 a.run()
 console.log(a.name)
 a.name='john'
 console.log(a.name)

 let c=56;
 console.log(a instanceof Animal)
 console.log(a instanceof Monkey)
 console.log(c instanceof Animal)