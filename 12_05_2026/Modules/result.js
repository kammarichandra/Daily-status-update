
export function getGrade(marks){
    if(marks>=90){
        return "A"
    }
    else if(marks>=70){
        return "B"
    }
    else if(marks>=50){
        return "C"
    }
    else{
        return "Fail"
    }
}