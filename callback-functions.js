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
