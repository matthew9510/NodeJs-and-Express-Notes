// Asynchronous functionality
setTimeout(() => {
    console.log("Timer is done!")
}, 2000);



// Nested Asynchronous functionality

// we need some way of doing something when this inner timer is done so we will provide a callback function as an argument passed in 
// const fetchData =  () => {
//     setTimeout(()=> {

//     }, 1500)
// }

// this argument (callback) is a function which we will eventually call in our inner function once we are done with the timer. We will pass 'Done!' as our value
const fetchData = callback => {  // 1 
    setTimeout(()=> {
        callback("Done!") // 5
    }, 1500) // 3
}

// Now in the place we use fetch data, lets place inside of this setTimeout call, there we need to pass in another callback and here we will get the text passed by the callback in our function fetchdata when we execute it, and we will console.log that text. 
setTimeout(() => {
    console.log("Timer is done!")
    fetchData( text => { // 2  and also the callback function (4)
        console.log(text);
    }) 
}, 2000);


/*
 * In the end we create our own function (1) (fetchData) which gets a callback so that we can define a function (2) which should execute once this inner timer (3) is done from some other place, specifically as the argument of the fetchData invokation. This is the function which is passed in as callback (4) 
 * and we're executing that function inside of the inner setTimeout function  (once it's done) (5)
 */

/*
 * If we have a bunch of nested a sync calls we go deeper and deeper in a callback perspective i.e. the outer SetTimer function area lines 25 through 29.
 * This is why we have a feature called promises. 
 */ 
