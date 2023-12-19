/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/



function wait(n) {

    const promise=new Promise((resolve)=>{
        setTimeout(()=>{
         resolve()
        },1000*n)
    })

    return promise;
}

module.exports = wait;
