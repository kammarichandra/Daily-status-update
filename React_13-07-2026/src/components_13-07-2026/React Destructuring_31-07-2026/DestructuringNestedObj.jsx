let student = {
  name: "Chandra",
  address: {
    city: "Hyderabad",
    state: "Telangana"
  }
};

let {
  name,
  address: { city, state }
} = student;

console.log(name);
console.log(city);
console.log(state);