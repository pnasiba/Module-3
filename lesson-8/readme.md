# Repetition of topics

**1. Loops** <br>
**2. Scopes** <br>
**3. Function**

<br>

## Loops

**Loops -- takrorlanuvchi operator. Ular while, do while, va for.**

<br>

**Syntax of while👇**

```
while(condition){
    var++ or var--;
    code execute
}
```

**👆 Bu yerda:** <br><br>
1 - condition <br>
2 - iterable ya'ni(var++ va var--) <br>
3 - console <br>
4 .... shu tarzda sikl aylanadi <br>
<br>

<hr>
<br>

**Syntax of do while👇**

```
do {
    var++ or var--
    code execute
} while(condition)
```

**👆 Bu yerda:** <br><br>
1 - do ichida var++ or var-- ishlidi <br>
2 - code execute<br>
3 - while ichidagi condition ishlidi <br>
4 .... shu tarzda sikl aylanadi <br>

<br>
<hr>
<br>

**Syntax of for👇**

```
for (initial state(dastlabki qiymat), condition, mutation ya'ni var++){
    code execute
}
```

**👆 Bu yerda:** <br><br>
1 - initial state = 0 <br>
2 - condition<br>
3 - code execute <br>
4 - mutation <br><br>
5 - condition <br>
6 - code execute <br>
7 - mutation <br>

**5 dan 7 gacha huddi shunday sikl davom etadi**

<br>

```
Block scope -- globalga chiqa olmaydi.
Global scope -- blockga ham kiradi.
```

<br><br>

## Function

- Function decloration
- Function expression
- Arrow Function

<br>

### Function decloration

```
function functionName(){
    // block or local scope
    let a = 0 // bu funksiya ichida ochilgani uchun global qb chaqirish m-n emas.
    console.log("Hello");
}
functionName()
```

**Global scope** ni xohlagan joyda chaqirib ishlatish m-n for va if larni ichida ham.

**var** -- function ichidan chiqa olmidi.

<br><hr><br>

### Function expression

- anonym function

```
const addNum = function(){
    console.log(12+13);
}

const devison = addNum()
addNum()
```

<br><hr><br>

### Arrow function

```
const arrow = () => {
  console.log("Arrow");
};
arrow();
```

<br>

## Function argument

- A JavaScript function does not perform any checking on parameter values (arguments).

<br>

**Earlier in this tutorial, you learned that functions can have parameters:**

```
function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

<br>
<hr>

### Parametr Rules

- JavaScript function definitions do not specify data types for parameters.

- JavaScript functions do not perform type checking on the passed arguments.

- JavaScript functions do not check the number of arguments received.

<br>

```
function sayHello(a, b){
    console.log(a+b)
}
sayHello(1, 2)  // 3
```

## Return

- **return** - funksiyani to'xtatib beradi va natijani umumiy qaytarib beradi.

```
function num(a){
    return a
    console.log("num") // bu holatda ishlamidi. returndan oldn yozb bo'ladi returndan kn yozb bo'midi.
}
```

<br>

```
function name(a, b){
    return a + b // funsiya nomiga tenglab qo'yadi
}
let sum = sum(11, 12)
console.log(sum) // 23
```
