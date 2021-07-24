function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  //   let result = 0;

  //   marks.forEach((element) => {
  //     result += element;
  //   });

  //   return Math.floor(result / marks.length);

  //  return marks.reduce((a, b) => a + b) / marks.length;

  return Math.floor(marks.reduce((acc, sum) => (acc += sum / marks.length), 0));
}

console.log(getAverage([2, 2, 2, 2])); //,2;
console.log(getAverage([1, 2, 3, 4, 5])); //,3;
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2])); //,1;
