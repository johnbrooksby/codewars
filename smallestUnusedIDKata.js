// Here is my first solution to this kata, improved is below.
// I learned that I don't need more than one counter (i and min) in this scenario.
// I can use just the one counter and it works the same way.
function nextId(ids){
    let min = 0
    for (let i = 0; i <= ids.length; i++){
      if (ids.includes(min)){
        min++
      } else {      
        return min}
    }
  }
// Improved
function nextId(ids){
    let min = 0
    while (ids.includes(min)){
       min++
    }     
    return min
  }