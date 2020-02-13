//Objects Literal

// const MovieOne = {
//   name: 'Harry',
//   id: 01,
//   player() {
//     return `Playing movie ...${this.name}`;
//   }
// }

// console.log(MovieOne.player());

// const MovieTwo = {
//   name: 'Spyderman',
//   id: 02,
//   player() {
//     return `Playing movie ...${this.name} id: ${this.id}`;
//   }
// }

// console.log(MovieTwo.player());


//Classes

// class Movie {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//   }
//   moviePlayer() {
//     return `Playing movie ...${this.name}`;
//   }
// }

// class Series extends Movie {
//   constructor(name, id, episode) {
//     super(name, id);
//     this.episode = episode;
//   }
//   seriesPlayer() {
//     return `Playing show ${this.name} ${this.episode}`;
//   }
// }

// const movieOne = new Movie('Pulp Fiction', 1);
// const movieTwo = new Movie('Aladin', 2);
// const serieOne = new Series('Game of Trones', 1, 'S1E1');

// movieTwo.year = 2019;
// console.log(Movie);
// console.log(movieOne);
// console.log(movieTwo);
// console.log(movieTwo.moviePlayer());
// console.log(movieOne.moviePlayer());
// console.log(serieOne);
// console.log(serieOne.seriesPlayer());


//Classes JS Practices

// class Person {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
//   speak() {
//     return `Hello everyone!`;
//   }

// }

// const personOne = new Person("Alfre", 22, "Male");
// const personeTwo = new Person("Mary", 27, "Female");

// console.log(Person);
// console.log(personOne);
// console.log(personOne.speak());
// console.log(personeTwo);

// class Athlete extends Person {
//   constructor(name, age, gender, sport, club) {
//     super(name, age, gender);
//     this.sport = sport;
//     this.club = club;
//   }
//   play() {
//     return `The athlete ${this.name} practice ${this.sport} for ${this.club}`;
//   }
// }

// const athleteOne = new Athlete("Leo", 30, "Male", "Soccer", "Barcelona");
// const athleteTwo = new Athlete("Kobe", 41, "Male", "Basketball", "Lakers");

// console.log(athleteOne.play());
// console.log(athleteTwo);
// console.log(athleteTwo.play());


//BMI using classes //////////

// class Person {
//   constructor(name, weight, height) {
//     this.name = name;
//     this.weight = weight;
//     this.height = height
//   }
//   bmiCalc() {
//     this.bmi = this.weight / (this.height * this.height);
//   }
// }

// const personTwo = new Person("Mark", 220, 1.75);
// const personOne = new Person("John", 220, 1.75);

// personOne.bmiCalc();
// personTwo.bmiCalc();
// console.log(personOne);
// console.log(personTwo);

// if (personOne.bmi === personTwo.bmi) {
//   console.log(`What a coincidence they have the same BMI(${personTwo.bmi})`);
// } else if (personOne.bmi < personTwo.bmi) {
//   console.log(`Mark\'s BMI(${personTwo.bmi}) is higher than John\'s BMI(${personOne.bmi})!`);
// } else {
//   console.log(`John\'s BMI(${personOne.bmi}) is higher than Mark\'s BMI(${personTwo.bmi})!`);
// }

/////////////////


// let higherBMI = personTwo.bmi() > personOne.bmi();

// console.log(`Is Mark's BMI higher than John's? ${higherBMI}`);

//Ternary operator
// (personOne.bmi() > personTwo.bmi()) ? 
// console.log('John\'s BMI is higher than Mark\'s!') : 
// console.log('Mark\'s BMI is higher than John\'s!');

//Switch
// switch (personOne.bmi() === personTwo.bmi()) {

//   case (personOne.bmi() < personTwo.bmi()):
//     console.log('Mark\'s BMI is higher than John\'s!');
//     break;

//   case (personTwo.bmi() < personOne.bmi()):
//     console.log('John\'s BMI is higher than Mark\'s!');
//     break;

//   default:
//     console.log('What a coincidence they have the same BMI');
// }



// if (personOne.bmi === personTwo.bmi) {
//   console.log(`What a coincidence they have the same BMI(${personTwo.bmi})`);
//    else if (personOne.bmi < personTwo.bmi) {
//     console.log(`Mark\'s BMI(${personTwo.bmi}) is higher than John\'s BMI(${personOne.bmi})!`);
//   } else (personTwo.bmi < personOne.bmi) {
//     console.log(`John\'s BMI(${personTwo.bmi}) is higher than Mark\'s BMI(${personTwo.bmi})!`);
//   } 
// }

// console.log('John\'s BMI is higher than Mark\'s!');

//Prototype

// let person = function() {};

// person.prototype.name = 'n/a';
// person.prototype.age = 0;

// console.log(person);

// let Alfred = new person();

// console.log(Alfred.name);
// console.log(Alfred.age);

// person.prototype.hello = function() {
//   console.log(`Hello ${this.name}`);
// }

// Alfred.name = 'Alfred';
// Alfred.hello();


// Call /////////////

// let myObj = {
//   name: 'Alfre'
// }

// let sayHello = function() {
//   console.log('Hello ' + this.name);
// }

// sayHello(); //Hello
// sayHello.call(myObj); //Hello Alfre

////////////////////

// let myObj = {
//   num: 2
// }

// let myFunc = function(add) {
//   console.log(this.num + add);
// }

// myFunc(); //NaN
// myFunc(2); //NaN

// myFunc.call(myObj, 6); //8
// myFunc.call(myObj); //NaN

// myFunc = function(num1, num2) {
//   console.log(this.num + num1 + num2);
// }

// myFunc.call(myObj, 4, 3); //9

//Apply ///////////Almost same that call

// let myObj = {
//   num: 10
// }

// let myFunc = function(num1, num2) {
//   console.log(this.num + num1 + num2);
// }

// myFunc.apply(myObj, [5, 7]); //22

// Bind //////////////

// let myObj = {
//   num1: 5,
//   num2: 6
// }

// let myFunc = function() {
//   console.log(this.num1 + this.num2);
// }

// myFunc(); //NaN

// let addedFunc = myFunc.bind(myObj);
// addedFunc(); //11

// let myObj2 = {
//   num1: 10,
//   num2: 20
// }

// var anotherFunc = myFunc.bind(myObj2);
// anotherFunc(); //30


// Closures //////////////////
// let add = function(num1) {
//   return function(num2) {
//     return num1 + num2;
//   }
// }

// let add2 = add(10);
// console.log(add2(20)); //30

// let add50 = add(20);
// console.log(add50(30)); //50


// Promises /////////////// Its asyncronous code

// let myPromise = new Promise(function(resolved, rejected) {
//   if(true) {
//     resolved(200);
//   } else {
//     rejected();
//   }
// });

// myPromise.then(function() {
//   console.log(my);
// }).catch(function() {

// });

// myPromise.then(function(value) {
//   console.log(value);
// }).catch(function() {
//   console.log('Your promise fails');
// });
//Output: 200


//Callbacks ///////////////
// function calc(num, callback) {
//   return callback(num);
// }

// let add10 = function(num) {
//   console.log(num + 10);
// }

// calc(9, add10); //19


//XMLHttpRequest /////////////
// var request = new XMLHttpRequest();

// request.onreadystatechange = function() {
//   console.table(request.response);
// }

// request.open('get', 'https://randomuser.me/api/', true);

// request.send();
  
//Promises with XMLHttpRequest ////////

// let myPromise = new Promise(function(res, rej) {

//   let request = new XMLHttpRequest();
//   request.open('get', 'https://randomuser.me/api/');
//   request.onload = res;
//   request.onerror = rej;
//   request.send();
// });

//   myPromise.then(function(data) {
//     data = data.target.response;
//     console.log(data);
//   }).catch(function() {
//     console.log('there was an error!');
//   });