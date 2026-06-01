let num = -5;
let result = (num >= 0) ? "positive" : "negative";

console.log(result);

// using if else 
let num1 = -5;
let res;
if (num >= 0) {
    res = "positve"
} else {
    res = "negative";
}
console.log(res);

// findig large 

let a = 10;
let b = 23;

let max = (a > b) ? a : b;

// checking if else 
let a1 = 10;
let b2 = 23;
let max1;

if (a1 > b2) {

    max1 = a1;
} else {
    max1 = b2
}
console.log(max1)

// even or odd 

let num2 = 12;

let res1 = (num2%2===0)?"even":"odd";

// if else 

    let num3 = 12;

    let res2 ;

    if(num3 % 2 === 0 ){
        res2 = "even";
    }else{
        res2 = "odd";
    }
    console.log(res2);

    // check vote elegible

    let age = 23;

    let result1 = (age>=18)?"elegible for vote":"not elegible";

    //if else

        let age1 = 23;

        let result2 ;

        if(age1>=23){
            result2 = "elegible for vote";
        }else{
            result2 = "not elegible";
        }

        console.log(result2)

        // pass or fail

        let marks = 45;

        let r = (marks>=35)?"pass":"fail";

        console.log(r);

        //vowels check

        let ch = "i";

        let r1 = "aeiou".includes(ch)?"it is a vowel":"not an vowel";
        console.log(r1);

        //nested ternary 

        let marks1 = 78;

        let grade = (marks1>=90)?"A":
                    (marks1>=85)?"B":
                    (marks1>=70)?"C":"D";

                    console.log("Grade :",grade)


    // leap year 
    
    let year = 2026;

    let result3 = ((year % 4 === 0 && year % 100 !== 0)||(year % 400 === 0 ))?"leap year":"not a leap year";

    console.log(result3);