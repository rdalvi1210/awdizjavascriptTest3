// 1. Zig-Zag Sort (Easy to Moderate)

const arr = [4, 3, 7, 8, 6, 2, 1];

for (let i = 0; i < arr.length - 1; i++) {
  if (i % 2 === 0) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  } else {
    if (arr[i] < arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
}

console.log(arr);

// 2. Rotate Array by K (Easy to Moderate)

const rotateArray = (arr, k) => {
  for (let i = 1; i <= k; i++) {
    let copyLastElement = arr[arr.length - 1];
    for (let j = arr.length - 1; j >= 0; j--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = copyLastElement;
  }
  return arr;
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));


// 3. Group Anagrams (Moderate)

// ---
