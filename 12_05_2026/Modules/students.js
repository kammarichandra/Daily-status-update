
export let students = [];

export function addstudent(name,marks){
    students.push({
        name,
        marks
    })
}