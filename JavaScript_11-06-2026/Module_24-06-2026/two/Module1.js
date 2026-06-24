
export default function hai(name){

    return ` hello , ${name} !`;
}

export let name = " candra sekhar ";

export function fun(name){

    return `hello ${name}`;
}

export function add1(a,b){

    return a + b;
}

export function add(a,b){

    return a + b;
}

//calculator 

export function add2(a1,b1){

    return a1 + b1;
}

export function mul(a2,b2){

    return a2*b2;
}

export function divide(a3,b3){

    return a3/b3
}

//student grade module 

export function grade(marks){

    if(marks >= 90) return "A";
    if(marks >= 75) return "B";
    if(marks >= 60) return "C";

    return "D";
}

export function celsius(c){

    return (c*9/5) + 32;
}

export function  temp(f){

    return (f-32)*5/9;
}