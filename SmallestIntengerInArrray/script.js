function findSmallestInt(args) {
  let smallest = args[0];

  for (let i = 0; i < args.length; i++) {
    args[i] < smallest ? (smallest = args[i]) : args[i];
  }

  return smallest;
}

findSmallestInt([78, 56, 232, 12, 8]); // 8
findSmallestInt([78, 56, 232, 12, 18]); // 12
findSmallestInt([1, 56, 232, 12, 8]); // 1

function findSmallestInt2(args) {
  console.log(args.sort((a, b) => a - b)[0]);
}

findSmallestInt2([78, 56, 232, 12, 8]); // 8
findSmallestInt2([78, 56, 232, 12, 18]); // 12
findSmallestInt2([1, 56, 232, 12, 8]); // 1
