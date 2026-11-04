
// Counter Module

function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
            return count;
        },

        decrement() {
            count--;
            return count;
        },

        reset() {
            count = 0;
            return count;
        },

        getCount() {
            return count;
        }
    };
}

// User Session Module

function createUserSession(username) {

    const counter = createCounter();

    return {
        username: username,
        isLoggedIn: false,

        login: function () {
            this.isLoggedIn = true;

            console.log(this.username, "logged in");
        },

        incrementCounter: function () {
            if (!this.isLoggedIn) {
                console.log("Please login first");
                return;
            }

            console.log("Counter:", counter.increment());
        },

        decrementCounter: function () {
            if (!this.isLoggedIn) {
                console.log("Please login first");
                return;
            }

            console.log("Counter:", counter.decrement());
        },

        showCounter: function () {
            console.log("Current Counter:", counter.getCount());
        },

        logout: function () {
            this.isLoggedIn = false;

            counter.reset();

            console.log(this.username, "logged out");
            console.log("Counter reset successfully");
        }
    };
}

// Create User
const user = createUserSession("Chandra");

// Login
user.login();

// Counter Operations
user.incrementCounter();
user.incrementCounter();
user.incrementCounter();

user.showCounter();

// Decrement
user.decrementCounter();

// Logout
user.logout();

// Try after logout
user.incrementCounter();