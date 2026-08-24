function outer() {
    let count = 0;

    function inner() {
        count++;
        return count;
    }

    return inner;
}

let counter = outer();

console.log(counter()); 
console.log(counter()); 

// banking example 

function account(){

    let Balance = 0;

    return {
        deposit(amount){
            Balance += amount;
        },
        getbalance(){
            return Balance
        }
    }
}

let bank = account();

bank.deposit(10000);
bank.deposit(20000);
bank.deposit(99999)
console.log(bank.getbalance());
