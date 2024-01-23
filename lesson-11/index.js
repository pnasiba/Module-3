// 6) n ta indeksdan tashkil topgan massiv berilgan indekslari kamayish tartibida chiqaring

// function decreaseNumber(arr, index) {
//   const sortedIndex = index.sort((a, b) => b - a);
//   const sortedElements = [];
//   for (let i = 0; i < sortedIndex.length; i++) {
//     const index = sortedIndex[i];
//     sortedElements.push(arr[index]);
//   }
//   console.log(sortedElements);
// }

// const arr = [10, 20, 30, 40, 50];
// const index = [3, 1, 4];
// decreaseNumber(arr, index);

// 8) n ta indeksdan tashkil topgan massiv mavjud. K va L sonlar orasidagi indekslarini yig'indisini topuvchi dastur tuzing

// function indexSum(arr, k, l) {
//   let sum = 0;

//   for (let i = k; i <= l; i++) {
//     sum += i;
//   }
//   return sum;
// }

// const arr = [10, 20, 30, 40, 50];
// const k = 1;
// const l = 3;
// const result = indexSum(arr, k, l);
// console.log(result);

// 9) n ta indeksdan tashkil topgan massiv orasidan indekslarini juftlari ichidan eng kattasini aniqlovchi dastur tuzing.

// function evenMaxNumber(n) {
//   let maxNum = -Infinity;

//   for (let i = 0; i < n.length; i += 2) {
//     if (n[i] > maxNum) {
//       maxNum = n[i];
//     }
//   }
//   return maxNum;
// }

// let arr = [3, 8, 2, 7, 5, 9, 1];
// let res = evenMaxNumber(arr);
// console.log(res);

// 10) n ta indeksdan tashkil topgan massiv orasidan indekslarini juftlari ichidan eng kichigini aniqlovchi dastur tuzing.

// function evenMinNumber(n) {
//   let minNum = -1;

//   for (let i = 0; i < n.length; i++) {
//     if (i % 2 === 0) {
//       if (minNum === -1 || i < minNum) {
//         minNum = i;
//       }
//     }
//   }
//   return minNum;
// }

// let arr = [3, 8, 2, 7, 5, 9, 1];
// let res = evenMinNumber(arr);
// console.log(res);

// 15) n ta indeksli massiv faqat giymatlarini toqlarni koruvchi dastur tuzing

// function oddIndexNumber(n) {
//   let oddIndex = [];

//   for (let i = 0; i < n.length; i++) {
//     if (n[i] % 2 !== 0) {
//       oddIndex.push(n[i]);
//     }
//   }
//   return oddIndex;
// }

// const arr = [10, 21, 30, 49, 50];
// const result = oddIndexNumber(arr);
// console.log(result);

// 17) ikkita a va b massiv bor ularni ichidan giymatlarini tengini oluvchi dastur tuzing.

// function doubleSumNum(a, b) {
//   let sum = [];

//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] === b[j]) {
//         sum.push(a[i]);
//       }
//     }
//   }
//   return sum;
// }

// const a = [10, 20, 30, 65, 50];
// const b = [15, 25, 30, 45, 65];
// const result = doubleSumNum(a, b);
// console.log(result);

// 18) n butun son berilgan n ta indeksdan tashkil topgan massiv yarating. Barchasini giymatini prompt orqali kiritib boring

// function sumNum(n) {
//   let arr = [];

//   for (let i = 0; i < n; i++) {
//     let value = prompt("Arrayning " + i + "-elementini kiriting:");
//     arr.push(value);
//   }

//   return arr;
// }

// const n = 5;
// const result = sumNum(n);
// console.log(result);

// 19) n butun son berilgan n ta indeksdan tashkil topgan massiv yarating. Prompt orqali giymatlarni kiritng. Yig'indini hisoblang

// function sumNum(n) {
//   var arr = [];
//   var sum = 0;

//   for (var i = 0; i < n; i++) {
//     var value = parseFloat(
//       prompt("Arrayning, " + (i + 1) + " -elementini kiriting:")
//     );
//     arr.push(value);
//     sum += value;
//   }

//   return sum;
// }

// var n = 5;
// var result = sumNum(n);
// console.log("Massivdagi elementlar yig'indisi:", result);

// 20) n butun son berilgan n ta indeksdan tashkil topgan massiv yarating. Prompt orqali giymatlarni kiritng. Song prompt chiqib juft deb kiritsam indekslari faqat juftlari yoki toq deb kiritsam toqlarini chiqarilsin

// function createArr(n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     let value = parseInt(prompt("Enter element #" + i + ":"));
//     arr.push(value);
//   }
//   return arr;
// }

// let n = parseInt(prompt("Enter the length of the array:"));
// let arr = createArr(n);

// console.log("Array:", arr);

// let evenNumbers = [];
// let oddNumbers = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenNumbers.push(arr[i]);
//   } else {
//     oddNumbers.push(arr[i]);
//   }
// }

// let choice = prompt("Enter 'even' or 'odd' to display even or odd numbers:");

// if (choice === "even") {
//   console.log("Even numbers:", evenNumbers);
// } else if (choice === "odd") {
//   console.log("Odd numbers:", oddNumbers);
// } else {
//   console.log("Invalid choice.");
// }

// 22) n ta elementdan tashkil topgan massiv ularni qiymatlari bir biriga o'shab ketadi. Faqat bix xil qiymatdan bittasini chiqaruvchi dastur tuzing

// function removeDuplicates(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// let n = parseInt(prompt("Massiv uzunligini kiriting:"));
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let value = parseInt(prompt("Element #" + (i + 1) + " ni kiriting:"));
//   arr.push(value);
// }

// console.log("Asl massiv:", arr);

// let uniqueArr = removeDuplicates(arr);

// console.log("Bir-biriga o'shgan qiymatlarni o'chirgan massiv:", uniqueArr);
