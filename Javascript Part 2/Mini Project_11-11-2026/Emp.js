
export class Employee {
    constructor(id, name, email, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }

    getDetails() {
        return `${this.name} - ${this.role}`;
    }
}
