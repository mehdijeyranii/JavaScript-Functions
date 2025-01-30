{
  function add(a, b) {
    return a + b;
  }

  function operateOnNumbers(a, b, operation) {
    return operation(a, b);
  }

  console.log(operateOnNumbers(3, 4, add)); // Output: 7
}
