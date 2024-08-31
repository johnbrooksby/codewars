// function order(words) {
//   let wordStr = "";
//   let count = 1;

//   if (words.length > 0) {
//     words = words.split(" ");
//   } else {
//     return words;
//   }
//   for (let i = 0; i < words.length; i++) {
//     for (let j = 0; j < words[i].length; j++) {
//       if (words[i].charAt(j) == count) {
//         if (wordStr === "") {
//           wordStr += words[i];
//         } else {
//           wordStr += ` ${words[i]}`;
//         }
//         j = -1;
//         i = 0;
//         count++;
//       }
//     }
//   }
//   return wordStr;
// }

// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

// function snail(array) {
//   let snailArr = [];
//   let l = array.length;
//   let x = 0;
//   let y = 1;
//   console.log("l", l)

//   if (l === 1) {
//     return array[0];
//   } else {
    //push values left to right in index 0 until the last digit is pushed,
    //then, keeping that same subArray index, push the value from index 1 - n
    //then push values from index n, right to left, 
    //then keeping that same subArray index, push the value from index n up to index 1 and move around again the next layer in


//     let xA = x;
//     for (let i = 0; i < l - x; i++) {
//       snailArr.push(array[x][i]); // push numbers across the array
//       console.log("array[x][i]", array[x][i])
//       xA++;
//       if (i === l - x - 1) {
//         for (let j = l - xA + 1; j < l - y + 1; j++) {
//           snailArr.push(array[j][l - x - 1]); // push numbers vertically from subArray to subArray
//           console.log('array[j][l - x - 1]', array[j][l - x - 1])
//           if (j === l - x - 1) {
//             for (let k = l - y; k > l - xA; k--) {
//               snailArr.push(array[l - y][k - x - 1]);  // push numbers right to left
//               console.log('array[l - y][k - x - 1]', array[l - 1][k - x - 1], "k:", k, 'y:', y, "x:", x)
//               if (k === x + 1) {
//                 for (let m = l - x - 2; m >= l - y - 2; m--){
//                   snailArr.push(array[l-x-1][x]) // push numbers bottom to top
//                   console.log('array[m][x]', array[m][x])
//                   i = x
//                 }
//               }
//             }
//           }
//         }
//         y++;
//         x++;
//         console.log("i, x, xA, y:", i, x, xA, y);
//         xA = x;
//         // i = 0
//       }
//     }
//   }
//   return snailArr;
// }

// console.log(snail([[1]])); // [1]);
// console.log(snail([[]])); // []);
// console.log(
//   snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// ); // [1, 2, 3, 6, 9, 8, 7, 4, 5]);
// console.log(
//   snail([
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25],
//   ])
// ); // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
// console.log(
//   snail([
//     [1, 2, 3, 4, 5, 6],
//     [20, 21, 22, 23, 24, 7],
//     [19, 32, 33, 34, 25, 8],
//     [18, 31, 36, 35, 26, 9],
//     [17, 30, 29, 28, 27, 10],
//     [16, 15, 14, 13, 12, 11],
//   ])
// ); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);


// function stringy(size) {
//   let string = ""
  
//   if (size > 1){  
//     for (let i = 0; i < size; i++){
//       if (i % 2 === 0){
//         string += "1"
//       } else {
//         string += "0"
//       }
//     }
//   } else {
//     string = "1"
//   }
//   return string
// }

// const breakChocolate = (n,m) => n * m > 1 ? (n * m) - 1 : 0
// let arr = []

// console.log(arr.length)

// console.log(isNaN("abc"))

// Codewars Draw stairs
// function drawStairs(n) {
//     let count = 0
//     let space = ""
//     let output = ""
//     while (count < n){
//       if (n === 1){
//         return "I"
//       }
//       if (count === n - 1){
//           output = output + space + "I"
//       } else {
//           output = output + space + "I\n"
//       }
//       space += " "
//       count++
//     }
//     return output
//   }

//   console.log(drawStairs(1))
//   console.log(drawStairs(3))
//   console.log(drawStairs(5))

// console.log('10' !== 10)



// function stringClean(testString){
    //     return (testString.replace(/\d/g, ""))
    // }
    
// function stringClean(){
//     let sample = "This looks5 grea8t!";
//     console.log (sample.replace(/\d/g, ""));
//   }
// stringClean()

// let formula = 'c423 783; vt&Sq154 DmY834 HS989 K&AG495 qm989 OF955';
// let reg = /[a-z!\s]/ig;
// matches = formula.match(reg);

// console.log(matches.toString().replace(/,/g, ""))

// console.log(undefined + 1)
// console.log(null + 1)

// function yearDays(year) {
    // year % 4 === 0 ? (year % 100 === 0 ? (year % 400 === 0 ? `${year} has 366 days` : `${year} has 365 days`) : `${year} has 366 days`) : `${year} has 365 days`
    // return ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 400 === 0)) ? (`${year} has 366 days`) : (`${year} has 365 days`)

  //   if (year % 4 === 0){
  //     if (year % 100 === 0){
  //       if (year % 400 === 0){
  //         return `${year} has 366 days`
  //       }
  //         return `${year} has 365 days`
  //     }
  //     return `${year} has 366 days`
  //   }
  //   return `${year} has 365 days`
//   }

//   console.log(yearDays(2000))
//   console.log(yearDays(1974))
//   console.log(yearDays(-16))

// function distinct(arr) {
//     let unique = true
//     let newArr = [arr[0]]
//     for (let i = 1; i < arr.length; i++){
//         for (let j = 0; j < i; j++){
//             if (arr[j] === arr[i] && i !== j){
//                 unique = false
//             }
//         }
//         if (unique){
//             newArr.push(arr[i])
//         }
//         unique = true
//     }
//     return newArr
//   }

//   return [...new Set(a)]

//   console.log(distinct ([1,2,1]))

// function findSmallestInt(arr) {
//     console.log(arr)
//     arr = arr.sort(function(a, b) {
//         return a - b;
//       })
//     console.log('arr after sort', arr)
//     return arr[0];
//   }

//   findSmallestInt([12,9,23,100])

function isValid(formula){
    if ((formula.includes(1) && formula.includes(2)) || (formula.includes(3) && formula.includes(4)) || (!formula.includes(7) && !formula.includes(8))){
        return false
    }
    if (formula.includes(5) && formula.includes(6)){
        return true
    }
    if ((!formula.includes(5) && !formula.includes(6)) && (formula.includes(7) || formula.includes(8))){
        return true
    }
    return false
  }

  console.log(isValid([1,3,5,7]))