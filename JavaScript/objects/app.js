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

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  speak() {
    return `Hello everyone!`;
  }

}

const personOne = new Person("Alfre", 22, "Male");
const personeTwo = new Person("Mary", 27, "Female");

console.log(Person);
console.log(personOne);
console.log(personOne.speak());
console.log(personeTwo);

class Athlete extends Person {
  constructor(name, age, gender, sport, club) {
    super(name, age, gender);
    this.sport = sport;
    this.club = club;
  }
  play() {
    return `The athlete ${this.name} practice ${this.sport} for ${this.club}`;
  }
}

const athleteOne = new Athlete("Leo", 30, "Male", "Soccer", "Barcelona");
const athleteTwo = new Athlete("Kobe", 41, "Male", "Basketball", "Lakers");

console.log(athleteOne.play());
console.log(athleteTwo);
console.log(athleteTwo.play());



