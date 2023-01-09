class Employee{
    constructor(name){
       this.name=name;
       console.log('Emplouyees constructor is here')
    }
   login(){
    console.log('Employee are loggesd')
   }
   logout(){
    console.log('Employee are logged out')
   }
   Requestedleaves(leaves){
    console.log(`Employee are Requesteed ${leaves} leaves` )
   }
}
class Programmer extends Employee{

    constructor(name){
        super(name)
        this.name=name;
        console.log('This is a new written Constructor')
    }

    Requestedleaves(leaves){
  super.Requestedleaves(4)
  
console.log(`one extra leave is granted`)
   //      console.log(`Employee are Requesteed ${leaves +1} leaves (one extra leaves)`)
   }
}
let e = new Employee()
let e1 =new Programmer()
e.login();
e1.login()
e1.Requestedleaves(4)


// import and Export

const message = () => {
   const name = "Jesse";
   const age = 40;
   return name + ' is ' + age + 'years old.';
   };
   
   export default message;