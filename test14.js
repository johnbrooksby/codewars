// function quadrant_segment(a, b) {
//     if ((a[0] > b[0] && a[0] - b[0] > a[0]) || (b[0] > a[0] && b[0] - a[0] > b[0])){
//       return true
//     } else if ((a[1] > b[1] && a[1] - b[1] > a[1]) || (b[1] > a[1] && b[1] - a[1] > b[1])){
//       return true
//     } 
//     return false;
//   }

//   console.log(quadrant_segment([9, 3], [-1, 6]))

const greet = () => {
  let str = "h"
  str += "e"
  for (let i = 1; i < 4; i++){
    str += "l"
  }
  
  console.log(str)
  let str2 = str.slice(0, 4) + "o wor" + str.slice(4)
  let str3 = str2 + "d"
  str = "!"
  let finalstring = str3.concat(str)
  console.log(finalstring)
}

greet()