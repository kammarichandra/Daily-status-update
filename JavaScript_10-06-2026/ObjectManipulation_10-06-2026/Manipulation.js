

let student = {
    name : "chandra",
    age : 22,
    marks :68,

    display(){
        console.log(`${this.name}`);
        console.log(`${this.age}`);
        console.log(`${this.marks}`);
    },

    updatedetails(newMarks){
        this.marks = newMarks;
    }
};
student.display();
student.updatedetails(99);
console.log("updated marks :",student.marks);

//manipulating obj

let emp ={
    empname : "chandra",
    emprole : "ase",
    sal : 23333,
    dept : "it"
};

//adding 
emp.city = "atp";

//updating 
emp.sal = 20000;

//deleting 

delete emp.emprole;

console.log(emp);


//bank account 

let account = {
    name : "chandra",
    balance : 30000,

    deposite(amount){
        this.balance += amount;

        console.log(`deposited ${amount}`)
    },

    withdraw(amount){
        if(amount<=this.balance){
            this.balance -= amount;
            console.log(`withdraw ${amount}`);
        }
    },

    checkbalance(amount){
        console.log(`balance : ${this.balance}`);
    }
};
account.deposite(10000);
account.withdraw(2000);
account.checkbalance();

//using loop 

let car = {
    brand : "tayota",
    price : 300000,
    mode : "zxi"
};
for(let key in car){
    console.log(`${key} : ${car[key]}`)
}

// using nested obj 

let person = {
    name : "chandra",
    address : {
        city : "hyd",
        state : "telangana"
    },
    getlocation(){
        return `${this.address.city} , ${this.address.state}`
    }
}
console.log(person.getlocation());