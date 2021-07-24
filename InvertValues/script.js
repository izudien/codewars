function invert(array) {
  return array.map((x) => (x === 0 ? x : -x));
}

invert([1, 2, 3, 4, 5]); // == [-1,-2,-3,-4,-5]
invert([1, -2, 3, -4, 5]); // == [-1,2,-3,4,-5]
invert([]); //  == []
