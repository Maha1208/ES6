//default parameter
let greet=(fname='maha',sname='lakshmi') =>{
    console.log(fname,sname)
}
greet();
greet('lak','maha');

//rest parameter
function f (x, y, ...a) {
    return (x + y) * a.length
}
console.log(f(4, 2, "hello", false, 7) === 18)

//rest parameter
function sum(...N) {
    let total = 0;
    for (const arg of N) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  console.log(sum(1, 2, 3, 4));

  function multiply(multiplier, ...theArgs) {
    return theArgs.map((element) => multiplier * element);
  }
  
  const arr = multiply(2, 15, 25, 42);
  console.log(arr);


  //spread operator
  const list1=['pen','pencil','eraser','pouch']
  const list2=['sharpner','toy car','ball','teddy']

  let list=[...list1,...list2]
  console.log(list);
