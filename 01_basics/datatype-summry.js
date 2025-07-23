// Primitive

// 7 types : String, Number, Boolean , Null, Undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false 
const outSideTemp = null
let userEmail; 
const id = Symbol(123)
const anotherId = Symbol(123)

// console.log(id == anotherId ); 
// id != anotherId

const bigNumber = 65958648665655954516511n




// reference (Non primitive)

// Array, Object, Function 

// array 
const heros = ["Luffy", "Zoro", "Sanji"]

// object
const myObj = {
  name : "jay"
  // age: 18 
}

// function
const myFunction = function(){
    console.log("Hello World");
}

// console.table([score, scoreValue, isLoggedIn, outSideTemp, undefined, id, anotherId, bigNumber, heros, myObj, myFunction])

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outSideTemp);
console.log(typeof undefined);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);


// **************************************************

// stack (Primitive) , heap (Non-Primitive)

let myYtName = "JayP"

let anotherName = myYtName 
anotherName = "JayPatel"


console.log(anotherName);
console.log(myYtName);


 // my  expiriment

// anotherMyYtName  = "JP"
// console.log(anotherMyYtName);

let userOne = {
    email : "usser@google.com"
   // upi:  "user@ykl"
}
 let userTwo = userOne

 userTwo.email = "Jay@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);
 
 