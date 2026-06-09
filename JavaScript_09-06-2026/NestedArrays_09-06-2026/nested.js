//using flat 

let nums =[1,[2,3],[4,5],[6,7],[8,9]];

let flatning = nums.flat(2);

console.log(flatning);

//multiple levels

let num = [1,[2,[3,[4]]]];

let flat = num.flat(2);

console.log(flat);


// using reduce 

let nums1 = [1,[2,3],[4,5],6];

let flaten = nums1.reduce((acc,current)=> acc.concat(current),[]);

console.log(flaten);

// using contact with spread operator 

let nums2 = [1,[2,3],[4,5],6];

let flat1 = [].concat(...nums2);

console.log(flat1);

// using for of 

let number = [1,2,[3,44],[5,6]];

let res = [];

for(let item of number){
    if(Array.isArray(item)){
        res.push(...item)
    }else{
        res.push(item);
    }
}
console.log(res);

//using recursive function

function flatten(arr) {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

const numbers = [1, [2, [3, [4, [5]]]]];

console.log(flatten(numbers));

//using reduce in recursion 

function flaten1(arr){
    return arr.reduce((acc,item)=>{
        return acc.concat(Array.isArray(item)?flaten1(item):item);
    },[]);
}

let numbers2 = [1,[2,3,[4,5,6,[1,3]]]]
console.log(flaten1(numbers2));


// removing duplicates form array 

let num1 = [1,2,3,4,5,6,7,8,9,2,2,4,1,56,7];

let unique = [...new Set(num1)];

console.log(unique);

//using filter

let uniquenum = num1.filter((value,index,array)=>array.indexOf(value)===index);

console.log(uniquenum);

//using reduce 

let uniquenum1 = num1.reduce((acc,current)=>{
    if(!acc.includes(current)){
        acc.push(current);
    }
    return acc;
},[]);

console.log(uniquenum1);


// using for of 

let uniquenum2 = [];

for (let num1 of numbers){
    if(!uniquenum2.includes(num1)){
        uniquenum2.push(num1)
    }
}

console.log(uniquenum2);

// using index of 

console.log(num1.indexOf(5));


//last index of 

console.log(num1.lastIndexOf(7))
console.log(num1.lastIndexOf(144))

// findig duplicates

console.log(num1.indexOf(1))
console.log(num1.lastIndexOf(2))

const employees = [
  { name: "chandra", salary: 50000 },
  { name: "sekhar", salary: 70000 },
  { name: "kcs", salary: 45000 },
  { name: "chanduu", salary: 80000 }
];

//map

let names = employees.map(employee => employee.name);

console.log(names);


// filter 

let hikesal = employees.filter(employee=> employee.salary>50000);

console.log(hikesal)

// reduce 

let totalsal = employees.reduce((sum,employee)=>sum+employee.salary,0);

console.log(totalsal);

