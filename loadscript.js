loadScript("/article/promise-chaining/one.js")
  .then(script => loadScript("Scope.js"))
  .then(script => loadScript("/article/promise-chaining/three.js"))
  .then(script => {
    // scripts are loaded, we can use functions declared there
    one();
    two();
    three();
  });