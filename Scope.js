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

