
const Storage = "employees";

export function getEmployees() {

    return JSON.parse( localStorage.getItem(Storage) ) || [];
    
}

export function saveEmployees(employees) {

    localStorage.setItem( Storage, JSON.stringify(employees) );

}
