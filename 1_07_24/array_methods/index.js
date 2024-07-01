let largeArray = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "apple",
  "banana",
  "cherry",
  "date",
  "fig",
  "grape",
  "kiwi",
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Virat", age: 25 },
  { name: "Max", age: 33 },
  { name: "Lewis", age: 40 },
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  {
    fruits: ["mango", "orange", "pear"],
    vegetables: ["carrot", "potato", "tomato"],
  },
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Another string to make the array even larger.",
  "Adding more data to increase the size of the array.",
  "Continuing to add elements to make the array bigger.",
  "Just a few more strings to fill up the array.",
];

document.getElementById("btn").addEventListener("click", () => {
  let method = document.querySelector("#selectOp").value;
  let ans = document.getElementById("result");
  let user_input = document.querySelector("input").value;
  let startValue = document.getElementById("start").value;
  let deleteValue = document.getElementById("delete").value;

  switch (method) {
    case "Length":
      let final = largeArray.length;
      console.log(final);
      break;

    case "Join":
      console.log(largeArray.join("-"));
      break;

    case "slice":
      console.log(largeArray.slice(0, user_input));
      break;

    case "indexOf":
      console.log(largeArray.indexOf(user_input));
      break;

    case "push":
      largeArray.push(user_input);
      console.log(largeArray);
      break;

    case "splice":
      const result = largeArray.splice(startValue, deleteValue, user_input);
      console.log(largeArray);
      break;

    case "filter":
      console.log(largeArray.filter((x) => x.age == user_input));
      break;

    case "map":
      const op = largeArray.map((x) => {
        if (typeof x === "number") return x;
      });
      console.log(op);
      break;

    case "reduce":
      const output = largeArray.reduce((acc, curr) => {
        if (typeof curr === "number") {
          acc = acc + curr;
        }
        return acc;
      }, 0);
      console.log(output);
      break;

    case "keys":
      console.log(largeArray.keys());
      break;

    case "typeof":
      console.log(largeArray.typeof(user_input));
      break;

    case "includes":
      console.log(largeArray.includes(user_input));
      break;
  }
});
