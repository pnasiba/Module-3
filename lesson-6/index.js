// Func1. a sonning ixtiyoriy n-darajasini hisoblovchi power(a, n) nomli funksiya hosil qiling. QY
// power(3, 5) => 243

// function power(a, n) {
//   return Math.pow(a, n);
// }
// console.log(power(3, 5));

// Func2. 2 ta a va b sonning o'rta arifmetigi (a + b) / 2 va geometrigi (a + b) ^ (1 / 2) hisoblovchi mean(a, b) nomli funksiya hosil qiling. QYM
// mean(12, 48) => 30, 24

// function mean(a, b) {
//   let arithmetic = (a + b) / 2;
//   let geometric = Math.pow(a * b, 1 / 2);
//   console.log(arithmetic, geometric);
// }

// mean(12, 48);

// Func3. Haqiqiy sonning ishorasini aniqlovchi sign(n) nomli funksiya hosil qiling. Funksiya argumenti noldan kichik bo'lsa -1; noldan katta bo'lsa 1; nolga teng bo'lsa 0 qiymat qaytarsin. QY
// sign(10) => 1

// function sign(n) {
//   return Math.sign(n);
// }

// console.log(sign(10));

// Func4. A*x^2 + B*x + C = 0 ko'rinishidagi tenglama kvadrat tenglama deyiladi. (A noldan farqli son). Kvadrat tenglamaning ildizlar sonini aniqlovchi numberOfRoots(A, B, C) nomli funksiya hosil qiling. D = B^2 - 4*A*C. Agar D > 0 bo’lsa 2 ta, D = 0 bo’lsa 1 ta, D < 0 bo’lsa 0 ta. QY
// numberOfRoots (1, -6, 9) => 1

// function numberOfRoots(A, B, C) {
//   let D = Math.pow(B, 2) - 4 * A * C;
//   if (D > 0) {
//     return 2;
//   } else if (D == 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// console.log(numberOfRoots(1, -6, 9)); // 1

// Func5. Doiraning yuzini hisoblovchi areaCircle(R) nomli funksiya hosil qiling. Doiraning yuzi S = π*R^2 orqali hisoblanadi. QY

// function areaCircle(R) {
//   let S = Math.PI * Math.pow(R, 2);
//   return S;
// }

// console.log(areaCircle(5));

// Func6. A va B sonlari orasidagi sonlar yig'indisini hisoblovchi sumRange(A, B) nomli funksiya hosil qiling. Agar A > B bo'lsa, funksiya 0 qiymat qaytaradi. QY
// sumRange(8, 10) => 27

// function sumRange(A, B) {
//   let sum = 0;
//   if (A > B) {
//     return 0;
//   }
//   for (let i = A; i <= B; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// console.log(sumRange(8, 10));

// Func7. Arifmetik amallarni bajaruvchi calc(A, B, S) funksiyasini hosil qiling. A va B haqiqiy sonlar. S o'zgaruchisi orqali bajariladigan arifmetik amal aniqlanadi. “-” – ayirish, “*” – ko'paytirish, “/” - bo'lish, “+” - qo'shish va boshqa belgilar uchun 0 qaytarsin. QY
// calc(10, 15, “*”) => 150
// calc(7, 8, “+”) => 15

// function calc(A, B, S) {
//   let result;
//   switch (S) {
//     case "-":
//       result = A - B;
//       break;
//     case "*":
//       result = A * B;
//       break;
//     case "/":
//       result = A / B;
//       break;
//     case "+":
//       result = A + B;
//       break;
//     default:
//       result = 0;
//   }
//   return result;
// }

// console.log(calc(10, 15, "*"));
// console.log(calc(7, 8, "+"));

// Func8. Butun sonning juft - toqligini aniqlovchi isEven(K) funksiyasini hosil qiling. Funksiya K juft son bo'lsa - true, aks xolda false qiymat qaytarsin. QY
// isEven(10) => true

// function isEven(K) {
//   let remainder = K % 2;
//   if (remainder == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(10));

// Func9. Kiritilgan 3 ta a, b, c sonlarning eng kichigini, o’rtachasini va eng kattasini chiqaruvchi sortABC(a, b, c) nomli dastur tuzing. QYM
// sortABC(10, 5, 8) => 5, 8, 10

// function sortABC(a, b, c) {
//   let array = [a, b, c];
//   array.sort(function (x, y) {
//     return x - y;
//   });
//   console.log(array[0], array[1], array[2]);
// }

// sortABC(10, 5, 8);

// Func10. isPowerN(K, N) mantiqiy funksiyasini hosil qiling. (K > 0). Agar K soni N soninig biror darajasi bo'lsa - true, aks xolda false qiymat qaytarilsin. QY
// function isPowerN(K, N) {
//   if (K <= 0 || N <= 0) {
//     return false;
//   }
//   let remainder = (Math.log(K) / Math.log(N)) % 1;
//   if (remainder == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPowerN(27, 3));
// console.log(isPowerN(28, 3));

// Func11. isPrime(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni tub bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// isPrime(7)  => true

// function isPrime(N) {
//   if (N <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(N); i++) {
//     if (N % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(7));

// Func12. isPrime funksiyasi orqali N gacha bo’lgan sonlar ichidan nechtasi tub ekanini aniqlovchi numberOfPrime(N) nomli dastur tuzilsin. QY
// numberOfPrime(10) => 4

// function numberOfPrime(N) {
//   let count = 0;
//   for (let i = 2; i <= N; i++) {
//     if (isPrime(i)) {
//       count++;
//     }
//   }
//   return count;
// }

// function isPrime(N) {
//   if (N <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(N); i++) {
//     if (N % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(numberOfPrime(10)); // 4

// Func13. Butun qiymat qaytaruvchi digitNth(K, N) funksiyasini hosil qiling. (K > 0). Funksiya K sonining N-raqamini qaytarsin. Agar K soni raqamlari N dan kichik bo'lsa, -1 qaytarilsin. digitCount funksiyasidan foydalaning.QY
// digitNth(105782, 5) => 8
// digitNth(1057, 5) => -1

// ---

// Func14. N sonining raqamlaridan teskari tartibda hosil bo’ladigan sonni qaytaruvchi inverseNumber(N) nomli funksiya hosil qiling. QY
// inverseNumber(56814) => 41865

// function inverseNumber(N) {
//   let digits = Array.from(String(N), Number);
//   let reversed = digits.reverse();
//   let result = parseInt(reversed.join(""), 10);
//   return result;
// }

// console.log(inverseNumber(56814));

// Func15. isPalindrom(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni palindrom bo'lsa - true, aks holda false qiymat qaytarilsin. inverseNumber funksiyasidan foydalaning. Palindromik son - chapda ham, o’ngdan ham o’qilganda bir xil bo’ladigan son. Masalan, 123321, 78987. QY
// isPalindrom(1678761) => true

// function isPalindrom(N) {
//   if (N < 0) {
//     return false;
//   }
//   let reversed = inverseNumber(N);
//   if (N == reversed) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function inverseNumber(N) {
//   let digits = Array.from(String(N), Number);
//   let reversed = digits.reverse();
//   let result = parseInt(reversed.join(""), 10);
//   return result;
// }

// console.log(isPalindrom(1678761));

// Func16. 1 dan N ga sonlar ko’paytmasini qaytaruvchi factorial(N) nomli funksiya hosil qiling. Agar N manfiy bo’lib qolsa, 1 qaytarilsin. QY

// function factorial(N) {
//   if (N < 0) {
//     return 1;
//   }
//   let product = 1;
//   for (let i = 1; i <= N; i++) {
//     product = product * i;
//   }
//   return product;
// }

// console.log(factorial(5));

// Func17. 1 dan N bo’lgan sonlar ichida 3 bo’linadigan sonlar yig’indisini hisoblovchi getSum3(N) nomli dastur yozing.
// getSum3(15) => 45

// function getSum3(N) {
//   let sum = 0;
//   for (let i = 1; i <= N; i++) {
//     if (i % 3 == 0) {
//       sum = sum + i;
//     }
//   }
//   return sum;
// }

// console.log(getSum3(15));

// Func18. 1 dan N ga sonlar bo’lgan juft va toqlar sonlar yig’indisini qaytaruvchi sumOddEven(N) nomli funksiya hosil qiling. QYM
// sumOddEven(10) => 30, 25

// function sumOddEven(N) {
//   let evenSum = 0;
//   let oddSum = 0;
//   for (let i = 1; i <= N; i++) {
//     if (i % 2 == 0) {
//       evenSum = evenSum + i;
//     } else {
//       oddSum = oddSum + i;
//     }
//   }
//   console.log(evenSum, oddSum);
// }

// sumOddEven(10);

// Func19. invertTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya orqali berilgan soat, minut va sekundni T sekundga almashtiruvchi programma tuzilsin.
// invertTime(0, 6, 40) => 400

// function invertTime(H, M, S) {
//   let T = H * 60 * 60 + M * 60 + S;
//   return T;
// }

// console.log(invertTime(0, 6, 40));

// Func20. decTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya berilgan vaqtdan 1 sekund oldingi vaqtni ko’rsatsin.
// decTime(0, 6, 40) => 00:06:39

// function decTime(H, M, S) {
//   S = S - 1;
//   if (S == 0) {
//     M = M - 1;
//     if (M == 0) {
//       H = H - 1;
//     }
//   }
//   return `${H.toString().padStart(2, "0")}:${M.toString().padStart(
//     2,
//     "0"
//   )}:${S.toString().padStart(2, "0")}`;
// }

// console.log(decTime(0, 6, 40));

// Func21. Mantiqiy qiymat qaytaruvchi isLeapYear(Y) funksiyasini hosil qiling. Funksiya berilgan Y - yil kabisa yili bo'lsa true, aks holda false qiymat qaytarsin.

// function isLeapYear(Y) {
//   if ((Y % 4 == 0 && Y % 100 != 0) || Y % 400 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isLeapYear(2020));
// console.log(isLeapYear(2021));

// Func22. isLeapYear(Y) funksiyasidan foydalangan xolda, butun qiymat qaytaruvchi monthDays(M, Y) funksiyasini hosil qiling. Funksiyada berilgan Y - yilning M - oyi kunlar sonini qaytarsin.
// monthDays(2, 2020) => 28
// monthDays(3, 2021) => 31

// function monthDays(M, Y) {
//   let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   if (M == 2 && isLeapYear(Y)) {
//     return 29;
//   } else {
//     return months[M - 1];
//   }
// }

// function isLeapYear(Y) {
//   if ((Y % 4 == 0 && Y % 100 != 0) || Y % 400 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(monthDays(2, 2020)); // 29
// console.log(monthDays(3, 2021)); // 31

// Func23. monthDays funksiyasidan foydalangan xolda, prevDate (D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan oldingi sanani aniqlasin, D - kun, Y - yil, M - oyini qaytarsin. QY
// prevDate (10, 3, 2022) => 09.03.2022

// function prevDate(D, M, Y) {
//   D = D - 1;
//   if (D == 0) {
//     M = M - 1;
//     if (M == 0) {
//       Y = Y - 1;
//       M = 12;
//     }
//     D = monthDays(M, Y);
//   }
//   return `${D.toString().padStart(2, "0")}.${M.toString().padStart(
//     2,
//     "0"
//   )}.${Y.toString().padStart(4, "0")}`;
// }

// function monthDays(M, Y) {
//   let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   if (M == 2 && isLeapYear(Y)) {
//     return 29;
//   } else {
//     return months[M - 1];
//   }
// }

// function isLeapYear(Y) {
//   if ((Y % 4 == 0 && Y % 100 != 0) || Y % 400 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(prevDate(10, 3, 2022)); // 09.03.2022

// Func24. monthDays funksiyasidan foydalangan xolda, nextDate(D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan keying sanani aniqlasin, D-kun, Y yil, M - oyini qaytarsin. QY
// nextDate (10, 3, 2022) => 11.03.2022

// function nextDate(D, M, Y) {
//   D = D + 1;
//   if (D > monthDays(M, Y)) {
//     M = M + 1;
//     if (M > 12) {
//       Y = Y + 1;
//       M = 1;
//     }
//     D = 1;
//   }
//   return `${D.toString().padStart(2, "0")}.${M.toString().padStart(
//     2,
//     "0"
//   )}.${Y.toString().padStart(4, "0")}`;
// }

// function monthDays(M, Y) {
//   let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   if (M == 2 && isLeapYear(Y)) {
//     return 29;
//   } else {
//     return months[M - 1];
//   }
// }

// function isLeapYear(Y) {
//   if ((Y % 4 == 0 && Y % 100 != 0) || Y % 400 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(nextDate(10, 3, 2022)); // 11.03.2022

// Func25. N sonining bo’luvchilari soni va bo’luvchilari yi’gindisini chiqaruvchi getDividersNumberAndSum(N) nomli funksiya yozing. QYM
// getDividersNumberAndSum(12) => 6, 24

// function getDividersNumberAndSum(N) {
//   let dividersNumber = 0;
//   let dividersSum = 0;
//   for (let i = 1; i <= N; i++) {
//     if (N % i == 0) {
//       dividersNumber++;
//       dividersSum += i;
//     }
//   }
//   console.log(dividersNumber, dividersSum);
// }

// getDividersNumberAndSum(12); // 6, 28
