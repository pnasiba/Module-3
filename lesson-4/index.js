// Darsda ishlangan

// if2

// let a = +prompt("Enter a number: ");
// let b = +prompt("Enter b number: ");
// let c = +prompt("Enter c number: ");
// let poscount = 0;
// let negcount = 0;

// a > 0 ? poscount++ : negcount++;
// b > 0 ? poscount++ : negcount++;
// c > 0 ? poscount++ : negcount++;

// Homework

// if1 Butun son berilgan. Agar, berilgan son musbat bo' Isa, 1 ga oshirilsin, aks holda
//  o' zgartirilmasin. Hosil bo Igan sonni ekranga chigaruvchi programma tuzilsin.

// let num = +prompt("Enter number:");

// if (num > 0) {
//   console.log(++num);
// } else {
//   console.log(num);
// }

// if2. Butun son berilgan. Agar, berilgan son musbat bo'lsa, 1 ga oshiring, agar
// manfiy bo'lsa 2 ga kamaytiring. Agar 0 ga teng bo'Isa, 10 ni o' zlashtirsin. Hosil
// bo lgan sonni ekranga chiqaruvchi programma tuzilsin.

// let num = 0;

// if (num > 0) {
//   console.log(++num);
// } else if (num == 0) {
//   console.log((num += 10));
// } else {
//   console.log((num -= 2));
// }

// if3. Uchta musbat son berilgan. Shu sonlar orasidan nechta butun son borligini
// aniqlovchi programma tuzilsin.

// let a = 4.0;
// let b = 6;
// let c = 4.9;

// let count = 0;

// if (Number.isInteger(a)) {
//   count++;
// }

// if (Number.isInteger(b)) {
//   count++;
// }

// if (Number.isInteger(c)) {
//   count++;
// }

// console.log("There are " + count + " integers between the three numbers.");

// if4. Ikkita butun son berilgan. Shu sonlarning kattasini aniqlovchi programma
// tuzilsin.

// let a = -9;
// let b = 20;
// 1-usul
// console.log(Math.max(a, b));

// 2-usul
// if (a > b) {
//   console.log("Katta son: " + a);
// } else {
//   console.log("Katta son: " + b);
// }

// if5. Ikkita butun son berilgan. Shu sonarning kichigini tartib raqamini aniqlovchi
// programma tuzilsin.

// let a = 70;
// let b = 23;

// let max;

// if (a > b) {
//   max = a;
// } else {
//   max = b;
// }

// console.log("Max number: " + max);

// let min, order;

// if (a < b) {
//   min = a;
//   order = 1;
// } else {
//   min = b;
//   order = 2;
// }

// console.log("Min number: " + min);
// console.log("Order: " + order);

// if6. Ikkita butun son berilgan. Shu sonlarning avval kattasini keyin kichigini
// ekranga chigaruvchi programma tuzilsin.

// let a = 15;
// let b = 8;

// let max, min;

// if (a > b) {
//   max = a;
//   min = b;
// } else {
//   max = b;
//   min = a;
// }

// console.log("Max number: " + max);
// console.log("Min number: " + min);

// if7. A va B hagiqiy sonlari beringan. Shu sonlarni shunday o'zgartirish kerakki, A
// son kichik B son katta bo'Isin. A va B ning qiymati ekranga chigarilsin.

// let A = 9;
// let B = 8;

// let temp;

// temp = A;
// A = B;
// B = temp;

// console.log("A: " + A);
// console.log("B: " + B);

// if8. A va B butun sonlari berilgan. Agar o' zgaruvchilar o' zaro teng bo Imasa, A va
// B o'zgaruvchilari ularning yig'indisini o'zlashtirsin. Agar teng bo'lsa, 0 ni
// o' zlashtirsin. A va B ning qiymati ekranga chiqarilsin.

// let a = 9;
// let b = 8;

// if (a != b) {
//   a += b;
//   b += a;
// } else {
//   a = 0;
//   b = 0;
// }

// console.log("A = " + a);
// console.log("B = " + b);

// if9. A va B butun sonlari berilgan. Agar o' zgaruvchilar o' zaro teng bo Imasa, A va
// B bu sonlarning kattasini o' zlashtirsin. Agar teng bo'lsa. 0 ni o' zlashtirsin. A va B ning qiymati ekranga chiqarilsin.

// let a = 7;
// let b = 9;

// if (a != b) {
//   let max = a > b ? a : b;
//   a = max;
//   b = max;
// } else {
//   a = 0;
//   b = 0;
// }

// console.log("A = " + a);
// console.log("B = " + b);

// if10. Uchta son berilgan. Shu sonlarni kichigini aniqlovchi programma tuzilsin.

// let a = 9;
// let b = 2;
// let c = -1;

// 1-usul
// console.log(Math.min(a, b, c));

// 2-usul

// let min = a < b ? (a < c ? a : c) : b < c ? b : c;

// console.log("Min number: " + min);

// 3-usul

// let min;
// if (a < b && a < c) {
//   min = a;
// } else if (b < a && b < c) {
//   min = b;
// } else {
//   min = c;
// }

// console.log("Min number: " + min);

// if11. Uchta son berilgan. Shu sonlarni o ratachasi (ya'ni katta va kichik sonlar
// orasidagi son) ni aniqlovchi programma tuzilsin.
// let a = 9;
// let b = 7;
// let c = 4;

// let mid =
//   (a > b && a < c) || (a < b && a > c)
//     ? a
//     : (b > a && b < c) || (b < a && b > c)
//     ? b
//     : c;

// console.log("Middle number: " + mid);

// if12. Uchta son berilgan. Shu sonlarning yig'indisi eng katta bo'ladigan ikkitasini
// ekranga chiqaruvchi programma tuzilsin.

// let a = 11;
// let b = 6;
// let c = 8;

// let min;

// if (a < b && a < c) {
//   min = a;
// } else if (b < a && b < c) {
//   min = b;
// } else {
//   min = c;
// }
// let maxSum = a + b + c - min;

// console.log("Yig'indisi eng katta bo'ladigan ikki son: " + (maxSum - a) + " va " + a);

// if13. A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o' sish tartibida berilgan
// bo'Isa, sonarni ikkilantiring, aks holda sonlarni ishorasi o'zgartirilsin. A, B, C ning qiymatlari ekranga chiqarilsin
// let a = 1;
// let b = 2;
// let c = 4;

// if (a < b && b < c) {
//   a *= 2;
//   b *= 2;
//   c *= 2;
// } else {
//   a = -a;
//   b = -b;
//   c = -c;
// }

// console.log("A = " + a);
// console.log("B = " + b);
// console.log("C = " + c);

// if14. A, B, C hagiqiy sonlari berilgan. Agar berilgan sonlar o'sish yoki kamayish
// tartibida berilgan bo Isa, sonlarni ikkilantiring, aks holda sonlarni ishorasi
// o'zgartirilsin. A, B, C ning qiymatlari ekranga chiqarilsin.

// let A = 10;
// let B = 8;
// let C = 8;

// let min, max, mid;
// if (A < B && A < C) {
//   min = A;
// } else if (B < A && B < C) {
//   min = B;
// } else {
//   min = C;
// }

// if (A > B && A > C) {
//   max = A;
// } else if (B > A && B > C) {
//   max = B;
// } else {
//   max = C;
// }
// mid = A + B + C - min - max;
// if ((A == min && C == max) || (A == max && C == min)) {
//   A = A * 2;
//   B = B * 2;
//   C = C * 2;
// } else {
//   A = -A;
//   B = -B;
//   C = -C;
// }

// console.log("A = " + A);
// console.log("B = " + B);
// console.log("C = " + C);

// if15. To'rtta butun son berilgan. Shu sonlarni uchtasi o' zaro teng, qolgan bittasini
// tartib ragami aniqlansin.

// let a = 10;
// let b = 10;
// let c = 8;
// let d = 10;

// let order;
// if (a == b && a == c && a == d) {
//   order = 0;
// } else if (a != b && a != c && a != d) {
//   order = 1;
// } else if (b != a && b != c && b != d) {
//   order = 2;
// } else if (c != a && c != b && c != d) {
//   order = 3;
// } else {
//   order = 4;
// }

// console.log("Oddiy sonning tartib raqami: " + order);

// if16. x hagiqiy soni berilgan. Quyidagi funksiya hisoblansin.
// agar x< 0 bo'lsa -x;
// agar 0<*<2; x^2
// agar x≥2 bo'lsa 4

// let x = 1.5;

// let y;
// if (x < 0) {
//   y = -x;
// } else if (x < 2) {
//   y = x * x;
// } else {
//   y = 4;
// }

// console.log("y = " + y);

// if17. Yil berilgan (musbat butun son). Berilgan yilda nechta kun borligini
// aniqlovchi programma tuzilsin. Kabisa yilida 366 kun bor, kabisa bo' lmagan yilda
// 365 kun bor. Kabisa yil deb 4 ga karrali yillarga aytiladi. Lekin 100 ga karrali yillar
// ichida fagat 400 ga karrali bo'lganlari kabisa yil hisoblanadi. Masalan 300, 1300 va
// 1900 kabisa yili emas. 1200 va 2000 kabisa yili.
// yilni kiritamiz
// let year = 2020;

// let days;
// if (year % 4 == 0) {
//   days = 366;
//   if (year % 100 == 0) {
//     days = 365;
//     if (year % 400 == 0) {
//       days = 366;
//     }
//   }
// } else {
//   days = 365;
// }

// console.log("Yilda " + days + " kun bor");

// if18. 1-999 oraliqdagi sonlar berilgan. Berilgan sonni "ikki xonali juft son", "uch
// xonali toq son" va x.k. ekranga yozadigan programma tuzilsin.

// let num = 124;

// let str = num.toString();

// if (str.length == 2) {
//   if (str[1] % 2 == 0) {
//     console.log(num + " - ikki xonali juft son");
//   } else {
//     console.log(num + " - ikki xonali toq son");
//   }
// } else if (str.length == 3) {
//   if (str[2] % 2 == 0) {
//     console.log(num + " - uch xonali juft son");
//   } else {
//     console.log(num + " - uch xonali toq son");
//   }
// } else {
//   if (str[0] % 2 == 0) {
//     console.log(num + " - bitta xonali juft son");
//   } else {
//     console.log(num + " - bitta xonali toq son");
//   }
// }

// Casel. K butun soni berilgan. Baho natijalarini chiqaruvchi programma
// tuzing.(1-yomon, 2-goniqarsiz, 3-gonigarli, 4-yahshi, 5-a'lo). Agar k soni 1-5
// gacha oraliqga tegishli bo' Imasa "xato" deb chiqarilsin.

// let k = 9;

// switch (k) {
//   case 1:
//     console.log("Bad point");
//     break;
//   case 2:
//     console.log("Qoniqarsi");
//     break;
//   case 3:
//     console.log("Qoniqarli");
//     break;
//   case 4:
//     console.log("Yaxshi");
//     break;
//   case 5:
//     console.log("Alo");
//     break;
//   default:
//     console.log("Xato");
//     break;
// }

// Case2. Oy ragamini berilgan. Kiritilgan oy qaysi fasiga tegishli ekanligini
// chigaruvchi programma tuzilsin. (Masalan: 2 chi oy, "qish")
// let m = 12;
// switch (m) {
//   case 1:
//   case 2:
//   case 12:
//     console.log("Qish");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Bahor");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Yoz");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Kuz");
//   default:
//     console.log("Bunday fasl yo'q");
//     break;
// }

// Case3. Oy raqami berilgan. Shu oyda nechta kun borligini aniqlovchi programma
// tuzilsin.

// var oy = 1;

// var kunlar = 0;

// switch (oy) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     kunlar = 31;
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     kunlar = 30;
//     break;
//   case 2:
//     var yil = new Date().getFullYear();
//     kunlar = yil % 4 == 0 && (yil % 100 != 0 || yil % 400 == 0) ? 29 : 28;
//     break;
//   default:
//     console.log("Xato: oy raqami 1 dan 12 gacha bo'lishi kerak");
// }

// if (kunlar > 0) {
//   console.log(oy + "-oyda " + kunlar + " kun bor");
// }

// Case4. Uzinlik birliklari quyidagi tartibda berilgan. 1-desimetr, 2-kilometr, 3-metr,
// 4-millimeter, 5- santimetr. Uzunlik birligini bildiruvchi son berilgan (1 - 5
// oraliqda) va shu birlikdagi kesma uzunligi berilgan (haqiqiy son). Kesmaning
// uzunligini metrlarda ifodalofchi programma tuzilsin.

// let birlik = 2;

// let kesma = 5;

// let metr = 0;

// switch (birlik) {
//   case 1:
//     metr = kesma / 10;
//     break;
//   case 2:
//     metr = kesma * 1000;
//     break;
//   case 3:
//     metr = kesma;
//     break;
//   case 4:
//     metr = kesma / 1000;
//     break;
//   case 5:
//     metr = kesma / 100;
//     break;
//   default:
//     console.log("Xato: uzunlik birligi 1 dan 5 gacha bo'lishi kerak");
// }

// if (metr > 0) {
//   console.log(kesma + " " + birlik + "-li uzunlik " + metr + " metrga teng");
// }

// Cases.5 Og'irlik birliklari quyidagi tartibda berilgan. 1-kilogramm, 2-milligramm,
// 3-gramm, 4-tonna, 5- sentner. Og'irlik birligini bildiruvchi soni berilgan va shu
// birlikdagi og' irlik qiymati berilgan. Og'irlikni kilogramda ifodalofchi programma
// tuzilsin.

// let birlik = 2;
// let ogirlik = 500;
// let kilogram = 0;

// switch (birlik) {
//   case 1: // Kilogramm
//     kilogram = ogirlik; // 1 kilogramm = 1 kilogramm
//     break;
//   case 2: // Milligramm
//     kilogram = ogirlik / 1000000; // 1 milligramm = 0.000001 kilogramm
//     break;
//   case 3: // Gramm
//     kilogram = ogirlik / 1000; // 1 gramm = 0.001 kilogramm
//     break;
//   case 4: // Tonna
//     kilogram = ogirlik * 1000; // 1 tonna = 1000 kilogramm
//     break;
//   case 5: // Sentner
//     kilogram = ogirlik * 100; // 1 sentner = 100 kilogramm
//     break;
//   default: // Boshqa qiymatlar uchun
//     console.log("Xato: og'irlik birligi 1 dan 5 gacha bo'lishi kerak");
// }

// if (kilogram > 0) {
//   console.log(
//     ogirlik + " " + birlik + "-li og'irlik " + kilogram + " kilogrammga teng"
//   );
// }

// Case6. Sanani bildiruvchi ikkita butun son berilgan D (kun) va M (oy). (Kabisa
// bo' Imagan yil sanasi kiritiladi). Berilgan sanani ifodalovchi programma tuzilsin.
// Kabisa yilida 366 kun, kabisa bo'lmagan yilda 365 kun bor bo'ladi.

// let D = 23;
// let M = 6;
// let Y = 2024;
// let sana = "";

// switch (M) {
//   case 1: // Yanvar
//     sana = D + " Yanvar " + Y;
//     break;
//   case 2: // Fevral
//     sana = D + " Fevral " + Y;
//     break;
//   case 3: // Mart
//     sana = D + " Mart " + Y;
//     break;
//   case 4: // Aprel
//     sana = D + " Aprel " + Y;
//     break;
//   case 5: // May
//     sana = D + " May " + Y;
//     break;
//   case 6: // Iyun
//     sana = D + " Iyun " + Y;
//     break;
//   case 7: // Iyul
//     sana = D + " Iyul " + Y;
//     break;
//   case 8: // Avgust
//     sana = D + " Avgust " + Y;
//     break;
//   case 9: // Sentyabr
//     sana = D + " Sentyabr " + Y;
//     break;
//   case 10: // Oktyabr
//     sana = D + " Oktyabr " + Y;
//     break;
//   case 11: // Noyabr
//     sana = D + " Noyabr " + Y;
//     break;
//   case 12: // Dekabr
//     sana = D + " Dekabr " + Y;
//     break;
//   default: // Boshqa qiymatlar uchun
//     sana = "Xato: oy raqami 1 dan 12 gacha bo'lishi kerak";
// }

// console.log(sana);

// Case7. Ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo' Imagan yil sanasi
// kiritiladi). Berilgan sanadan keyingi sanani ifodalovchi programma tuzilsin.

// let D = 17;
// let M = 1;
// let Y = 2024;
// let keyingiSana = "";

// switch (M) {
//   case 1: // Yanvar
//     if (D < 31) {
//       keyingiSana = D + 1 + " Yanvar " + Y; // Kunni 1 ga oshiramiz
//     } else {
//       keyingiSana = "1 Fevral " + Y; // Oyni o'zgartiramiz
//     }
//     break;
//   case 2: // Fevral
//     var fevralKunlari = Y % 4 == 0 && (Y % 100 != 0 || Y % 400 == 0) ? 29 : 28;
//     if (D < fevralKunlari) {
//       keyingiSana = D + 1 + " Fevral " + Y; // Kunni 1 ga oshiramiz
//     } else {
//       keyingiSana = "1 Mart " + Y; // Oyni o'zgartiramiz
//     }
//     break;
//   case 3: // Mart
//     if (D < 31) {
//       keyingiSana = D + 1 + " Mart " + Y; // Kunni 1 ga oshiramiz
//     } else {
//       keyingiSana = "1 Aprel " + Y; // Oyni o'zgartiramiz
//     }
//     break;
//   case 4: // Aprel
//     if (D < 30) {
//       keyingiSana = D + 1 + " Aprel " + Y; // Kunni 1 ga oshiramiz
//     } else {
//       keyingiSana = "1 May " + Y; // Oyni o'zgartiramiz
//     }
//     break;
//   case 5: // May
//     if (D < 31) {
//       keyingiSana = D + 1 + " May " + Y; // Kunni 1 ga oshiramiz
//     } else {
//       keyingiSana = "1 Iyun " + Y; // Oyni o'zgartiramiz
//     }
//     break;
//   case 6: // Iyun
//     if (D < 30) {
//       keyingiSana = D + 1 + " Iyun " + Y; // Kunni 1 ga oshiramiz
//     } else {
//       keyingiSana = "1 Iyul " + Y; // Oyni o'zgartiramiz
//     }
//     break;
//   case 7: // Iyul
//     if (D < 31) {
//       keyingiSana = D + 1 + " Iyul " + Y; // Kunni 1 ga oshiramiz
//     } else {
//       keyingiSana = "1 Avgust " + Y; // Oyni o'zgartiramiz
//     }
//     break;
//   case 8: // Avgust
//     if (D < 31) {
//       keyingiSana = D + 1 + " Avgust " + Y; // Kunni 1 ga oshiramiz
//     } else {
//       keyingiSana = "1 Sentyabr " + Y; // Oyni o'zgartiramiz
//     }
//     break;
//   case 9: // Sentyabr
//     if (D < 30) {
//       keyingiSana = D + 1 + " Sentyabr " + Y; // Kunni 1 ga oshiramiz
//     } else {
//       keyingiSana = "1 Oktyabr " + Y; // Oyni o'zgartiramiz
//     }
//     break;
//   case 10: // Oktyabr
//     if (D < 31) {
//       keyingiSana = D + 1 + " Oktyabr " + Y; // Kunni 1 ga oshiramiz
//     } else {
//       keyingiSana = "1 Noyabr " + Y; // Oyni o'zgartiramiz
//     }
//     break;
//   case 11: // Noyabr
//     if (D < 30) {
//       keyingiSana = D + 1 + " Noyabr " + Y; // Kunni 1 ga oshiramiz
//     } else {
//       keyingiSana = "1 Dekabr " + Y; // Oyni o'zgartiramiz
//     }
//     break;
//   case 12: // Dekabr
//     if (D < 31) {
//       keyingiSana = D + 1 + " Dekabr " + Y; // Kunni 1 ga oshiramiz
//     } else {
//       keyingiSana = "1 Yanvar " + (Y + 1); // Oy va yilni o'zgartiramiz
//     }
//     break;
//   default: // Boshqa qiymatlar uchun
//     keyingiSana = "Xato: oy raqami 1 dan 12 gacha bo'lishi kerak";
// }

// console.log(keyingiSana);


// Case8. Robot faqat to 'rtta tomonga ko' cha oladi ("s"-shimol, "j"-janub, "a"-sharq,
// "g"-g'arb) va uchta ragamli kamanda: 0-harakni davom ettir, 1-chapga buril,
// 2-0 'ngga buril. Y - robot yo nalishi va K - kamanda berilgan. Berilgan kamanda
// bajarilgandan keying robot holatini aniqlovchi programma tuzilsin.

// let Y = "s";  
// let K = 1; 
// let holat = "";  

// switch (K) {
//   case 0: 
//     holat = "Robot harakatda va " + Y + " tomonga yo'naltirilgan";
//     break;
//   case 1: // Chapga buril
//     switch (Y) {
//       case "s": // Shimol
//         Y = "g"; // G'arb
//         break;
//       case "j": // Janub
//         Y = "a"; // Sharq
//         break;
//       case "a": // Sharq
//         Y = "s"; // Shimol
//         break;
//       case "g": // G'arb
//         Y = "j"; // Janub
//         break;
//       default: // Boshqa qiymatlar uchun
//         Y = "Xato: yo'nalish s, j, a yoki g bo'lishi kerak";
//     }
//     holat = "Robot chapga burildi va " + Y + " tomonga yo'naltirilgan";
//     break;
//   case 2: // O'nga buril
//     switch (Y) {
//       case "s": // Shimol
//         Y = "a"; // Sharq
//         break;
//       case "j": // Janub
//         Y = "g"; // G'arb
//         break;
//       case "a": // Sharq
//         Y = "j"; // Janub
//         break;
//       case "g": // G'arb
//         Y = "s"; // Shimol
//         break;
//       default: // Boshqa qiymatlar uchun
//         Y = "Xato: yo'nalish s, j, a yoki g bo'lishi kerak";
//     }
//     holat = "Robot o'nga burildi va " + Y + " tomonga yo'naltirilgan";
//     break;
//   default: // Boshqa qiymatlar uchun
//     holat = "Xato: kamanda 0, 1 yoki 2 bo'lishi kerak";
// }

// console.log(holat);


// Case9. O'yin kartasi turlari berilgan 1-g'isht, 2-olma, 3-chillak, 4-qarg'a. 10 lik
// kartadan katta kartalar quyidagi qiymatlarni o zlashtirgan: 11-valet, 12-dama,13-qirol, 14-tuz. Ikkita butun son berilgan N-karta giymati (6≤ N ≤14), M-karta
// turi(1<M <4) kiritilganda karta nomlarini (masalan: "olti qarg'a") chiqarib
// beruvchi programma tuzilsin.

// let N = 12; 
// let M = 1;  
// let karta = "";  
// switch (N) {
//   case 6: // Olti
//     karta = "Olti";
//     break;
//   case 7: // Yetti
//     karta = "Yetti";
//     break;
//   case 8: // Sakkiz
//     karta = "Sakkiz";
//     break;
//   case 9: // To'qqiz
//     karta = "To'qqiz";
//     break;
//   case 10: // O'n
//     karta = "O'n";
//     break;
//   case 11: // Valet
//     karta = "Valet";
//     break;
//   case 12: // Dama
//     karta = "Dama";
//     break;
//   case 13: // Qirol
//     karta = "Qirol";
//     break;
//   case 14: // Tuz
//     karta = "Tuz";
//     break;
//   default: // Boshqa qiymatlar uchun
//     karta = "Xato: karta qiymati 6 dan 14 gacha bo'lishi kerak";
// }

// if (karta != "Xato: karta qiymati 6 dan 14 gacha bo'lishi kerak") {
//   switch (M) {
//     case 1: // G'isht
//       karta += " G'isht";
//       break;
//     case 2: // Olma
//       karta += " Olma";
//       break;
//     case 3: // Chillak
//       karta += " Chillak";
//       break;
//     case 4: // Qarg'a
//       karta += " Qarg'a";
//       break;
//     default: // Boshqa qiymatlar uchun
//       karta = "Xato: karta turi 1 dan 4 gacha bo'lishi kerak";
//   }
// }

// console.log(karta);


// Case10. O'quv masalalarini aniqlovchi 10-40 gacha butun son berilgan. Son
// kiritilganda unga mos so zlarda ifodalovchi programma tuzilsin. ("yigirmata
// masala", "o'n uchta masala" va h.k.)


// let son = 25; 
// let soz = "";  

// switch (Math.floor (son / 10)) {
//   case 1:  
//     switch (son % 10) {
//       case 0: // 10
//         soz = "O'n";
//         break;
//       case 1: // 11
//         soz = "O'n bir";
//         break;
//       case 2: // 12
//         soz = "O'n ikki";
//         break;
//       case 3: // 13
//         soz = "O'n uch";
//         break;
//       case 4: // 14
//         soz = "O'n to'rt";
//         break;
//       case 5: // 15
//         soz = "O'n besh";
//         break;
//       case 6: // 16
//         soz = "O'n olti";
//         break;
//       case 7: // 17
//         soz = "O'n yetti";
//         break;
//       case 8: // 18
//         soz = "O'n sakkiz";
//         break;
//       case 9: // 19
//         soz = "O'n to'qqiz";
//         break;
//       default: // Boshqa qiymatlar uchun
//         soz = "Xato: son 10 dan 19 gacha bo'lishi kerak";
//     }
//     break;
//   case 2: // 20-29 gacha bo'lgan sonlar
//     switch (son % 20) {
//       case 0: // 20
//         soz = "Yigirma";
//         break;
//       case 1: // 21
//         soz = "Yigirma bir";
//         break;
//       case 2: // 22
//         soz = "Yigirma ikki";
//         break;
//       case 3: // 23
//         soz = "Yigirma uch";
//         break;
//       case 4: // 24
//         soz = "Yigirma to'rt";
//         break;
//       case 5: // 25
//         soz = "Yigirma besh";
//         break;
//       case 6: // 26
//         soz = "Yigirma olti";
//         break;
//       case 7: // 27
//         soz = "Yigirma yetti";
//         break;
//       case 8: // 28
//         soz = "Yigirma sakkiz";
//         break;
//       case 9: // 29
//         soz = "Yigirma to'qqiz";
//         break;
//       default: // Boshqa qiymatlar uchun
//         soz = "Xato: son 20 dan 29 gacha bo'lishi kerak";
//     }
//     break;
//   case 3: // 30-39 gacha bo'lgan sonlar
//     switch (son % 30) {
//       case 0: // 30
//         soz = "O'ttiz";
//         break;
//       case 1: // 31
//         soz = "O'ttiz bir";
//         break;
//       case 2: // 32
//         soz = "O'ttiz ikki";
//         break;
//       case 3: // 33
//         soz = "O'ttiz uch";
//         break;
//       case 4: // 34
//         soz = "O'ttiz to'rt";
//         break;
//       case 5: // 35
//         soz = "O'ttiz besh";
//         break;
//       case 6: // 36
//         soz = "O'ttiz olti";
//         break;
//       case 7: // 37
//         soz = "O'ttiz yetti";
//         break;
//       case 8: // 38
//         soz = "O'ttiz sakkiz";
//         break;
//       case 9: // 39
//         soz = "O'ttiz to'qqiz";
//         break;
//       default: // Boshqa qiymatlar uchun
//         soz = "Xato: son 30 dan 39 gacha bo'lishi kerak";
//     }
//     break;
//   case 4: // 40 gacha bo'lgan sonlar
//     switch (son % 40) {
//       case 0: // 40
//         soz = "Qirq";
//         break;
//       default: // Boshqa qiymatlar uchun
//         soz = "Xato: son 40 dan kichik yoki teng bo'lishi kerak";
//     }
//     break;
//   default: // Boshqa qiymatlar uchun
//     soz = "Xato: son 10 dan 40 gacha bo'lishi kerak";
// }

// if (soz != "Xato: son 10 dan 40 gacha bo'lishi kerak" && soz != "Xato: son 40 dan kichik yoki teng bo'lishi kerak") {
//   soz += "ta masala";
// }

// console.log(soz);


