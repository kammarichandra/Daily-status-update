
export class Task {
    constructor(id, name, employeeId) {
        this.id = id;
        this.name = name;
        this.employeeId = employeeId;
        this.status = "Pending";
    }

    completeTask() {
        this.status = "Completed";
    }
}
