function rocks(n) {
    //coding and coding..
    let counterStr = 0
    
    while(n > 0){
        if (n >= 100000000){
            counterStr += 9 * (n - 99999999)
            n -= (n - 99999999)  
        } else if (n >= 10000000){
            counterStr += 8 * (n - 9999999)
            n -= (n - 9999999)
        } else if (n >= 1000000){
            counterStr += 7 * (n - 999999)
            n -= (n - 999999)
        } else if (n >= 100000){
            counterStr += 6 * (n - 99999)
            n -= (n - 99999)
        } else if (n >= 10000){
            counterStr += 5 * (n - 9999)
            n -= (n - 9999)
        } else if (n >= 1000){
            counterStr += 4 * (n - 999)
            n -= (n - 999)
        } else if (n >= 100){
            counterStr += 3 * (n - 99)
            n -= (n - 99)
        } else if (n >= 10){
            counterStr += 2 * (n - 9)
            n -= (n - 9)
        } else if (n >= 1){
            counterStr += 1
            n--
        }
    }
    return counterStr;
  }

  console.log(rocks(134513452))

  // solution found on codewars
//   function rocks(n) {
//     for(var r=0,p=1,i=1;p*9<n;p*=10,i++){
//       r+=9*p*i
//       n-=9*p
//     }
//     return r+n*i
//   }