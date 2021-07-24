function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }

  return sum;
}

squareSum([1, 2]); //5
squareSum([0, 3, 4, 5]); // 50

// use reduce
function squareSum2(numbers) {
  return numbers.reduce((sum, n) => n * n + sum, 0);
}

console.log(squareSum2([1, 2])); //5
console.log(squareSum2([0, 3, 4, 5])); // 50
