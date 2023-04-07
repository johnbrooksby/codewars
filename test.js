var kookaCounter = function(laughing) {
  // Your code here!
  let maleCount = 0;
  let femaleCount = 0;
  let call = laughing.split('a');
  
  for (let i = 0; i < call.length; i++){
      if (i === 0){
          if (call[i] === 'H'){
              maleCount++;
            } else if (call[i] === "h"){
                femaleCount++;
            }
        } else {
            if (call[i] === 'H' && maleCount <= femaleCount && call[i] !== call[i - 1]){
                maleCount++;
            } else if (call[i] === "h" && femaleCount <= maleCount && call[i] !== call[i - 1]){
                femaleCount++;
            }
        }
    }
    console.log(maleCount, femaleCount)
    return maleCount + femaleCount;
}

console.log(kookaCounter('HaHahahaHaHa'))