

/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/
const userData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                const error = false;
                if(error) {
                    reject("User data was not found!");
                }
                else {
                    resolve( {
                        name: "Merilyn Merisalu",
                        age: 29,
                        gender: "Female"
                    });
                }
            }, 3000 );
        
    });
} 

userData()
.then(resolve => console.log(resolve))
.catch(error => console.log(error)); 