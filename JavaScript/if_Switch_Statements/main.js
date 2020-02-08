let teamJohnAve = (980 + 93 + 75) / 3;
let teamMarkAve = (9800 + 93 + 75) / 3;
let teamPepaAve = (980 + 93 + 75) / 3;

console.log(teamJohnAve);
console.log(teamMarkAve);
console.log(teamPepaAve);


// if (teamJohnAve > teamMarkAve && teamJohnAve > teamPepaAve) {
//   console.log('The John\'s Team average is the winner');
// } else if (teamMarkAve > teamJohnAve || teamMarkAve > teamPepaAve) {
//   console.log('The Mark\'s Team average is the winner');
// } else if (teamPepaAve > teamMarkAve || teamPepaAve > teamJohnAve) {
//   console.log('The Pepa\'s Team average is the winner');
// } else {
//   console.log('wow, all team score the same');
// }

switch (true) {
  case teamJohnAve > teamMarkAve && teamJohnAve > teamPepaAve:
    console.log('The John\'s Team average is the winner');
    break;
  case teamMarkAve > teamJohnAve && teamMarkAve > teamPepaAve:
    console.log('The Mark\'s Team average is the winner');
    break;
  case teamPepaAve > teamMarkAve && teamPepaAve > teamJohnAve:
    console.log('The Pepa\'s Team average is the winner');
    break;
  case teamJohnAve === teamMarkAve && teamJohnAve > teamPepaAve:
    console.log('The John\'s and Mark\'s Team average are the winners');
    break;
  case teamJohnAve === teamPepaAve && teamJohnAve > teamMarkAve:
    console.log('The John\'s and Pepa\'s Team average are the winners');
    break;  
  case teamPepaAve === teamMarkAve && teamJohnAve < teamPepaAve:
    console.log('The Pepa\'s and Mark\'s Team average are the winners');
    break;
  default: 
  console.log('wow, all team score the same');
}