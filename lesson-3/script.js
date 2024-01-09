// 3) A butun son berilgan. Junlani rostlikka tekshiring: A juft son
// let num = +prompt("Enter number: ")

// if(Number.isInteger(num) && num % 2 == 0){
//     console.log("It's even number");
// } else{
//     console.log("It's not even number");
// }

// 4) Ikkita butun son berilgan. Jumlani rostlikka tekshiring. M-s a > 0 && b > 0
// let a = +prompt("Enter a number: ");
// let b = +prompt("Enter b number: ");

// if (Number.isInteger(a > 0 && b > 0)) {
//   console.log("Positive number");
// } else {
//   console.log("Negative number");
// }

// 5) 3 ta son berilgan a,b,c. a bdan katta b c dan katta rostlikka tekshiring

// let a = +prompt("Enter a number: ");
// let b = +prompt("Enter b number: ");
// let c = +prompt("Enter c number: ");

// if (a > b && b > c) {
//   console.log("Katta son");
// } else {
//   console.log("Katta son emas");
// }

// 6) a, b, c, son berilgan. B son a va c sonlarni orasida yotadi.
// b a dan kotta c dan kichkina.

// let a = +prompt("Enter a number: ");
// let b = +prompt("Enter b number: ");
// let c = +prompt("Enter c number: ");

// if(a < b && b < c){
//     console.log(true)
// } else{
//     console.log(false);
// }

// 7) a, b sonlar berilgan sonlarni toq songa tekshiring.

// let a = +prompt("Enter a number: ");
// let b = +prompt("Enter b number: ");
// let nums = a && b;

// if (Number.isInteger(nums) && nums % 2 == 1) {
//   console.log("Odd numbers");
// } else if (Number.isInteger(nums) && nums % 2 == 0) {
//   console.log("Even numbers");
// }

// 8) a,b,c,d sonlar berilgan barchasi musbat

// let a = +prompt("Enter a number: ")
// let b = +prompt("Enter b number: ")
// let c = +prompt("Enter c number: ")
// let d = +prompt("Enter d number: ")
// let nums = a && b && c && d;

// if (nums > 0) {
//   console.log("Musbat");
// } else{
//     console.log("Manfiy");
// }

// Homework

// 9) a,b,c sonlar berilgan kamida ikkitasi musbat berilgan

// let a = +prompt("Enter a number: ");
// let b = +prompt("Enter b number: ");
// let c = +prompt("Enter c number: ");

// if ((a > 0 && b > 0) || (a > 0 && c > 0) || (b > 0 && c > 0)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 10) hafta kunlari berilgan raqamga qarab hafta kunlarini nomini chiqaring

// let num = +prompt("Enter number: ");

// if ((num == 1)) {
//   console.log("Sunday");
// } else if ((num == 2)) {
//   console.log("Monday");
// } else if ((num == 3)) {
//   console.log("Tuesday");
// } else if ((num == 4)) {
//   console.log("Wednesday");
// } else if ((num == 5)) {
//   console.log("Thursday");
// } else if ((num == 6)) {
//   console.log("Friday");
// } else if ((num == 7)) {
//   console.log("Saturday");
// } else {
//   console.log("There is no such day of the week");
// }

// 11) amaliyotda qilingan

// 12) Butun son berilgan agar son musbat bo'lsa unda sonni bittaga oshiring aks xolda 1taga kamaytiring

// let num = +prompt("Enter number: ");

// if (Number.isInteger(num) && num > 0) {
//   num += 1;
//   console.log(num);
// } else if (Number.isInteger(num) && (num == 0 || num == -0)) {
//   console.log("0 has no negative or positive sign");
// } else {
//   num -= 1;
//   console.log(num);
// }

// 13) Butun son berilgan agar son musbat bo'lsa sonni 3 ga oshiring manfiy bo'lsa unda 2ga kamaytiring

// let num = +prompt("Enter number: ");

// if (Number.isInteger(num) && num > 0) {
//   num += 3;
//   console.log(num);
// } else if (Number.isInteger(num) && (num == 0 || num == -0)) {
//   console.log("0 has no negative or positive sign");
// } else {
//   num -= 2;
//   console.log(num);
// }

// 14) Ikkita butun son berilgan kattasin aniqlovchi dastur tuzing

// let a = +prompt("Enter first number: ");
// let b = +prompt("Enter second number: ");
// let nums = a && b;

// if (Number.isInteger(nums) && a > b) {
//   console.log(a);
// } else if (Number.isInteger(nums) && a < b) {
//   console.log(b);
// } else {
//   console.log(false);
// }

// 15) amaliyotda ishlangan

// 16) 3 ta son berilgan eng kichigini aniqlovchi dastur tuzing

// let a = +prompt("Enter a number: ");
// let b = +prompt("Enter b number: ");
// let c = +prompt("Enter c number: ");

// console.log(Math.min(a, b, c));

// 17) amaliyotda ishlangan

// 18) Bahoga qarab stependiyani aniqlovchi dastur tuzing

// let num = +prompt("Enter your point: ");

// if (num == 5) {
//   console.log("Sizning stipendiyangiz 500ming so'm");
// } else if (num == 4) {
//   console.log("Sizning stipendiyangiz 300ming so'm");
// } else if (num == 3) {
//   console.log("Sizning stipendiyangiz 100ming so'm");
// } else if (num == 2) {
//   console.log("Sizning stipendiyangiz 50ming so'm");
// } else if (num == 1) {
//   console.log("Sizning stipendiya berilmaydi");
// } else {
//   console.log("Bunday baholash tizimi yo'q");
// }

// 19) Butun son berilgan shu songa qarab toq musbat, toq manfiy, juft musbat, juft manfiy deb chiqaruvchi dastur tuzing

// let num = +prompt("Enter number: ");

// if (num > 0 && num % 2 == 1) {
//   console.log("Odd and positive number");
// } else if (num < 0 && num % 2 == -1) {
//   console.log("Odd and negative number");
// } else if (num > 0 && num % 2 == 0) {
//   console.log("Even and positive number");
// } else if (num < 0 && num % 2 == 0) {
//   console.log("Even and negative number");
// } else {
//   console.log("equal to zero");
// }

// 20) asosiy darsda ishlangan.

// 21) 3 ta butun son berilgan jumlani rostlikkar tekshiring. A <= B <= C

// let a = +prompt("Enter a number: ");
// let b = +prompt("Enter b number: ");
// let c = +prompt("Enter c number: ");

// if(a <= b && b <= c){
//     console.log(true)
// } else{
//     console.log(false);
// }

// 22) ikki butun son berilgan ikki sondan faqat 1tasi toq son hisoblanadi
// let a = +prompt("Enter a number: ");
// let b = +prompt("Enter b number: ");

// if (
//   (Number.isInteger(a) && a % 2 == 1 && b % 2 == 0) ||
//   Number.isInteger(b) & (a % 2 == 0 && b % 2 == 1)
// ) {
//   console.log("Ikkita sondan faqat bittasi toq");
// } else if (Number.isInteger(a) && a == b) {
//   console.log("Ikkita sonlar teng");
// } else {
//   console.log("Bittasi toq emas");
// }

// 23) a,b,c sonlar berilgan har biri musbat son

// let a = +prompt("Enter a number: ");
// let b = +prompt("Enter b number: ");
// let c = +prompt("Enter c number: ");

// if (a > 0 && b > 0 && c > 0) {
//   console.log("All numbers are positive");
// } else {
//   console.log("Not all numbers are positive");
// }

// 24) a,b,c sonlardan biri musbat son
// let a = +prompt("Enter a number: ");
// let b = +prompt("Enter b number: ");
// let c = +prompt("Enter c number: ");

// if (a > 0 || b > 0 || c > 0) {
//   console.log("a, b, c sonlardan biri musbat son");
// } else {
//   console.log("a, b, c sonlardan biri musbat son emas");
// }

// 25) 3 xonali son berilgan har bir raqamlari har xil
// let num = +prompt("Enter number:");

// let birlik = num % 10;
// let onlik = Math.floor(num / 10) % 10;
// let yuzlik = Math.floor(num / 100);

// if (birlik != onlik && birlik != yuzlik && onlik != yuzlik) {
//   console.log("Har bir raqamlari har xil");
// } else {
//   console.log("Har bir raqamlar bir xil");
// }

// 26) 3 xonali son berilgan raqamlari ketma ket o'sib boruvchi joylashgan

// let num = +prompt("Enter number:");

// let birlik = num % 10;
// let onlik = Math.floor(num / 10) % 10;
// let yuzlik = Math.floor(num / 100);

// if (yuzlik < onlik && onlik < birlik) {
//   console.log("Raqamlari ketma-ket o'sib borgan");
// } else {
//   console.log("Raqamlari ketma-ket o'sib bormagan");
// }

// 27) Kompyuter nomiga qarab kompyuter summasini chiqaruvchi dastur yarating
// let laptop = prompt("Enter your favorite laptop: ");

// if (laptop == "Macbook") {
//   console.log("Kompyuter summasi 10 000 000 so'm dan oshiq");
// } else if (laptop == "HP") {
//   console.log("Kompyuter summasi 8 500 000 so'm");
// } else if (laptop == "Dell") {
//   console.log("Kompyuter summasi 5 800 000 so'm");
// } else if (laptop == "Asus") {
//   console.log("Kompyuter summasi 4 700 000 so'm");
// } else if (laptop == "Acer") {
//   console.log("Kompyuter summasi 6 900 000 so'm");
// } else if (laptop == "Lenovo") {
//   console.log("Kompyuter summasi 6 000 000 so'm");
// } else {
//   console.log("Bunday kompyuter nomi mavjud emas");
// }
