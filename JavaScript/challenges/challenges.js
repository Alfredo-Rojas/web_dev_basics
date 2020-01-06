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

//------------------------------------------//


// 3) Check for palindromes

// function palindrome(str) {
//   let checkPalindrome = "";
//   let reg = /[\W_]/g;
//   let smallStr = str.toLowerCase().replace(reg, "");

//   for (let i=smallStr.length -1; i>=0; i--) {
//     checkPalindrome += smallStr[i];
//   }
//     if (checkPalindrome !== smallStr) return false;

//   return true;
// }

// palindrome("racecar");

//Easy way

// function palindrome(str) {
//   let reg = /[\W_]/g;

//   let smallStr = str.toLowerCase().replace(reg, "");

//   let reversed = smallStr.split("").reverse().join("");
//   if(reversed === str) return true;

//   return false;
// }

// palindrome("racecar");


//-----------------------------------------//


// 4) Find Longest Word

// function findLongestWord(str) {
//Large    
// let words = str.split(" ");
// // console.log(words);
// let longest = "";
// for (let word of words) {
//   if (word.length > longest.length) longest = word;
// }
// return longest.length;


//Fancy
// return str.split(" ").sort((a,b) => {
//   return b.length - a.length;
// })[0];

// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
//---------------------------------------//


// 5) Titlecase

// function titleCase(str) {
//   //Large
//   // let words = str.toLowerCase().split(" ");
//   // for (let i=0;i<words.length;i++) {
//   //   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   // }
//   // return words.join(" ");

//   //Fancy
//   let titled = str.toLowerCase().split(" ").map(function(elem) {
//     return elem[0].toUpperCase() + elem.slice(1);
//     console.log(elem);
//   })
//   return titled.join(" ");
// }

// titleCase("I'm a little tea pot");

//-------------------------------------//


// 6) Largest Numbers in two dimmensional in Arrays

// function largestOfFour(arr) {
//   let maxes = [];
//   for(let i=0;i<arr.length;i++) {
//     let tempMax = arr[i][0];
//     for(let j=0;j<arr[i].length;j++) {
//       let currentElement = arr[i][j];
//       if(currentElement >= tempMax) {
//         tempMax = currentElement;
//       }
//     }
//     maxes.push(tempMax);
//     // console.log(arr[i]);
//   }
//   return maxes;
//   }

//Another way
// function largestOfFour(arr) {
//   let maxes = [0,0,0,0];

//   for (let i=0;i<arr.length;i++) {
//     for (let j=0;j<arr.length;j++) {
//       let currentElement = arr[i][j];
//       if (currentElement >= maxes[i]) {
//         maxes[i] = currentElement;
//       }
//     }
//   }
//   return maxes;
// }


//   //Another way
// function findMax(arr) {
//   let max = arr[0];
//   for (i=0; i<arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//   }
//   return max;
// }

// function largestOfFour(arr) {
// let maxes = [];
// for(let i=0;i<arr.length;i++) {
//   let innerMax = findMax(arr[i]);
//   maxes.push(innerMax);
// }
// return maxes;
// }

//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//---------------------------------------//

// 7) Confirm the Ending


//----------------------------------------//
//Code war: The Feast of Many Beast

// function feast(beast, dish) {
//   let beastFirstLast = [];
 
//   let dishFirstLast = [];
 

//   let reg =/[\W_\0-9]/g;
//   let smallBeast = beast.toLowerCase().replace(reg, "");
//   let smallDish = dish.toLowerCase().replace(reg, "");
  
//   beastFirstLast.push(smallBeast[0], smallBeast[smallBeast.length-1]);

//   dishFirstLast.push(smallDish[0], smallDish[smallDish.length-1]);
//     console.log(beastFirstLast);
//     console.log(dishFirstLast);
//   if(beastFirstLast[0] === dishFirstLast[0] && beastFirstLast[1] === dishFirstLast[1]) {

//   return true;
//   } else {
//     return false;
//   }
// } 

//Another
// function feast(beast, dish) {
//   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
// }

//Another
// function feast(beast, dish) {
//   return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
// }

//Another
// function feast(beast, dish) {
//   return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
// }

//Another
// function feast(beast, dish) {
//   return beast.first() + beast.last() == dish.first() + dish.last();
// }

// String.prototype.first = function() {
//   return this[0];
// }

// String.prototype.last = function() {
//   return this[this.length-1];
// }

// feast("great blue heron", "garlic naan");
// feast("chickadee", "chocolate cake");
// feast("brown bear", "bear claw");
// feast("brown beappppo03", "bear cla';po1");


//-------------------------------------------------------//
//Reduce
// let arrayNumb = [1,2,3,4,5,6,7];

// let total = arrayNumb.reduce((acc, curr) => {
// console.log(acc);
// console.log(curr);
//   return acc + curr;
// });
// console.log(total); 

// Using reduce to sort
// let anyArraay = [1,50,2,3,20,5,6,7,8];

// let total = anyArraay.reduce((a, c) => {
//   if (a > c) {
//     a = c;
//     return a;
//   }
//   return a;
// });

// console.log(total);

//----------------------------------------------------//
//8) Repeat String Num Times

// function repeatStringNumTimes(str, num) {
//   if (num < 0) return "";
//   return str.repeat(num);
// }

// repeatStringNumTimes("Alfre", 8);

//8) Repeat String Num Times
//Another way with a for loop
// function repeatStringNumTimes(str, num) {
//   let final = "";
//   if (num < 0) return "";
  
//   for (let i=0;i<num;i++) {
//     final += str;
//   }
//   return final;
// }
// repeatStringNumTimes("Alfre", 8);

//Another way using Recursion

// function repeatStringNumTimes(str, num) {
//   if (num < 0) return "";
//   if (num === 1) return str;

//   return str + repeatStringNumTimes(str, num - 1);
// }

// repeatStringNumTimes("Alfre",-9);


//9) Truncate a String

function truncateString(str, num) {
  if (num >= str.length) return str;
  if (num <= 3) return str.slice(0, num) + "...";
   return (str.slice(0, num - 3)) + "...";
} 

truncateString("A-tisket a-tasket A green and yellow basket", 11);
