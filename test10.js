var greatestDistance = function(data) {
    let dist = 0;
    for (let i = 0; i < data.length; i++){
      for (let j = 0; j < data.length; j++){
        if (data[i] - data[j] === 0 && i != j && j - i > dist){
          dist = j - i;
        }
      }
    }
    return dist;
  };