function reverseWords(str) {
  const x = str.split(" ").reverse().join(" ");
  console.log(x);
}

reverseWords("hello world!"); // , "world! hello"//
reverseWords("yoda doesn't speak like this"); //,  "this like speak doesn't yoda")
reverseWords("foobar"); //,  "foobar")
reverseWords("kata editor"); //,  "editor kata")
reverseWords("row row row your boat"); //,  "boat your row row row")
