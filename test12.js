// function nearestSq(n){
//     let num = Math.sqrt(n)

//     let numFloor = Math.floor(num)

//     if((Math.pow(numFloor + 1, 2) - n) < (n - Math.pow(numFloor, 2))){
//       return Math.pow(numFloor + 1, 2)
//     }
//     return Math.pow(numFloor, 2)
//   }

//   console.log(nearestSq(121))

// function findUniq(arr) {
//   if (arr[0] === arr[1]){
//     for (let i = 0; i < arr.length; i++){
//       if (arr[0] !== arr[i]){
//         return arr[i]
//       }
//     }
//   } else if (arr[0] === arr[2]){
//     return arr[1]
//   } else if (arr[1] === arr[2]){
//     return arr[0]
//   }
// }

// let numArray = [0,1,2,3,4,5,6,7,8,9];
// function isItANum(str) {
//   let phone = "";
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < numArray.length; j++) {
//       if (+str[i] === numArray[j]) {
//         phone += str[i];
//       }
//     }
//   }
//   phone = phone.split(' ').join('')
//   console.log("phone:", phone)
//   if (+phone[0] !== 0 || phone.length !== 11) {
//     return "Not a phone number";
//   } else {
//     return phone;
//   }
// }

// console.log(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"));


// function consecutive(arr) {
//   let num = 0;
//   const sorted = arr.sort((a, b) => a - b)
//   for (let i = 0; i < arr.length; i++){
//     while (arr[i] + 1 < arr[i + 1]){
//       num++
//       arr[i] += 1
//     }
//   }
//   return num
// }

// console.log(consecutive([-33, -25, 100]))

// function largest(n, array) {
//   let res = []
//   const sorted = array.sort((a, b) => b - a)
//   console.log("sorted", sorted)
//   for (let i = n - 1; i >= 0; i--){
//     console.log('i:', i)
//     res.push(sorted[i])
//     console.log("res:", res)
//   }
//   return res;
// }

// console.log(largest(2, [10,9,8,7,6,5,4,3,2,1]))

function barTriang(p1, p2, p3){
  let cent = []
  cent.push(+((p1[0] + p2[0] + p3[0]) / 3).toFixed(4))
  cent.push(+((p1[1] + p2[1] + p3[1]) / 3).toFixed(4)) 
  return cent
}

console.log(barTriang([4, 6], [12, 4], [10, 10]))