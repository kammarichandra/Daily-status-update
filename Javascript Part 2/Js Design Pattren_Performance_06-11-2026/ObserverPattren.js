
class Subject {

    constructor() {
        // Store all subscribers
        this.subscribers = [];
    }

    // Subscribe an employee
    subscribe(employee) {

        if (this.subscribers.includes(employee)) {
            return `${employee.name} is already subscribed!`;
        }

        this.subscribers.push(employee);

        return `${employee.name} subscribed successfully!`;
    }

    // Unsubscribe an employee
    unsubscribe(employee) {

        const index = this.subscribers.indexOf(employee);

        if (index === -1) {
            return `${employee.name} is not subscribed!`;
        }

        this.subscribers.splice(index, 1);

        return `${employee.name} unsubscribed successfully!`;
    }

    // Notify all subscribers
    notify(message) {

        if (this.subscribers.length === 0) {
            console.log("No employees subscribed!");
            return;
        }

        console.log("\nNew Announcement:", message);

        this.subscribers.forEach(employee => {
            employee.update(message);
        });
    }
}

// Observer class
class Employee {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // Receive notification
    update(message) {

        console.log(
            `Notification sent to ${this.name} (${this.email}): ${message}`
        );
    }
}

// Export classes
export { Subject, Employee };
