//fetch Api()
loadScript("/ES6/callstack.js")
  .then(script => loadScript("/ES6/Scope.js"))
  .then(script => loadScript("/ES6/constant.js"))
  .then(script => {
    // scripts are loaded, we can use functions declared there
    callstack();
    Scope();
    constant();
  });