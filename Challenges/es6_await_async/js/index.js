//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

/* const apiUrl = "https://api.chucknorris.io/jokes/random";

async function gettingJoke() {
    
   let response = await fetch(apiUrl);
   let data = await response.json();
   console.log(data.value);
}
gettingJoke(); */


function resolveAfter3Seconds() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve("resolved!");
      }, 3000)
   })
}

/* resolveAfter3Seconds().then((data) => {
   console.log(data);
}) */

/* async function getAsyncData() {
   let result = await resolveAfter3Seconds();
   console.log(result);
}

getAsyncData(); */