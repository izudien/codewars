function digitize(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((e) => Number(e));
}

console.log(digitize(35231)); // [1, 3, 2, 5, 3];
