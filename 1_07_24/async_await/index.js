async function fetchName() {
  try {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the `fetch()` call will either return a Response or throw an error
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // The 'ok' property of the response object is a boolean that is "true" if the HTTP
    // status code of the response is in the range 200-299, indicating a successful HTTP request.
    // !response.ok checks if the ok property is "false", meaning the HTTP request was not successful
    // (e.g., the status code is 4xx or 5xx).
    if (!response.ok) {
      throw new Error(`HTTP error ; ${response.status}`);
    }

    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error

    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`could not get the names ${error}`);
  }
}

fetchName();
