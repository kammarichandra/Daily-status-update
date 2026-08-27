class dog{

    diver(){
        console.log("driver is comming...")
    }
    dog1(){
        console.log("dog is barking..")
    }
}

let car = new dog();
let animal = new dog();

car.diver();
animal.dog1();


// constructor

class car1{

    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

}

let driver = new car1("chandra" , 23 , "male");

console.log(driver.name)
console.log(driver.age)
console.log(driver.gender)
console.log(driver)

//methods

class car2{

    constructor(name){
        this.name = name;
    }

    sayhello(){
        console.log(` hi ${this.name} welcome to nyb`);
    }

    bye(){
        console.log(` bye ${this.name}  take care`)
    }
}

let friend = new car2("chandra");

friend.sayhello();
friend.bye();


//inhertence

class Animal{

    eat(){
        console.log("animal is eating bone..")
    }

}

class cat extends Animal{
    bark(){
        console.log("cat is barking");
    }
}

let cat1 = new cat();

cat1.eat();
cat1.bark();

// encapsulation 

class BanckAccount{

    balance = 0;

    deposit(amount){
        if(amount>0){
            
            this.balance += amount
        }
    }

    getbalance(){
        return this.balance;
    }

}

let Account = new BanckAccount();

Account.deposit(1000);

console.log(Account.getbalance());

// super()

class parent{

    constructor(name,age){
        this.name = name;
        this.age = age
    }

    hi(){
        console.log(`hi my name is ${this.name} and iam ${this.age} old`)
    }
}

class child extends parent{

    constructor(name,age,phone,city){
        super(name,age)
        this.phone = phone;
        this.city = city;
        this.age = age;
    }

}

let person = new child("chandra",23,"12345678","atp");

console.log(person.name);
console.log(person.phone);
console.log(person.city);

person.hi();