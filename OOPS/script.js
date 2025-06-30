//oops
//class -> template of properties and methods
//static -> common variables/ can be accessed using class name

//base class / parent class / superclass
class User{
    static totaluser = 0;
    constructor(name, age){
        //instance variable
        this.name = name
        this.age = age
        User.totaluser++
    }
    login(){
        console.log("Hi " + this.name +" you are logged in")
    }
    logout(){
        console.log("Thank you " + this.name + " you are logged out")
    }
}

let user1 = new User("Godson",21)
user1.login()
let user2 = new User("Jackson",22)
user2.logout()
let usercount = User.totaluser
console.log(usercount)

//derived / sub class / child class
class Paiduser extends User{
    constructor(name,age){
        super(name,age)
        this.msg = 100
    }
    message(){
        console.log(this.name+', you have 100GB free')
    }
    //overriding -> overrides the parent method
    login(){
        console.log(this.name + " Thank you")
        return this //for method chaining
    }
}

let paiduser1 = new Paiduser("Anu",22)
paiduser1.login() //calling parent mrthod via child 
paiduser1.message()

//method chaining
paiduser1.login().message()   //you have to gibe return this in login() method

//get and set -> for geeting and setting the value
class Temperature{
    constructor(temp){
        this._temp = temp   //_temp -> private variable to not get accesed outside the class for our reference
    }
    get temp(){
        return this._temp // or `${this.temp} celsius`
    }
    set temp(temp){
        if(temp>100)
            temp = 100
        this._temp = temp
    }
}

let temp1 = new Temperature(25)
console.log(temp1._temp)  // this also works, but its not correct way, because we taken the variable as private
console.log(temp1.temp)   // this is the correct way to accesss the private variable

let temp2 = new Temperature()
temp2.temp = 150
//temp2._temp = 200  // instead of 100 it gives 200 as output, so its not a proper way
console.log(temp2.temp)

//accessing car class from another file by module method
import Car, { fillGas, repair } from "./car.js";
let car1 = new Car()
car1.drive()
repair()
fillGas()
