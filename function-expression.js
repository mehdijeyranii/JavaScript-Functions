{
  const greet = function (name) {
    return "Hello, " + name + "!";
  };

  console.log(greet("Bob")); // Output: Hello, Bob!
}

{
  const greet = function sayHello(name) {
    return "Hello, " + name + "!";
  };

  console.log(greet("Ali")); // Output: Hello, Ali!
}

{
  setTimeout(function () {
    console.log("Hello after 3 seconds!");
  }, 3000);
}
