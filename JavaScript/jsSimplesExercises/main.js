//John's Family
const johnsFamily = {
  name: 'John',
  bills: [124, 48, 268, 180, 42],
  tips: [],
  totalPaidOut: [],
  tipsCalc() {
    for (let i = 0; i < this.bills.length; i++) {
      let percentage =  0;
      if (this.bills[i] < 50) {
        percentage = 0.2;
      } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      //Push tips Array
      this.tips.push(this.bills[i] * percentage);

      //Push totalPaidOut Array
      this.totalPaidOut.push(this.tips[i] + this.bills[i]);
      // console.log(this.tips, this.totalPaidOut);
    }
  }
}
johnsFamily.tipsCalc();
// console.log(johnsFamily);

//Mark's Family
const marksFamily = {
  name: 'Mark',
  bills: [77, 375, 110, 45],
  tips: [],
  totalPaidOut: [],
  tipsCalc() {
    for (let i = 0; i < this.bills.length; i++) {
      let percentage =  0;
      if (this.bills[i] < 100) {
        percentage = 0.2;
      } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
        percentage = 0.10;
      } else {
        percentage = 0.25;
      }
      //Push tips Array
      this.tips.push(this.bills[i] * percentage);

      //Push totalPaidOut Array
      this.totalPaidOut.push(this.tips[i] + this.bills[i]);
      // console.log(this.tips, this.totalPaidOut);
    }
  }
}
marksFamily.tipsCalc();
// console.log(marksFamily);

function tipsAverage(array) {
  let tipsSum = 0;
  for (let i = 0; i < array.length; i++) {
    tipsSum = tipsSum + array[i];
  }
  return tipsSum / array.length;
}

marksFamily.average = tipsAverage(marksFamily.tips);
johnsFamily.average = tipsAverage(johnsFamily.tips);
console.log(johnsFamily, marksFamily);

if (johnsFamily.average > marksFamily.average) {
  console.log(`${johnsFamily}'s family pays higher tips, with an average of $${johnsFamily.average}`);
} else if (johnsFamily.average < marksFamily.average) {
  console.log(`${marksFamily}'s family pays higher tips, with an average of $${marksFamily.average}`);
} else {
  console.log('Both families pays the same amount of tips in average');
}