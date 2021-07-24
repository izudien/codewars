function noSpace(x) {
  return x.split(" ").join("");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
console.log(noSpace("8aaaaa dddd r     "));

function noSpace2(x) {
  return x.replace(/\s/g, "");
}

// /\s/g is a Regular Expression.
// \s = any white space character,including space, tab, form feed or line feed
// g = meaning global search
// so /\s/g means "look for every white space char."
