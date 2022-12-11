//Binary & Octal Literal
//ES6
console.log(0b111110111 === 503);
console.log(0o767 === 503);

//ES5
let num=parseInt('0111110111',2)
console.log(num===503)

//Unicode String & RegExp Literal
| 
console.log("𠮷".length === 2)
console.log("𠮷".match(/./u)[0].length === 2)
console.log("𠮷" === "\uD842\uDFB7")
console.log("𠮷" === "\u{20BB7}")
console.log("𠮷".codePointAt(0) == 0x20BB7)
for (let codepoint of "𠮷")
 console.log(codepoint)