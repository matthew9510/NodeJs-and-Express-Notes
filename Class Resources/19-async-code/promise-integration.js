const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log('Timer is done!');
  fetchData()
    .then(text => {
      console.log(text);
      return fetchData();
    })
    .then(text2 => {
      console.log(text2);
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');


/*
 * You create a promise inside of the fetchData function. You use the Promise constructor function built into Javascript and node js.
 * This also takes in a callback which takes in two arguments, resolve and reject. You can name them what you want but they are two functions.
 * The first function completes the promise successfully, it resolves it successfully. 
 * The second function rejects it which is like throwing an error. 
 * You then take your async code and move it into there (that callback function).
 * Now in that callback we have our own (async) function. 
 * SetTimeout doesn't give us a promise API, so we have to use a callback. 
 * In there we now no longer use anycallback function we get, we change the fetchData function to accept no callback function now.
 * Instead we swap out that callback function invokation to the resolve function invokation passing in the argument we passed into our old and removed callback function invokation.
 * We just successfully return the resolve value. 
 * Now in fetch data after defining the promise, we just have to return it.
 * Note: that what we are returning is synchronous code, this gets returned immediately after the promise is created and before the code in the promise is run, which will happen sometime later when we actually call that function and when that timeout completes.
 * So we now return that promise inside the fetchData declaration. In the place where we called/invoked fetchData we now no longer have to pass a callback but we can now use the .then function on the fetchData invocation (which is callable on a promise and we return a promise).
 * This simply allows you to define the callback function here, in the then parameters of the then function, which will execute once the promise is resolved. 
*/

/*
 * The advantage of this is, if we have multiple such promises, so lets say we call fetchData again in the first promise resolve.
 * Then we don't have to use then like this:
   fetchData()
    .then(text => {
      console.log(text);
      fetchData().then(text2 => {
          console.log(text2)
      })

  * and there for end up with nested callbacks again, but instead we can inside of a promise and then block which is part of a promise, 
  * we can just return a new promise and then add the next then block after the previous one. 

      fetchData() // promise
    .then(text => { 
      console.log(text);
      return fetchData(); //2
    }) // 1
    .then(text2 => {
      console.log(text2);
    });

 *  So now we can have a chain of then blocks, this one (1) gets called on the first promise (i.e. fetchData()) and then in that then block we return another promise.
 * Even if that would not give us a promise inside of a then block returning it would convert it to a promise that instantly resolves and then we add another then block which is now referrring to this promise here (2)
 * which is more readable than having infinitely nested callbacks
 */

 /*
 * Note code on lines between line 2-6 is mostly not written by you but it is a cruicial concept that makes our async code more manageable.
 */