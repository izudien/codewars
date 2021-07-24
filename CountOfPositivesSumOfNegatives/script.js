function countPositivesSumNegatives(input) {
  let positive = [];
  let negative = 0;
  if (input && input.length) {
    input.forEach((element) => {
      element > 0 ? positive.push(element) : (negative += element);
    });
  } else {
    return [];
  }

  return [positive.length, negative];
}

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);

// https://losseff.xyz/katas/016-count-of-positives-sum-of-negatives/javascript/
