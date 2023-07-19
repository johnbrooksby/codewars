// const feast = (beast, dish) => beast.slice(0,1) === dish.slice(0,1) && beast.slice(-1) === dish.slice(-1) ? true : false;
// const feast = (beast, dish) => beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]
// console.log(feast("chickadee", "chocolate cake"))

// "great blue heron", "garlic naan" //true)
// "chickadee", "chocolate cake" // true)
// "brown bear", "bear claw"


// function countSquares(cuts){
//     let small = cuts - 1;
//     let large = cuts + 1;
//     return cuts === 0 ? 1 : (Math.pow(large,2) * 2 + (small * large) * 2 + Math.pow(small, 2) * 2)    
//   }

//   console.log(countSquares(1))

// function bmi(weight, height) {
//   let BMI = weight / Math.pow(height, 2);
//   return BMI <= 18.5 ? "Underweight" : BMI <= 25.0 ? "Normal" : BMI <= 30 ? "Overweight" : "Obese";
// }

// console.log(bmi(200, 1.8))

// function remove (string) {
//   let str = ""
//   let count = 0
//   let parse = string.split(" ")
//   for (let i = 0; i < parse.length; i++) {
//     for (let j = 0; j < parse[i].length; j++){
//       if (parse[i][j] === "!"){
//         count++
//       }
//     }
//     if (str === ""){
//       str += (count === 1) ? ("") : parse[i]
//     } else {
//       str += count === 1 ? ("") : " " + parse[i]
//     }
//     count = 0;
//   }
//   return str;
// }

// console.log(remove("Hi Hi! Hi!"))

// let a = 2 + '2';
// let b = 2 - '2';
// console.log(a);
// console.log(b);
// console.log(typeof a);
// console.log(typeof b);

// const a = 3;
// const x = (y) => {
// y++;
//   console.log(y);
// };
// x(a);

// var x=12;
// var y=8;
// var res=eval("x+y");
// console.log(res);

// console.log(Object.assign({ foo: 'bar'}, {bar: 'baz'}))

// const a = {
//     firstName: 'Bill'
//     };
    
//     const b = {
//     firstName: 'Bill'
//     };
    
//     console.log(a.firstName === b.firstName);

// const z = [[0],[1]];
// const x = [];
// for (let i = 0; i < z.length; i++) {
// const d = z[i];
// const v = d[0];
// x.push(v);
// }
// console.log(x);

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }

// console.log(p)

// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
//     }
//     sayHi();

    // let str = "((((()(())()))))"
    // console.log(str.length)

    // console.log(5++"6")