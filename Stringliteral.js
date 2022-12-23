//string interpolation
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`
console.log(message);

//Raw String access
const link = String.raw`http://es6-features.org/#RawStringAccess`
console.log(`please copy the given link ${link} and paste it in chrome`)

