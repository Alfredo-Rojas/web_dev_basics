//ES5
// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }

// let sayHello = function(name) {
//   console.log(`Hello ${name}`);
// }

//ES6
// sayHello = (name) => console.log(`Hello ${name}`);

// sayHello('Fred');


//Scope 
// var name = 'John';

// (function() {
//   //It's a good idea wrap the entire app!
//   var name = 'Bla';
//   console.log(name);
// })();


//Practicing with find, filter, reduce...

// const products = [
//   {name: 'PC', price: 699, category: 'Technology'},
//   {name: 'Cooker', price: 39, category: 'Home'},
//   {name: 'Calculator', price: 75, category: 'Technology'},
//   {name: 'TV Table', price: 120, category: 'Home'},
//   {name: 'Soccer Ball', price: 10, category: 'Sports & Fitness'}
// ];
// console.table(products);

//Find /////////////
// const tvTable = products.find(item => {
//   // return item.name === 'Cooker';
//   // return item.category === 'Technology';
//   return (/Table/g).test(item.name); //Using regular expresions to get more flexile results.
// });

// console.log(tvTable);

//Map ///////////////

//!!!!This way map will change price value in both arrays
// const productsTax = products.map(item => {
//   item.price = item.price + item.price * 0.07;
//   return item;
// });

//!!!!This way you create a new intace of the array in order to keep the original array inmutable
// const productsTax = products.map(item => {
//   let newPrice = (item.price + item.price * 0.07).toFixed(2);
//   return { ...item, price: newPrice };
// })
// console.log(productsTax);
// console.log(products);

//!!Changing an Object's property name
// const products2 = products.map(item => {
//   return {itemName: item.name, price: item.price, category: item.category};
// })
  
  // console.log(products2);

//Filter ////////////////

// const productsHome = products.filter(item => {
//   return item.category === 'Home';
// });
// console.log(products);
// console.log(productsHome);


//Every //////////

// const check = products.every(item => {
//   return item.price >= 10;
// });

// console.log(check);


//Some //////////////

// const anyOne = products.some(item => {
//   return item.price >= 500;
// });

// console.log(anyOne);


//Reduce /////////////

//  const totalPrice = products.reduce((total, item) => {
//    return total + item.price;
//  }, 0);

//  console.log(totalPrice);

//  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//  const sum = arr.reduce((total, item) => {
//    return total + item;
//  }, 55);

//  console.log(sum);