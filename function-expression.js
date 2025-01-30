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

{
  const numbers = [1, 2, 3, 4];

  numbers.forEach(function (num) {
    console.log(num * 2);
  });

  // Output: 2, 4, 6, 8
}
