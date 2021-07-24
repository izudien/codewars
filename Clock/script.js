function past(h, m, s) {
  // convert hour to mili
  //   return ((h*3600)+(m*60)+s)*1000;
  return 3600000 * h + 60000 * m + 1000 * s;
}

console.log(past(0, 1, 1)); //,61000
console.log(past(1, 1, 1)); //,3661000
console.log(past(0, 0, 0)); //,0
console.log(past(1, 0, 1)); //,3601000
console.log(past(1, 0, 0)); //,3600000
