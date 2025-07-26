// 1. Transpose of a Matrix

// const array = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// let fristArray = [];
// let secondArray = [];
// let result = [];

// let row = array.length;
// let column = array[0].length;
// for (i = 0; i < array.length; i++) {
//   for (j = 0; j < column - 1; j++) {
//     secondArray.push(array[i][j]);
//   }
// }
// for (i = 0; i < array.length; i++) {
//   for (j = 1; j < column; j++) {
//     fristArray.push(array[i][j]);
//   }
// }
// result.push(secondArray, fristArray);
// console.log(result);

// 2. Diagonal Sum of Square Matrix

// const arrayD = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let firstSum = 0;
// let secondSum = 0;
// let n = arrayD.length;

// for (let i = 0; i < n; i++) {
//   firstSum += arrayD[i][i];
//   secondSum += arrayD[i][n - 1 - i];
// }

// console.log(firstSum + secondSum - 5);

// 3. Spiral Print of Matrix

// let array1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let top = 0;
// let bottom = array1.length;
// let left = 0;
// let right = array1[0].length;
// let spiralArray = [];

// while (top < bottom && left < right) {
//   for (let i = left; i < right; i++) {
//     spiralArray.push(array1[top][i]);
//   }
//   top++;

//   for (let i = top; i < bottom; i++) {
//     spiralArray.push(array1[i][right - 1]);
//   }
//   right--;

//   if (top < bottom) {
//     for (let i = right - 1; i >= left; i--) {
//       spiralArray.push(array1[bottom - 1][i]);
//     }
//     bottom--;
//   }

//   if (left < right) {
//     for (let i = bottom - 1; i >= top; i--) {
//       spiralArray.push(array1[i][left]);
//     }
//     left++;
//   }
// }

// console.log("Spiral : ", spiralArray);

// 4. Search in 2D Matrix

// let array2 = [
//   [1, 2, 3],
//   [4, 4, 6],
// ];

// let target = 5;

// let row = array2.length;
// let col = array2[0].length;
// let found = false;

// for (i = 0; i < row; i++) {
//   for (j = 0; j < col; j++) {
//     if (array2[i][j] == target) {
//       found = true;
//     }
//   }
// }
// if (!found) {
//   console.log(false);
// } else {
//   console.log(true);
// }

// 5. Rotate Matrix by 90 Degrees Clockwise

// const array = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// let fristArray = [];
// let secondArray = [];
// let result = [];

// let row = array.length;
// let column = array[0].length;
// for (i = array.length - 1; i >= 0; i--) {
//   for (j = 0; j < column - 1; j++) {
//     secondArray.push(array[i][j]);
//   }
// }
// for (i = array.length - 1; i >= 0; i--) {
//   for (j = 1; j < column; j++) {
//     fristArray.push(array[i][j]);
//   }
// }
// result.push(secondArray, fristArray);
// console.log(result);

