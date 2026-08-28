export let User2 = {
    name : "rahul",
    city : "hyd"
}
// objname.propert.?.property
// it will work an obj doesnt have any property it wont display error it will display undefinned or null
export let student = {

    name : "rames",
    address : {
        city : "hyd",
        pincode : 515715
    }

}

// using method call
// syntax : funname.methonamr.?()
export let user3 = {
    greet() {
        console.log("Hello!");
    }
};

