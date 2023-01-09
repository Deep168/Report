class Animal{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    run(){
        console.log(this.name+' is running')
    }
    shout(){
        console.log(this.name+' is shouting')
    }
}

class Monkey extends Animal{
  eatbanana(){
    console.log(this.name+'is eating banana')
  }
 
}
let ani = new Animal('bruno','white')
let m= new Monkey('rockey','orange')

m.shout();
ani.run()
m.eatbanana()