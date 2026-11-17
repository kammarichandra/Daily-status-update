function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter();

increment();
increment();
increment();

// bank ACCOUNT


function bankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function(amount) {
            balance += amount;
            console.log("Deposited:", amount);
            console.log("Balance:", balance);
        },

        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log("Withdrawn:", amount);
                console.log("Balance:", balance);
            } else {
                console.log("Insufficient Balance");
            }
        },

        checkBalance: function() {
            console.log("Current Balance:", balance);
        }
    };
}

let account = bankAccount(5000);

account.checkBalance();
account.deposit(2000);
account.withdraw(1000);
account.checkBalance();

// This keyword

const employee = {
    name: "Chandra",
    role: "Software Engineer",

    display() {
        console.log(this.name);
        console.log(this.role);
    }
};

employee.display();

const employeeDetails = {
    name: "Chandra",

    display: () => {
        console.log(this.name);
    }
};

employeeDetails.display();

// call() , apply() , bind()

const employee1 = {
    name: "Chandra"
};

function displayEmployee(city, role) {
    console.log(this.name, city, role);
}

// call()
displayEmployee.call(employee1, "Hyderabad", "Developer");

// apply()
displayEmployee.apply(employee1, ["Bangalore", "Tester"]);

// bind()
const result = displayEmployee.bind( employee1,"Chennai","Software Engineer");
result();