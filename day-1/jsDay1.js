function add(n1, n2) {
  return n1 + n2;
}

const sub = function (n1, n2) {
  return n1 - n2;
};

const mul = function (n1, n2) {
  return n1 * n2;
};

const cb = function (n1, n2, callback) {
  if (
    typeof callback === "function" &&
    typeof n1 === "number" &&
    typeof n2 === "number"
  ) {
    return (
      "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2)
    );
  } else throw new Error("cb method called with invalid parameters");
};

console.log(add(1, 2)); // What will this print? 3
console.log(add); // What will it print and what does add represent? It prints the function add, or a toString() representation
console.log(add(1, 2, 3)); // What will it print? 3, meaning it only cares about the first 2 arguments
console.log(add(1)); // What will it print? NaN as it didn't get enough arguments
console.log(cb(3, 3, add)); // What will it print? Result from the two numbers: 3+3=6
console.log(cb(4, 3, sub)); // What will it print? Result from the two numbers: 4+3=1
//console.log(cb(3,3,add())); // What will it print (and what was the problem)? TypeError: callback is not a function, as we call the actual function (without any input even) instead of passing it as a parameter
//console.log(cb(3,"hh",add));// What will it print? Result from the two numbers: 3+hh=3hh

console.log(
  "------------------------ AddVersion2 -----------------------------"
);

// ...rest notation means it can take an arbitrary amount of parameters, it will then reduce through the parameters accumilating the sum of all the numbers
function addVersion2(n1, n2, ...rest) {
  return n1 + n2 + rest.reduce((acc, cur) => acc + cur);
}

console.log(addVersion2(1, 2, 3, 4, 5, 6));

console.log(
  "------------------------ mul(n1, n2) -----------------------------"
);
console.log(cb(5, 10, mul));
console.log(
  "------------------------- Anonymous ------------------------------"
);
console.log(cb(10, 5, (n1, n2) => n1 / n2));

const names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

const filterByLength = function (names) {
  return names.filter((name) => name.length <= 3);
};

console.log(
  "------------------------ Filter names by length ------------------------"
);
console.log("------------------------ All names: ------------------------");

names.forEach((name) => console.log(name));

console.log(
  "------------------------ Names with length <= 3: ------------------------"
);
const filteredNames = filterByLength(names);
filteredNames.forEach((name) => console.log(name));

const upperCaseNames = names.map((name) => name.toUpperCase());

console.log(
  "------------------------ Names IN UPPER CASE: ------------------------"
);

upperCaseNames.forEach((name) => console.log(name));
