export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function multiply(a,b){
    return a*b;
}

export function divied(a,b){
    return a/b;
}

export function getusers(){

    let obj ={
        name : "chandra",
        age : 22,
        gender : "male",
    }
    return obj;
}

export function employee() {

  return new Promise((resolve) => {

    setTimeout(() => {

      let obj1 = {
        empname: "chandra sekhar",
        empid: 101,
        role: "ase",
        sal: 15000
      };

      resolve(obj1);

    }, 2000);

  });
  
}