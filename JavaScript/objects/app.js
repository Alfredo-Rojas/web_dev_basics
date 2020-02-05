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

class Movie {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  moviePlayer() {
    return `Playing movie ...${this.name}`;
  }
}

class Series extends Movie {
  constructor(name, id, episode) {
    super(name, id);
    this.episode = episode;
  }
  seriesPlayer() {
    return `Playing show ${this.name} ${this.episode}`;
  }
}

const movieOne = new Movie('Pulp Fiction', 1);
const movieTwo = new Movie('Aladin', 2);
const serieOne = new Series('Game of Trones', 1, 'S1E1');

movieTwo.year = 2019;
console.log(Movie);
console.log(movieOne);
console.log(movieTwo);
console.log(movieTwo.moviePlayer());
console.log(movieOne.moviePlayer());
console.log(serieOne);
console.log(serieOne.seriesPlayer());








