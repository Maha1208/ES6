//symbol
const s1 = Symbol.for();
const s2 = Symbol.for();
console.log(typeof s1)
console.log(s1===s2)

const s3 = Symbol("hello");
const s4 = Symbol("hello");
console.log(s3)
console.log(s4)
console.log(s3==s4)