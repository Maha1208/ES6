// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 5000); 
});

// async function
async function asyncFunc() {
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();