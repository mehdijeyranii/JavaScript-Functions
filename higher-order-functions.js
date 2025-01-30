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
