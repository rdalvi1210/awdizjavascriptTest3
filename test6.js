// 1. Rotate String Comparison

let str1 = "waterbottle";
let str2 = "erbottlewat";

let isRotation = false;

if (str1.length === str2.length) {
  let combined = str1 + str1;
  // Manual check for str2 in combined
  for (let i = 0; i <= combined.length - str2.length; i++) {
    let match = true;
    for (let j = 0; j < str2.length; j++) {
      if (combined[i + j] !== str2[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      isRotation = true;
      break;
    }
  }
}

console.log(isRotation);

// 2. Longest Consecutive Subsequence (Unsorted Array)

let arr = [100, 4, 200, 1, 3, 2, 5];

let set = new Set();
let longest = 0;
for (let num of arr) {
  set.add(num);
}

for (let num of set) {
  if (!set.has(num - 1)) {
    let current = num;
    let streak = 1;

    while (set.has(current + 1)) {
      current++;
      streak++;
    }
    longest = Math.max(longest, streak);
  }
}

console.log(longest);

// 3. Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let map = {};

  for (let end = 0; end < s.length; end++) {
    let char = s[end];

    if (map[char] !== undefined && map[char] >= start) {
      start = map[char] + 1;
    }

    map[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
