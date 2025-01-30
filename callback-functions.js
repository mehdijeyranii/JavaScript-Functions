{
  function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
  }

  function sayGoodbye() {
    console.log("Goodbye!");
  }

  greet("Mehdi", sayGoodbye);

  // Output:
  // Hello, Mehdi
  // Goodbye!
}

{
  function fetchData(callback) {
    setTimeout(() => {
      console.log("Data received");
      callback();
    }, 2000);
  }

  function processData() {
    console.log("Data processed");
  }

  fetchData(processData);

  // Output after 2 seconds:
  // Data received
  // Data processed
}

{
  function sum(a, b, callback) {
    const result = a + b;
    callback(result);
  }

  function displayResult(result) {
    console.log(`Sum result: ${result}`);
  }

  sum(5, 10, displayResult); // Output: Sum result: 15
}
