function maximizePoints(team1, team2) {
    let team1Array = []
    let wins = 0
    let count = 1
    team1 = team2.sort()
    for (let i = 0; i < team1.length; i++){
      for (let j = 0; j < team2.length; j++){
        if (team1[j] - count === team2[i]){
          team1Array.push(team1[j])
        } else {
          count++
          j = j - 1
          console.log(j, count)
        }
      }
      for (let i = 0; i < team1.length; i++){
        if (team1Array[i] > team2[i]){
          wins++
        }
      }
    }
    return wins  
  }

  console.log(maximizePoints([3, 2, 4], [1, 2, 3]))