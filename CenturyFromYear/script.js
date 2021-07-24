function century(year) {
  const x = Math.floor(years / 100);
  if (year % 100 === 0) {
    return x;
  } else {
    return x + 1;
  }
}

century(1705); //18,
century(1900); //19,
century(1601); //17,
century(2000); // 20
century(89); //1
