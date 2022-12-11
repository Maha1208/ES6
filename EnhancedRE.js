//Regular Expression Sticky Matching
const str1 = 'table football';
const regex1 = new RegExp('foo', 'y');
regex1.lastIndex = 6;
console.log(regex1.sticky);
console.log(regex1.test(str1));