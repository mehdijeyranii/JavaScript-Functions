{
  const greet = (name) => {
    return "Hello, " + name + "!";
  };

  console.log(greet("Charlie")); // Output: Hello, Charlie!
}

{
  const square = (num) => num * num;
  console.log(square(5)); // Output: 25
}

{
  const add = (a, b) => a + b;
  console.log(add(3, 7)); // Output: 10
}

{
  const multiply = (a, b) => {
    let result = a * b;
    return result;
  };

  console.log(multiply(4, 5)); // Output: 20
}

{
  const getUser = (name, age) => ({ name, age });
  console.log(getUser("Mehdi", 34)); // Output: { name: 'Mehdi', age: 34 }
}

{
  setTimeout(() => console.log("Time is up!"), 2000); // Output: Show Time is up! after 2 seconds
}

{
  const numbers = [1, 2, 3, 4];
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled); // Output: [ 2, 4, 6, 8 ]
}

{
  const ages = [18, 25, 14, 30, 12];
  const adults = ages.filter((age) => age >= 18);
  console.log(adults); // Output: [ 18, 25, 30 ]
}
