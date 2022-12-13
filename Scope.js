// Global scope
let zooKeeper = "I'm global!"
function zooAnimalEnivornment()
{
  // Local scope
  let zooAnimal = "I'm a local!"
}
console.log(zooKeeper)
console.log(zooAnimal) // Uncaught ReferenceError: zooAnimal is not defined

//defining
for (let i = 0; i < 3; i++) 
{
    console.log(i) 
}
  console.log(i) //  i is not defined

  //without hoisting
  let a=0; let b=0;
  for (let i = 0; i < a.length; i++) {
    let x = a[i]

}
for (let i = 0; i < b.length; i++) {
    let y = b[i]

}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () 
    { 
      return i * 2 
    }
}
console.log(callbacks[0]() === 0)
console.log(callbacks[1]() === 2)
console.log(callbacks[2]() === 4)