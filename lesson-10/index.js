// function arrayNum(n) {
//   let arr = [];

//   for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       arr.push(i);
//     }
//   }

//   return arr;
// }

// let n = 100
// let res = arrayNum(n)
// console.log(res);

// 3) a [0] a[1] ..... A[n] massiv yarating va uni qiymatlarni hisoblang qo'shish orqali

// function sumNum(a) {
//   let arr = [];

//   for (let i = 0; i < a; i++) {
//     arr.push(Math.round(Math.random() * 10));
//   }
//   console.log(arr);
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum
// }

// let a = 5;
// let res = sumNum(a);
// console.log(res);

// Homework

//  4) a[0] = 0, a[1] = 10, ... a[10] = 100 massiv yarating indekslarini faqat toqlarini yi gindisini va indekslari juftlarini ayirmasini hisoblang

// function oddevenSum(a) {
//   let arr = [];

//   for (let i = 0; i <= a; i++) {
//     arr.push(i * 10);
//   }
//   console.log(arr);

//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 1) {
//       sum += arr[i];
//     } else {
//       sum -= arr[i];
//       console.log(arr[i]);
//     }
//   }

//   return sum;
// }
// let a = 10;
// console.log(oddevenSum(a));

// 5) n butun son berilgan n ta indeksdan tashkil topgan massiv yarating. Prompt orgali giymatlarni kiritng. Yig'indini hisoblang

// function sumNum(n) {
//     let arr = [n];
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//         arr[i] = parseInt(prompt("Enter value for index " + i + ": "), 10);
//         sum += arr[i];
//     }
//     return sum;
// }

// let n = 5;
// let sum = sumNum(n);
// console.log(sum);

// 11) nta indeksdan tashkil topgan massiv ularni toq indekslar orasidan kattasini chiqaruvchi dastur tuzing

// function oddMaxNumber(n) {
//   let maxNum = -Infinity;

//   for (let i = 1; i < n.length; i += 2) {
//     if (n[i] > maxNum) {
//       maxNum = n[i];
//     }
//   }
//   return maxNum;
// }

// let arr = [3, 8, 2, 7, 6, 9, 1];
// let res = oddMaxNumber(arr);
// console.log(res);

// 12) n ta indeksli massiv berilgan uni giymatlarni o'rta arifmetigini aniqlovchi dastur tuzing
// function sumNum(n) {
//   let sum = 0;

//   for (let i = 0; i < n.length; i++) {
//     sum += n[i];
//   }

//   let allSum = sum / n.length;
//   return allSum;
// }
// let arr = [3, 8, 2, 7, 6, 9, 1];
// let res = sumNum(arr);
// console.log(res);

// 13) n ta indeksli massiv faqat toq indeksdagilarni ko'ruvchi dastur tuzing

// function seeOddNum(n) {
//   let arr = [];

//   for (let i = 1; i < n.length; i += 2) {
//     arr.push(n[i]);
//   }
//   return arr;
// }

// let nums = [3, 8, 2, 7, 6, 9, 1];
// let res = seeOddNum(nums);
// console.log(res);

// 14) n ta indeksli massiv berilgan faqat indekslarini murakkab sondan iboratlarini chiqaruvchi dastur tuzing

// function indexComplexNum(arr) {
//   function isComposite(number) {
//     if (number < 2) {
//       return false;
//     }

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return true;
//       }
//     }

//     return false;
//   }

//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (isComposite(arr[i])) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// // Example usage
// let array = [4, 7, 12, 5, 8, 9, 10];
// let res = indexComplexNum(array);
// console.log(res); // Output: [0, 2, 4, 5, 6]

// 16) n ta indeksli massiv mavjud ularni qiymatlarini faqat string tipidagisini koruvchi dastur tuzing

// function toString(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// let arr = [3, 'hello', 2, 'world', 6, 'foo', 'bar'];
// let res = toString(arr);
// console.log(res); // Output: ['hello', 'world', 'woow', 'bar']

// 21) n ta elementdan tashkil topgan massiv oxirgi elementini ko'ruvchi dastur tuzing

// function getLastElement(n) {
//   if (n.length === 0) {
//     return undefined; 
//   }

//   return n[n.length - 1];
// }

// var arr = [3, 8, 2, 7, 6, 9, 1];
// var lastElement = getLastElement(arr);
// console.log(lastElement); // Output: 1