// 1) Reverse a String:

// function reverseString(str) {
// let strArr = str.split("");
// let reverseStrArray = strArr.reverse();
// let reversedStrArray = reverseStrArray.join("");
// return reversedStrArray;
// }

// console.log(reverseString("hello")); //olleh

// Fancy way
// function reverseString(str) {
// return str.split("").reverse().join("");
// }

// The hard way
// let final = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   final += str[i];
//  }
//  return final;
// }
// console.log(reverseString("Hello")); //olleh

//--------------------------------------------------------//


// 2) Factorialize a Number(n!)

// function factorialize(num) {
//   let factorializedNumber = 1;
//   for (let i=1; i<=num;i++) {
//     factorializedNumber *= i;
//   }
//   return factorializedNumber;
// }

// factorialize(5);