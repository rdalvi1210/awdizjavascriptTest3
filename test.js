// Q1 (Updated): Find the First Non-Repeating Element in an Array

// function findfirstnonrepeatNum(arr) {
//   let nonRepeatingArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }

//     if (count === 0) {
//       nonRepeatingArr.push(arr[i]);
//       break;
//     }
//   }

//   return nonRepeatingArr[0];
// }
// console.log(findfirstnonrepeatNum([4, 5, 1, 2, 0, 4, 1, 0]));

// Q3. Merge Two Arrays and Remove Duplicates

// let arrMerge1 = [1, 2, 3];
// let arrMerge2 = [2, 3, 4];
// let Merged = [];

// for (let i = 0; i < arrMerge1.length; i++) {
//   Merged.push(arrMerge1[i]);
// }

// for (let i = 0; i < arrMerge2.length; i++) {
//   let flag = false;
//   for (let j = 0; j < Merged.length; j++) {
//     if (arrMerge2[i] == Merged[j]) {
//       flag = true;
//     }
//   }
//   if (flag == false) {
//     Merged.push(arrMerge2[i]);
//   }
// }

// console.log(Merged);


// Q4. (Updated): Convert an Array of Objects into a Single Object
// function convertObject(obj1, obj2) {
//   let arr = [
//     { id: 1, name: "A" },
//     { id: 2, name: "B" },
//   ];

//   let obj5 = {};
//   for (let i = 0; i < arr.length; i++) {
//     obj5[arr[i].id] = arr[i].name;
//   }
//   return obj5;
// }
// console.log(convertObject());

// Q6. Find Missing Number in Sorted Array (Binary Search)

// findMissing Number

// function findMissingNumber(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i + 1] !== array[i] + 1) {
//       return array[i] + 1;
//     }
//   }

//   return "not found";
// }

// console.log(findMissingNumber([1, 2, 3, 5]));

// Q9. Binary Search in Sorted Array
// Input: [1, 3, 5, 7, 9], Target = 5
// Output: 2 (Index of 5)
// Implement binary search manually

// function binarySearch(array, target) {
//   let left = 0;
//   let right = array.length - 1;

//   while (left <= right) {
//     let midIndex = Math.round((left + right - 1) / 2);
//     let midElement = array[midIndex];
//     if (target == midElement) {
//       return midIndex;
//     } else if (target > midIndex) {
//       left = midIndex + 1;
//     } else if (target < midIndex) {
//       right = midIndex - 1;
//     }
//   }
// }

// console.log(binarySearch([1, 3, 5, 7, 9], 5));

// Q10. Group Elements by Frequency
// Input: [1, 1, 2, 3, 3, 3]
// Output:
// {
// "1": 2,
// "2": 1,
// "3": 3
// }
// Use object to group and count occurrences

// function makeGroup(array) {
//   let obj = {};

//   for (i = 0; i < array.length; i++) {
//     if (obj[array[i]]) {
//       obj[array[i]]++;
//     } else {
//       obj[array[i]] = 1;
//     }
//   }
//   return obj;
// }

// console.log(makeGroup([5, 1, 1, 2, 3, 3, 3]))
