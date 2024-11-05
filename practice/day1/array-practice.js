// ===== 1. Array Manipulation =====
// Given the array let fruits = ["apple", "banana", "orange"]:
// Add "grape" to the end of the array
// Add "kiwi" to the beginning of the array
// Print the final array != last element of array
/*
Learning Points:
- push(): 배열 끝에 요소 추가
- unshift(): 배열 시작에 요소 추가
- Important: "final array" vs "last element"
  * entire/final/complete array = 전체 배열
  * last/final element = 마지막 요소
*/
let fruits = ["apple", "banana", "orange"];
fruits.push("grape");
fruits.unshift("kiwi");
console.log(fruits);


// ===== 2. Array Splice Method =====
// Create an array with numbers [1, 2, 3, 4, 5]:
// Remove the third element (index 2)
// Replace the second element with the number 10
// Print the array length
/*
Learning Points:
- splice(index, howMany, item): 
  * index: 시작 위치
  * howMany: 제거할 요소 수
  * item: 추가할 새로운 요소
*/
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1);
numbers.splice(1, 1, 10);
console.log(numbers.length);



// ===== 3. Array Iteration & Template Literals =====
// Write a for loop that:
// Iterates through the array let colors = ["red", "blue", "green"]
// Prints each element with its index number in this format: "Index {index}: {color}"
// index is for developers
// console.log(`Debug - Index ${i}: ${colors[i]}`);
// number or item is for users
// console.log(`Item ${i + 1}: ${colors[i]}`);
/*
Learning Points:
- Developer vs User perspective:
  * Developers: use index (starting from 0)
  * Users: use numbers (starting from 1)
- Template literal (``) vs Traditional concatenation (+)
*/
let colors = ["red", "blue", "green"];
for (let i = 0; i < colors.length; i++) {
    console.log(`Index ${i}: ${colors[i]}`);
    // ==  console.log("Index " + i + ": " + colors[i]);
}

//Template Literals
// let item = "book";
// let price = 20;
// 일반 문자열 연결 (+ 사용)
// console.log("This " + item + " costs $" + price + ".");
// 템플릿 리터럴 사용
// console.log(`This ${item} costs $${price}.`);



// ===== 4. Array Index Calculation ===== 
// Using the following array let numbers = [1, 2, 3, 4, 5]:
// Print the last element without using its direct index number
// Print the middle element (you'll need to calculate the middle index)
/*
Learning Points:
- Last element: array.length - 1
- Middle element: Math.floor(array.length/2)
  * Odd length [1,2,3,4,5]: Math.floor(5/2) = 2
  * Even length [1,2,3,4]: Math.floor(4/2) = 2
*/
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[numbers.length - 1]);  // 5
console.log(numbers[Math.round(numbers.length/2 - 1)]);  // 3
// This is more usual: 
console.log(numbers[Math.floor(numbers.length/2)]);
// The reason why we use Math.floor():
// When the array length is odd:
// let odd = [1, 2, 3, 4, 5];  // odd.length == 5
// Math.floor(5/2) = 2  // middle
// When the array length is even:
// let even = [1, 2, 3, 4];  // even.length == 4
// Math.floor(4/2) = 2  // The first of the middle two numbers 중간 두 수 중 앞쪽 수