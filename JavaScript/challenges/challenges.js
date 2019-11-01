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


// 6) Largest Numbers in Arrays

function largestOfFour(arr) {
  let maxes = [];
  for(let i=0;i<arr.length;i++) {
    let tempMax = arr[i][0];
    for(let j=0;j<arr[i].length;j++) {
      let currentElement = arr[i][j];
      if(currentElement >= tempMax) {
        tempMax = currentElement;
      }
    }
    maxes.push(tempMax);
    // console.log(arr[i]);
  }
  return maxes;
  }


  //Another way
function findMax(arr) {
  let max = arr[0];
  for (i=0; i<arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

function largestOfFour(arr) {
let maxes = [];
for(let i=0;i<arr.length;i++) {
  let innerMax = findMax(arr[i]);
  maxes.push(innerMax);
}
return maxes;
}
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);