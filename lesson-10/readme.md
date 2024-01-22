# Lesson - 10

- IIIF
- Array

<br>

## IIFE - Immediately Invoked Function Execution

- **O'zini o'zi chaqirib run qiladi. O'zini ozi call qiladi. Call qib chaqirish shart emas.**

<br>

```
(function(argument){

   // code execute

})() // <-- can't call Function Declaration immediately
```

<br>

**For example**:

```
(function(arg){

    console.log(arg);

})(11); // 11
```

<br>

## Array

- **Array** - bir nechta turdegi o'zida ma'lumotni saqlab turuvchi konteyner.

### Declaration

- There are two syntaxes for creating an **empty array**:

```
let arr = new Array();
let arr = [];
```

<br>

- Almost all the time, the second syntax is used. We can supply initial elements in the brackets:

```
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum
```

<br>

- The total count of the elements in the array is its **length**:

```
let fruits = ["Apple", "Orange", "Plum"];

console.log( fruits.length ); // 3
```

<br>

## Array methods

<br>

- **push()** // arr oxiridan element qo'shib beradi. Argument qabul qiladi.

```
let fruits = ["Apple", "Orange"];

fruits.push("Pear");

console.log( fruits ); // Apple, Orange, Pear
```

<br>

- **pop()** // arr oxiridan element o'chiradi. Argument qabul qimidi. Bir marta chaqirsa bir marta o'chiradi. Nehca marta chaqirilsa shuncha marta o'chiradi.

```
let fruits = ["Apple", "Orange", "Pear"];

console.log( fruits.pop() ); // remove "Pear" and console it

console.log( fruits ); // Apple, Orange
```

<br>

- **unshift()** // arr boshida element qo'shib beradi. Argument qabul qiladi.

```
let fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

console.log( fruits ); // Apple, Orange, Pear
```

<br>

- **shift()** // arr boshidan element o'chiradi. Argument qabul qimidi.

```
let fruits = ["Apple", "Orange", "Pear"];

console.log( fruits.shift() ); // remove Apple and console.log it

console.log( fruits ); // Orange, Pear
```

<br>

- **slice()** // element(n)dan element(m)gacha -> copy qiladi. Start and End. Argument qabul qiladi.

```
let arr = ["t", "e", "s", "t"];

console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)
```

<br>

- **splice()** // element(n)dan element(m)gacha -> ctrl+x qiladi. Start and End. Argument qabul qiladi.

```
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

console.log( arr ); // ["I", "JavaScript"]
```

<br>

- **includes()** // arr ichidan element qidirib boolean qaytaradi. 1ta argument qabul qiladi. True or False qaytaradi

```
let arr = [1, 0, false];

console.log( arr.includes(1) ); // true
```

<br>

- **join()** // arr to string. Argument berish m-n. Agar bermasa bir-biriga qo'shib qo'yadi.

```
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';'); // glue the array into a string using ;

alert( str ); // Bilbo;Gandalf;Nazgul
```

<br>

- **reverse()** // teskari tartib qib beradi. Argument qabul qimidi.

```
let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1
```

<br>

- **sort()** // alifbo bo'yicha tartiblidi. Argument qabul qimidi.

```
let arr = [ 'html', 'css', 'javascript'];

arr.sort();

console.log( arr );  // css, html, javascript
```

<br>

- **concat()** // arrni arrga qo'shish.

```
let arr = [1, 2];

// create an array from: arr and [3,4]
console.log( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
```

<br>

- **flat()** // ichma ich arrni ochib beradi. [ ] -> ni o'chirib chiqadi. Argument berish m-n.

```
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]
```

<br>

## The Spread Operator

- The JavaScript spread operator **(...)** expands an iterable (like an array) into more elements.

- This allows us to quickly copy all or parts of an existing array into another array:

```
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo]; // 1,2,3,4,5,6
```
