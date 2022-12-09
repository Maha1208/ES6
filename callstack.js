//call stack
function n1()
{
console.log("learning html")
n2()
}
function n2()
{
console.log("learning css")
n3()
}
function n3()
{
console.log("learning Js")
n4()
}
function n4()
{
console.log("learning Angular")
n5()
}
function n5()
{
console.log("learning React")
throw new error("error occured")
}
n1()
