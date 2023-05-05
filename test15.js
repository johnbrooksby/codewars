// function toCamelCase(str) {
//   let splitStr = "";
//   if (str.includes("-") === false && str.includes("_") === false) {
//     return str;
//   } else if (str.includes("_") || str.includes("-")) {
//     splitStr = str.split(/[-_]/);
//     for (let i = 1; i < splitStr.length; i++) {
//       let firstLetter = splitStr[i][0].toUpperCase();
//       let remaining = splitStr[i].slice(1, splitStr[i].length);
//       splitStr[i] = firstLetter + remaining.toLowerCase();
//     }
//   }
//   return splitStr.join("");
// }

// console.log(toCamelCase("a_Cat-Is-kawaii"));

// function lastDigit(n, d) {
//   let resArr = []
//   let nArr = n.toString().split('')
//   if (d >= nArr.length){
//     nArr.forEach((e) => {resArr.push(+e)})
//   } else if (d <= 0){return resArr}
//   else {
//     for (let i = nArr.length - d; i < nArr.length; i++){
//       resArr.push(+nArr[i])
//     }
//   }
//   return resArr
// }

// console.log(lastDigit(123767,4))

// function invert(array) {
//   let inverse = []
//   array.forEach(e => {
//     inverse.push(-e)
//   });
//   return inverse
// }

// A codewars solution:
// const invert = array => array.map(num => -num);

// console.log(invert([1,2,-3,4,5]))

// const array =(string) => string.split(',').length < 3 ? null : string.split(',').slice(1, -1).join(' ')

// console.log(array('A1,B2,3,5'))

// function fireFight(s){
//     let sArr = s.split (' ')
//     sArr.replace('Fire', '~~').join(' ')
//   }

//   console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire"))

// This function works as is, but it is too slow to run with large input.  I need to find a way to do it faster
function maxSum(arr, range) {
  let blockArr = [];
  for (let i = 0; i < range.length; i++) {
    blockArr.push(
      arr.slice(range[i][0], range[i][1] + 1).reduce((a, c) => {
        return a + c;
      })
    );
  }
  return Math.max(...blockArr);
}

console.log(
  maxSum(
    [1, -2, 3, 4, -5, -4, 3, 2, 1, 5, 7, -3, 10],
    [
      [0, 4],
      [1, 3],
      [6, 11],
      [0, 3],
      [5, 7],
      [7, 10],
    ]
  )
);
