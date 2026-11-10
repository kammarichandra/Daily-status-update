import DatabaseConnection from "./DatabaseConnection.js";

// Create first instance
const db1 = new DatabaseConnection();

// Create second instance
const db2 = new DatabaseConnection();

// Create third instance
const db3 = new DatabaseConnection();

// Check whether all instances are the same
console.log(db1 === db2);
console.log(db2 === db3);

// Connect Database
console.log(db1.connect());

// Check status
console.log(db1.getStatus());

// Access connection using second instance
console.log(db2.getStatus());

// Disconnect Database
console.log(db2.disconnect());

// Check status using third instance
console.log(db3.getStatus());
