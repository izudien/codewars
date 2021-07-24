// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr(n, s) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += s;
  }

  console.log(str);
}

repeatStr(3, "*"), "***";
repeatStr(5, "#"), "#####";
repeatStr(2, "ha "), "ha ha ";
