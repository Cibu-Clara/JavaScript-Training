1. Tasks:
  <br>a. Update the fetchData function to occasionally reject the Promise with an error. Handle the error in the catch block when using .then() and in the catch block of the fetchDataAsync function. Use Math.random().
  <br>b. Create a new function called processData that takes an array of numbers as a parameter and returns a Promise. Inside the Promise, calculate the sum of all numbers in the array and resolve the Promise with the result after a delay of 1 second.
  <br>c. Create another function called main that uses the fetchDataAsync function to fetch data and then calls the processData function with the fetched data. Use async/await to handle the asynchronous flow and log the final sum to the console.
