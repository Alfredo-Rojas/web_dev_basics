const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//push, unshift, shift, pop

// ages.push(101);
// ages.unshift(102);
// ages.shift();
// ages.pop();
// console.log(ages);

//indexOf

// let isInTheArray = ages.indexOf(21) == -1 ? `the number in not in the array`
// : `the number is in the array`;

// console.log(isInTheArray);

// for(let i=0; i<companies.length; i++) {
//   console.log(companies[i]);
// }

// ForEach
// companies.forEach((company) => {
//   console.log(company);
//   //console.log(company.name); 
// });

// Filter
// Get 21 and older
// let canDrink = [];
// for(let i=0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// console.log(canDrink);
//ES5
// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// });

// const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink);

// Filter retail companies
// ES5
// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true;
//   }
// });

// ES6
// const retailCompanies = companies.filter(company => company.category === 'Retail');

// console.log(retailCompanies);

// Get companies started at 80s
// ES5
// const companiesStartedAtEighties = companies.filter(function(company) {
//   if(company.start < 1990 && company.start >= 1980) {
//     return true;
//   }
// });

// console.log(companiesStartedAtEighties);




//map
//sort
//reduce



const john = {
  fistname: 'John',
  lastname: 'Smith',
  calcAge() {
    this.age = 2020 - this.birthyear;
  }, 
  birthyear: 1984
}
john.calcAge();
console.log(john);
