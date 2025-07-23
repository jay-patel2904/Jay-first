let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);

let score1 = "33abc"

console.log(typeof score1);

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let = null
console.log(typeof null);

let valueInNumber2 = Number(null)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let = undefined 
console.log(typeof undefined);
 let valueInNumber3 = Number(undefined)
 console.log(typeof valueInNumber3);
 console.log(valueInNumber3);

 let = true
 console.log(typeof true);
 
 let valueInNumber4 = Number(true)
 console.log(typeof valueInNumber4);
 console.log(valueInNumber4);
 
 
 let = false
 console.log(typeof false);
 
 let valueInNumber5 = Number(false)
 console.log(typeof valueInNumber5);
 console.log(valueInNumber5);
 
 
 let = "Jay"
 console.log(typeof "Jay");
 
 let valueInNumber6 = Number("Jay")
 console.log(typeof valueInNumber6);
 console.log(valueInNumber6);
 

// "33" => 33
// "33abc" => NaN
// true => 1 / false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


let isLoggedIn1 = 0

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);

let isLoggedIn2 = ""

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);

let isLoggedIn3 = "Jay"

let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3);

// 1 => true / 0 => false 
// "" => false 
// "Jay" => true

let somenumber = 33

let stringNumber = String(somenumber)
console.log(stringNumber);
console.log(typeof stringNumber)




// ************************************ operations *****************************************  


let value = 33
let negValue = -value
console.log(negValue);

// console.log( 2 + 2);
// console.log( 2 - 2);
// console.log( 2 * 2);
// console.log( 2 ** 3); // raise to OR power to
// console.log( 2 / 3);
// console.log( 2 % 3);

let str1 = "Hello "
let str2 = "Jay"
let str3 = str1 + str2 
console.log(str3);

// console.log( 1 + 2);
// console.log( "1" + 2);
// console.log( 1 + "2");
// console.log( "1" + "2");
// console.log( "1" + 2 + 2);
// console.log( 1 + 2 + "2");
// console.log( 1 + "2" + 2 );

console.log(true);

console.log(+true);
// console.log(true+);

console.log(+"");

let num1, num2 , num3 

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

let gameCounter1 = 50 
++ gameCounter1;
console.log(gameCounter1);
