// function quadrant_segment(a, b) {
//     if ((a[0] > b[0] && a[0] - b[0] > a[0]) || (b[0] > a[0] && b[0] - a[0] > b[0])){
//       return true
//     } else if ((a[1] > b[1] && a[1] - b[1] > a[1]) || (b[1] > a[1] && b[1] - a[1] > b[1])){
//       return true
//     }
//     return false;
//   }

//   console.log(quadrant_segment([9, 3], [-1, 6]))

// const greet = () => {
//   let str = "h"
//   str += "e"
//   for (let i = 1; i < 4; i++){
//     str += "l"
//   }

//   console.log(str)
//   let str2 = str.slice(0, 4) + "o wor" + str.slice(4)
//   let str3 = str2 + "d"
//   str = "!"
//   let finalstring = str3.concat(str)
//   console.log(finalstring)
// }

// greet()

// function stepThroughWith(s) {
//   //You can't bring your code, but you can bring this comment
//   sArr = s.split(" ");
//   for (let i = 0; i < sArr.length - 1; i++) {
//     for (let j = 0; j < sArr[i].length; j++) {
//       if (sArr[i][j] === sArr[i][j + 1]) {
//         if(sArr[i].includes(',')){
//           return sArr[i].slice(0, -1);
//         }
//         return sArr[i]
//       }
//     }
//   }
// }

// console.log(stepThroughWith("You can take the tree or the wood, but not a branch"));

// function sumFactorial(arr){
//   let numArr = []
//   let num = 1
//   for (let j = 0; j < arr.length; j++){
//     for (let i = 0; i < arr[j] - 1; i++){
//       num *= arr[j] - i
//     }
//     numArr.push(num)
//     num = 1
//   }
//   return numArr.reduce((a,c) => {
//     return a + c
//   }, 0)
// }

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let filtered = arr.filter((num) => {
  return num > 4
})

console.log(arr)
console.log(filtered)