{
  function greet(name) {
    return "Hello, " + name + "!";
  }

  console.log(greet("Alice"));
}

{
  function add(a, b) {
    return a + b;
  }

  console.log(add(5, 3));
}

{
  function isEven(number) {
    return number % 2 === 0;
  }

  console.log(isEven(10)); // Output: true
  console.log(isEven(7)); // Output: false
}

{
  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }

  console.log(factorial(5)); // Output: 120
}
