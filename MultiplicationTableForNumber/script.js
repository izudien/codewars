function multiTable(number) {
  let table = "";

  for (let i = 1; i <= 10; i++) {
    // check number of new line/ if below 9 -> new line
    table += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
  }
}

console.log(multiTable(5));
console.log(multiTable(1));
/*
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50

*/
