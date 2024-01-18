// 10) n soni berilgan quydagi yig'indini hisoblang. S = 1/1 + 1/2 + …. + 1/n

// function sumNumbers(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum += 1 / i;
//   }
//   return sum
// }

// console.log(sumNumbers(2));

// 15) n son berilgan n sonidan kamayish tartibida sonlar chiqarilsin
// function number(n) {
//   for (let i = n; i > 0; i--) {
//     console.log(i);
//   }
// }
// number(5)

// 17) n butun son berilgan ngacha butun sonlarni ko'paytmasini topuvchi dastur tuzing
// function num(n) {
//   let sum = 1;
//   for (let i = 1; i <= n; i++) {
//     sum *= i;
//   }
//   return sum;
// }
// console.log(num(5));

// Homework

// 1) Ixtiyoriy sonni 3-darajasini aniqlovchi dastur tuzing

// function power(n) {
//   return n ** 3;
// }

// console.log(power(2));

// 2) a va b sonlarni yi'gindisin topuvchi programma tuzing

// function sumNumber(a, b) {
//   return a + b;
// }

// console.log(sumNumber(3, 5));

// 3) a va b sonlarni ayrimasini topuvchi dastur tuzing

// function subtractionNum(a, b) {
//   return a - b;
// }

// console.log(subtractionNum(10, 5));

// 4) a sonni 2,3,4 darajasini topuvchi dastur tuzing

// function pow(a, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= a;
//   }
//   return result;
// }

// console.log(pow(2, 2));
// console.log(pow(2, 3));
// console.log(pow(2, 4));
// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(3, 4));

// 5) n sonni ichidan faqat toqlarin topuvchi dastur tuzing

// function oddNumber(n) {
//   for (let i = 1; i <= n; i+=2) {
//     console.log(i);
//   }
// }

// oddNumber(10)
// oddNumber(100)

// 6) n sonni ichidan faqat juftlarini topuvchi dastur tuzing

// function evenNumber(n) {
//   for (let i = 0; i <= n; i += 2) {
//     console.log(i);
//   }
// }

// evenNumber(100)

// 7) n sonini qiymatini inkrement va dikrement qiluvchi dastur tuzing

// function incDec(n, operator) {
//   if (operator === "inc") {
//     n++;
//   } else if (operator === "dec") {
//     n--;
//   } else {
//     return "Invalid operation";
//   }
//   return n;
// }

// console.log(incDec(10, "inc"));
// console.log(incDec(10, "dec"));
// console.log(incDec(10, "add"));

// 8) n sonini bo'luvchilarini topuvchi dastur tuzing

// function findDivisors(n) {
//   let divisors = [];

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       divisors[divisors.length] = i;
//     }
//   }

//   return divisors;
// }

// console.log(findDivisors(12));

// 9) amallarni bajaruvchi funksiya tuzing (+,-,/,*)

// function allOperator(m, n, operators) {
//   if (operators == "+") {
//     console.log(m + n);
//   } else if (operators == "-") {
//     console.log(m - n);
//   } else if (operators == "*") {
//     console.log(m * n);
//   } else if (operators == "/") {
//     console.log(m / n);
//   } else {
//     return "Invalid Operator";
//   }
//   return m, n, operators;
// }
// allOperator(4, 3, "-");

// 10) Karra jadvalini chiqaruvchi dastur tuzing

// function printMultiplicationTable(n) {
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       console.log(i + " * " + j + " = " + i * j);
//     }
//     console.log("\n");
//   }
// }

// printMultiplicationTable(10);
