//set creation
const s1 = new Set(["a","b","c"]);
console.log(s1);

//add values to set
s1.add("1");
s1.add("2");
s1.add("c");
s1.add("d");
console.log(s1);

//deleting values from set
s1.delete("a");
s1.delete("c");
console.log(s1);

//has
console.log(s1.has("a"));//fals

//values
const iterator=s1.values()
console.log(iterator.next().value)
console.log(iterator.next().value)

//clear
console.log(s1.size);
console.log(s1.clear());
console.log(s1.size);

//Map
const map1 = new Map();

map1.set('a', 'alpha');//set
map1.set('b', 'beta');
map1.set('g', 'gamma');
console.log(map1);
console.log(map1.size);//size
console.log(map1.get("a"));//get
console.log(map1.has('a'));//has

const iterator1 = map1.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);

const iter=map1.values();
console.log(iter.next().value);//value
console.log(iter.next().value);
console.log(map1.delete('a'));//delete
