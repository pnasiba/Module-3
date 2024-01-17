# Repetition of topics

1. **Logical operator**
2. **Nullish Coalescing Operator**
3. **Conditional (ternory operator)**
4. **Scopes**
5. **Loops**
6. **Function**

<br>

## Logical operator

```
&& (and) -- first falsy, else the last
|| (or) -- first truthy, else the last

console.log(true && 1); --> 1
console.log(true || (11 * "" && 12)); --> true
```

<br>

## Nullish Coalescing Operator

```
console.log(null ?? "yes"); --> yes
```

- Qachonki chap tomonda **null** yoki **undefined** bo'lsa, o'ng tomondegini chiqarib beradi. Agar **console.log(12 ?? "yes"); -> bo'lsa, 12 chiqadi.**

<br>

## Conditional operator

- Ternory operator

```
let cond = 1; --> truthy
console.log(cond ? "Yes" : "No");
```

- Agar **cond** _true_ bo'lsa, **"Yes"** chiqadi, aks holda **"No"** chiqadi.

<br>

## Scopes

**JavaScript variables have 3 types of scope:**

- Block scope
- Function scope
- Global scope

<br>

## Loops

- **for** -- parametrli
- **while** -- shart oldn bajariladi.
- **do while** -- bajarib k-n tekrishadi.

```
for (let i = 0; i < 10; i++) {
    console.log(i);
} --> 1, 2, 3, 4, 5, 6, 7, 8, 9
```

<br>

- The **break** statement "jumps out" of a loop. <br>
- The **continue** statement "jumps over" one iteration in the loop.

<br>

```
let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
} --> The number is 0
      The number is 1
      The number is 2
      The number is 3
      The number is 4
      The number is 5
      The number is 6
      The number is 7
      The number is 8
      The number is 9
```

<br>
<hr>
<br>

```
let text = ""
let i = 0;

do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 10); --> The number is 0
                    The number is 1
                    The number is 2
                    The number is 3
                    The number is 4
                    The number is 5
                    The number is 6
                    The number is 7
                    The number is 8
                    The number is 9

```

<br><br>

## Function

<br>

- **Function Decloration**
- **Funtion Expression**
- **Arrow Function**
- **....**

<br><br>

**Function Decloration** -- bir marta e'lon qilish mumkun. O'zidan yuqorida chaqirish mumkun.

```
function maxNum() {
    console.log(10000000000n);
}

maxNum()
```

<br>

**Function Expression** -- bir necha marta ishlatish mumkun va e'lon qilish ham mumkun. Lekin o'zidan yuqorida chaqirib bo'lmaydi.

```
const app = function (a, b) {
  console.log(a + b);
};

let chat = app;
app(10, 15);
chat(20, 30);
```

<br>

**Arrow Function** -- 1ta qatorda yozish uchun ishlatilinadi. O'zidan yuqorida chaqirib bo'lmaydi.


```
const globalApp = "1234";
const arrowFn = (n) => console.log(n);

arrowFn(globalApp)
```