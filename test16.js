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

function snail(array) {
  let snailArr = [];
  let l = array.length;
  let x = 0;
  let y = 1;
  console.log("l", l)

  if (l === 1) {
    return array[0];
  } else {
    //push values left to right in index 0 until the last digit is pushed,
    //then, keeping that same subArray index, push the value from index 1 - n
    //then push values from index n, right to left, 
    //then keeping that same subArray index, push the value from index n up to index 1 and move around again the next layer in


    let xA = x;
    for (let i = 0; i < l - x; i++) {
      snailArr.push(array[x][i]); // push numbers across the array
      console.log("array[x][i]", array[x][i])
      xA++;
      if (i === l - x - 1) {
        for (let j = l - xA + 1; j < l - y + 1; j++) {
          snailArr.push(array[j][l - x - 1]); // push numbers vertically from subArray to subArray
          console.log('array[j][l - x - 1]', array[j][l - x - 1])
          if (j === l - x - 1) {
            for (let k = l - y; k > l - xA; k--) {
              snailArr.push(array[l - y][k - x - 1]);  // push numbers right to left
              console.log('array[l - y][k - x - 1]', array[l - 1][k - x - 1], "k:", k, 'y:', y, "x:", x)
              if (k === x + 1) {
                for (let m = l - x - 2; m >= l - y - 2; m--){
                  snailArr.push(array[l-x-1][x]) // push numbers bottom to top
                  console.log('array[m][x]', array[m][x])
                  i = x
                }
              }
            }
          }
        }
        y++;
        x++;
        console.log("i, x, xA, y:", i, x, xA, y);
        xA = x;
        // i = 0
      }
    }
  }
  return snailArr;
}

console.log(snail([[1]])); // [1]);
console.log(snail([[]])); // []);
console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1, 2, 3, 6, 9, 8, 7, 4, 5]);
console.log(
  snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
); // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
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
