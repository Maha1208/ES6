//promise chaining
new Promise(function(resolve, reject) {

    setTimeout(() => resolve(2), 3000); 
  
  }).then(function(result) { 
  
    console.log(result); 
    return result * 2;
  
  }).then(function(result) { 
  
    console.log(result); 
    return result * 2;
  
  }).then(function(result) {
  
    console.log(result); 
    return result * 2;
  
  });
