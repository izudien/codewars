function countSheeps(arrayOfSheep) {
  let sheep = 0;

  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      sheep++;
    }
  }
  console.log(sheep);
}

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

countSheeps(array1);

// function countSheeps(arrayOfSheep) {
//  return arrayOfSheep.filter(sheep => sheep === true).length
// }
