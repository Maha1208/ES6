//Searching
console.log("hello".startsWith("ello", 1)) 
console.log("hello".endsWith("hell", 4))  
console.log("hello".includes("ell"))     
console.log("hello".includes("ell", 1))   
console.log("hello".includes("ell", 2)) 

//repeating
console.log("hello".repeat(5));

//Array find and findIndex
console.log([ 1, 3, 4, 2 ].find(x => x > 3))   
console.log([ 1, 3, 4, 2 ].findIndex(x => x > 3)) 

//Number Type checking
console.log(Number.isNaN(42) === false);
console.log(Number.isNaN(NaN) === true);

console.log(Number.isFinite(Infinity) === false);
console.log(Number.isFinite(-Infinity) === false);
console.log(Number.isFinite(NaN) === false);
console.log(Number.isFinite(123) === true);

//Number safety checking
console.log(Number.isSafeInteger(42) === true);
console.log(Number.isSafeInteger(9007199254740992) === true);

//Number comparison
console.log(0.1 + 0.2 === 0.3) 
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON) 

//Number truncate
console.log(Math.trunc(42.7)) 
console.log(Math.trunc( 0.1)) 
console.log(Math.trunc(-0.1))

//sign
console.log(Math.sign(7))   
console.log(Math.sign(0))   
console.log(Math.sign(-0))  
console.log(Math.sign(-7))  
console.log(Math.sign(NaN))