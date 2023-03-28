/**
 * In JavaScript, the Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

The syntax for using Promise.race() is:
    Promise.race(iterable); 
 */

    const promise1 = new Promise( (resolve ,reject)=>{
        setTimeout(resolve ,1000,"promise 1 resolved");
    })
    const promise2 = new Promise((resolve ,reject)=>{
        setTimeout( resolve, 2000,"promise 2 resolved");
    })

    Promise.race([promise1 ,promise2]).then( value =>console.log(value)).catch(err=>console.log(err))

//      out put 
// promise 1 resolved