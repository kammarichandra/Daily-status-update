

//iterator 

let num = [12,23,45,56,6,67];

let iterator = num[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// costom iterator 

let counter = {

    start : 1,
    end : 5,

    [Symbol.iterator](){

        let current = this.start;
        let end = this.end;

        return {

            next(){

                if(current <= end){

                    return {
                        value : current++,
                        done : false
                    }
            }

            return {

                done : true
            };


            }
        }
    }
}

for (let num of counter){

    console.log(num)
}

// let iterator1 = counter[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


//iterator with spread operator 

let range = {

    from :1,
    to : 10,


    [Symbol.iterator](){

        let current = this.from;

        let end = this.to;


        return{

            next(){

                return current <= end
                 ?{value : current++ ,done : false}
                 :{done : true};
            }
        }
    }
};

console.log([...range]);

// iterator with desrtucturing 

let [a,b,c] = range;

console.log(a,b,c);

console.log(range)