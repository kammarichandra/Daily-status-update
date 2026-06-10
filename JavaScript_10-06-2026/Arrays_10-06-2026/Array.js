//without using sort method 

function bubblesort(arr){
   
    let n = arr.length;

    for(let i = 0;i<n-1;i++){
     
        let swap = false;

        for(let j =0; j<n-1;j++){
            if(arr[j]>arr[j+1]){

                //swap ele

                let temp = arr[j];

                arr[j] = arr[j+1];

                arr[j+1] = temp;

                swap = true;
            }
        }
        if(!swap){
            break;
        }
    }
    return arr;
}

let num = [64,54,56,56,34,36,67];

console.log(bubblesort(num));

//using for each 

let num1= [10,20,30,40,50];

num1.forEach(function(num1){
    console.log(num1);
});

//using arrow fun 

let fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(fruit => {
    console.log(fruit);
});

//accessing index 

let colors = ["Red", "Green", "Blue"];

colors.forEach((color,index)=>{
    console.log(`${index} ${color}`)
})

//using objects 

let users = [
    {name : "chandra",age : 25},
    {name : "sekhar" , age :36},
    {name : "kcs" , age : 45}
];

users.forEach(user=>{
    console.log(`${user.name} is ${user.age} years old`)
})


// caluclating sum 

let numbers = [1,2,3,4,5,6,6,7];
let sum = 0;

numbers.forEach(element => {
    sum += element;
});

console.log(sum);

// modifying array ele 

let arr1 = [1,2,3,4,5];

arr1.forEach((num2,index,arr)=>{
    arr[index] = num2*2;

});

console.log(arr1);