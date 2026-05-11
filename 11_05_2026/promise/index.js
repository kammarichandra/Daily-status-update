
//promise chaining and error handling 

function step1() {
    return Promise.resolve("step 1 verification completed");
}
function step2(message) {
    return Promise.resolve(`${message} -> step2 verification completed`);
}
function step3(message) {
    return Promise.resolve(`${message} -> step3 verification completed`);
}

step1()
    .then(step2)
    .then(step3)
    .then(result => console.log(result))
    .catch(error => console.error(error));


// step 1 login user 

function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        console.log("checking user credentials..");

        setTimeout(() => {
            if (username === "chandra" && password === "1234") {
                resolve({
                    id: 1,
                    name: "chandra"
                });
            } else {
                reject("invalid credentials");
            }
        }, 1000);
    });
}

// step 2 get user oders 

function getOrders(userid) {

    return new Promise((resolve, reject) => {
        console.log("fetching user orders..");

        setTimeout(() => {
            if (userid == 1) {
                resolve([
                    "pizza",
                    "burger",
                    "ice cream"
                ]);
            } else {
                reject("orders not found")
            }
        }, 2000)
    })

}

// step 3 paymenet process

function makepayment(amount) {
    return new Promise((resolve, reject) => {
        console.log("processing payment..");

        setTimeout(() => {
            if (amount > 0) {
                resolve("payment successfull")
            } else {
                reject("payment failed")
            }
        }, 2000)
    })
}


//promise chaining 

loginUser("chandra", "1234").then((user) => {
    console.log("login succsess")
    console.log(user);

    return getOrders(user.id)
})

    .then((orders) => {
        console.log("order recevied");
        console.log(orders);

        return makepayment(500);
    })
    .then((paymentMessage) => {
        console.log(paymentMessage);
    })
    .catch((error) => {
        console.log("error", error)
    })
    .finally(() => {
        console.log("payment procces completed")
    });

const outputEl = document.getElementById('output');
const append = text => {
    outputEl.textContent += text + '\n';
};

const originalLog = console.log.bind(console);
const originalError = console.error.bind(console);

console.log = (...args) => {
    append(args.join(' '));
    originalLog(...args);
};
console.error = (...args) => {
    append('ERROR: ' + args.join(' '));
    originalError(...args);
};


