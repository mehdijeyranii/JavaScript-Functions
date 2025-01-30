{
  function add(a, b) {
    return a + b;
  }

  function operateOnNumbers(a, b, operation) {
    return operation(a, b);
  }

  console.log(operateOnNumbers(3, 4, add)); // Output: 7
}

{
  const multiply = (a, b) => a * b;

  const calculate = (a, b, operation) => operation(a, b);

  console.log(calculate(5, 6, multiply)); // Output: 30
}

{
  function greet(message) {
    return function (name) {
      console.log(`${message}, ${name}`);
    };
  }

  const sayHello = greet("Hello");
  sayHello("Mehdi"); // Output: Hello, Mehdi
}

{
  const double = (x) => x * 2;
  const square = (x) => x * x;

  const doubleAndSquare = (x) => square(double(x));

  console.log(doubleAndSquare(3)); // Output: 36
}

{
  const numbers = [1, 2, 3, 4];
  const doubledNumbers = numbers.map((num) => num * 2);
  console.log(doubledNumbers); // Output: [ 2, 4, 6, 8 ]
}

{
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log(evenNumbers); // Output: [ 2, 4, 6 ]
}
