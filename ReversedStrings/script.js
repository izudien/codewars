// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'

function solution(str) {
  console.log(str.split("").reverse().join(""));
}

console.log((solution("world"), "dlrow"));
console.log((solution("hello"), "olleh"));
console.log((solution(""), ""));
console.log((solution("h"), "h"));
