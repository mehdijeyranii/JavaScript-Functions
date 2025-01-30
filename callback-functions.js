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
