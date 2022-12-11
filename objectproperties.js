//shorter syntax
var x = 0, y = 0
obj = { x, y }
console.log(obj)

//Computed Property Names
var department = 'dep_name';  
var emp = {  
    id : 102,  
    name : 'Anil',  
    [department]:'Production'  
}  
console.log(emp);  