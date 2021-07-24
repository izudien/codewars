/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
  return arr.filter((num) => num > 0).reduce((acc, sum) => (acc += sum), 0);
}

console.log((positiveSum([1, 2, 3, 4, 5]), 15));
console.log((positiveSum([1, -2, 3, 4, 5]), 13));
console.log((positiveSum([]), 0));
console.log((positiveSum([-1, -2, -3, -4, -5]), 0));
console.log((positiveSum([-1, 2, 3, 4, -5]), 9));

function positiveSum2(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    // setup loop to go through array of given
    if (arr[i] > 0) {
      // check if arr[0] greater than 0
      total += arr[i]; // add arr[i] to total
    }
  }

  console.log(total); // output result
}

positiveSum2([1, 2, 3, 4, 5]);
positiveSum2([1, -2, 3, 4, 5]);
positiveSum2([]);
positiveSum2([-1, -2, -3, -4, -5]);
positiveSum2([-1, 2, 3, 4, -5]);
