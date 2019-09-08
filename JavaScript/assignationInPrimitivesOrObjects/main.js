//!!!Primitives datatypes assignation is always by value!

let number1 = 60;
let number2 = number1;
console.log(number2);
number1 = 70;
console.log(number1);//Output: 70
console.log(number2);//Output: 60

//!!!Objets datatypes assignation is always by reference!

let array1 = [1,2,3,4,5];
let array2 = array1;
console.log(array1);
console.log(array2);

array1.push(6);
console.log(array1);//Output: (6) [1, 2, 3, 4, 5, 6] 
console.log(array2);//Output: (6) [1, 2, 3, 4, 5, 6] 

