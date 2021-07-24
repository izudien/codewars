/*

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


const summation = function(num){
    let total = 0;
     
    // 0 + 1 = 1;
    // 2 = 1 + 2 = 3
    for(let i = 0;i <= num ; i++){
        total = total + i
    }
    return total
}

console.log(summation(1));
console.log(summation(8));

/*
i = 0
num 8

0 <= 8;

total = total + i 
total = total + 0  = 0  
total = 0

i = 1
num 8

1 <= 8;
total = total + 1 = 1
total = 1

i = 2
num = 8

2 <= 8
total = 1 + 2 = 3
total = 3


*/

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F



// cara aku
// const abbrevName  = function (name){
    //     const x = name.toUpperCase().split(' ').map(e => e[0]).join('.')
    //     console.log(x);
    // }
    
    
    
    // best practice
    const abbrevName  = function (name){
        const nameArr = name.split(' ')
        console.log(nameArr[0][0]);
        console.log(nameArr[1][0]);
        return nameArr[0][0] + '.' + nameArr[1][0].toUpperCase()
    }
    
    console.log(abbrevName("Sam Harris")); // S.H
    console.log(abbrevName("Patrick Feenan")); // PF
*/

/*
// cara aku
// const basicOp = function(ope,num1,num2){
//     if(ope == '+'){
//        console.log( num1 + num2)
//     }
//     if(ope == '-'){
//         console.log( num1 - num2)
//     }
//     if(ope == '*'){
//        console.log( num1 * num2)
//     }
//     if(ope == '/'){
//        console.log( num1 / num2)
//     }
// }

// best practice
const basicOp = function(operation,value1,value2){
    switch (operation){
        case '+':
            return value1 + value2
        case '-':
            return value1 - value2
        case '*':
            return value1 * value2
        case '/' :
             return value1/ value2
        default:
            return 0            
    }
}

console.log(basicOp('+', 4, 7),basicOp('-', 15, 18),basicOp('*', 5, 5),basicOp('/', 49, 7));

// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

*/

/*
const countSheep = function (num){

    // 1 sheep...2 sheep..."
    let result = ''

    for(let i= 1 ; i<=num;i++){
    result = result + i.toString() + 'sheep...'
    }
    return result

}


// countSheep(1)
console.log( countSheep(2))
// countSheep(3)

*/

function multiTable(number) {
  let result = 0;
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

console.log(
  (multiTable(5),
  "1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50")
);
console.log(
  (multiTable(1),
  "1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10")
);
