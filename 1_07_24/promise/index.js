// const newPromise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("new promise is resolved")
//     },3000)
// })

// newPromise.then(value=>
//     console.log(value)
// )

// const myPromise =new Promise((resolve,reject)=>{
//     const error=true;
//     if(!error){
//         resolve("yes! promise is resolved")
//     }
//     else{
//         reject("no! promise is rejected")
//     }
// })

// myPromise.then(value=> console.log(value)).catch(err=>console.log(err))

// Making an HTTP GET request to a web API using fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    // The .json() method parses the JSON body text from the response
    return response.json(); // gets the content from the api and passes it on to the next .then() to display the data
  })
  .then((data) => {
    // 'data' is the JavaScript object parsed from the JSON
    data.forEach(data=> {console.log(data)})
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error("Error:", error);
  });

//   To parse the JSON content from the response, you use the .json() method of the Response object. This method also returns a Promise that resolves to the JavaScript object parsed from the JSON.
