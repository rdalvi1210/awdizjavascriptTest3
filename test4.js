// 1. Print a Pyramid Pattern with Spaces:
let n = 3;

for (let i = 1; i <= n; i++) {
  let res = "";

  // Print spaces
  for (let j = 1; j <= n - i; j++) {
    res += " ";
  }

  // Print stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    res += "*";
  }

  console.log(res);
}

// 3. Count Binary Zeros and Ones:

let input = "101010110";

let obj = { ones: 0, zeros: 0 };

for (i = 0; i < input.length; i++) {
  if (input[i] == "1") {
    obj.ones++;
  } else if (input[i] == "0") {
    obj.zeros++;
  }
}
console.log(obj);

// 4. Group Users by Role (Objects inside Array):

let array = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" },
];

let admin = [];
let user = [];
let obj1 = {};
for (i = 0; i < array.length; i++) {
  if (array[i].role == "admin") {
    admin.push(array[i].name);
  } else {
    user.push(array[i].name);
  }
}
obj1.admin = admin;
obj1.user = user;

console.log(obj);

// 5. Filter Only Unique Binary Strings from Array:

let input1 = ["101", "101", "000", "111", "000"];

let newArray = [];
for (i = 0; i < input1.length - 1; i++) {
  let repeat = false;
  if (newArray.includes(input1[i])) {
    repeat = true;
  }

  if (!repeat) {
    newArray.push(input1[i]);
  }
}
console.log(newArray);
