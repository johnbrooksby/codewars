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

function remove (string) {
  let str = ""
  let count = 0
  let parse = string.split(" ")
  for (let i = 0; i < parse.length; i++) {
    for (let j = 0; j < parse[i].length; j++){
      if (parse[i][j] === "!"){
        count++
      }
    }
    if (str === ""){
      str += (count === 1) ? ("") : parse[i]
    } else {
      str += count === 1 ? ("") : " " + parse[i]
    }
    count = 0;
  }
  return str;
}

console.log(remove("Hi Hi! Hi!"))