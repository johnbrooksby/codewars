function odd(str) {
    let count = 0
    let O = 0
    let D = 0
    for (let i = 0; i < str.length; i++){
      if (str[i] === 'o'){
        O++
        console.log("O went up", O, i)
    } else if (str[i] === 'd' && O > D - O){
        D++
        console.log("D went up", D, i)
      }
    }
    if (O > 0 && D > 1){
      while(O > 0 && D > 1){
        O--
        count++
        D -= 2
        console.log(O, D, count)
      }
    }
    return count
  }

console.log(odd("oudddboddoooooo")) //1

console.log(odd("ouddddbo")) //1
