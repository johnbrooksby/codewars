// function nearestSq(n){
//     let num = Math.sqrt(n)
    
//     let numFloor = Math.floor(num)
    
//     if((Math.pow(numFloor + 1, 2) - n) < (n - Math.pow(numFloor, 2))){
//       return Math.pow(numFloor + 1, 2)
//     }
//     return Math.pow(numFloor, 2)
//   }

//   console.log(nearestSq(121))

  function findUniq(arr) {
    if (arr[0] === arr[1]){
      for (let i = 0; i < arr.length; i++){
        if (arr[0] !== arr[i]){
          return arr[i]
        }
      }
    } else if (arr[0] === arr[2]){
      return arr[1]
    } else if (arr[1] === arr[2]){
      return arr[0]
    }
  }