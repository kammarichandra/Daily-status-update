//method call

let person ={

    name : "chandra",
    hello : function(){
        console.log(`heloo ${this.name}`);
    }

}
person.hello();

// same fun using diff objs

function person1(){
    console.log(`my name is ${this.name}`);
}

let user = {
    name : "chandraaa",
    person1
};
let user1 = {
    name : "kcs",
    person1
};

user.person1();
user1.person1();


//extracting method 

let car = {
    brand : "suzuki Baleno",

    showbrand : function(){
        console.log(this.brand)
    }
};

let fun = car.showbrand;
fun();

// method calling in regular function

let person3 = {
    name : "rahul",

    kcs:function(){
        console.log("outer :",this.name);

        function inner(){
            console.log("inner fun :",this.name);
        }
        inner();
    }
};
person3.kcs();

// fixxing inner fun 

let emp3 = {
    name :"ramesh",

    hai : function(){
        let self = this;

        function inner(){
            console.log(self.name)
        }
        inner();
    }
}
emp3.hai();

//barrowing methods with call

let employee ={
    name : "Rohit"
};
function showname(){
    console.log(this.name);
}
showname.call(employee);

//student object

let student = {
    name : "chandra sekar",
    marks : [34,45,7,6],

    avg : function(){
        let total = 0;

        for(let marks of this.marks){
            total += marks;
        }

        console.log(total/this.marks.length);
    }
};
student.avg();
