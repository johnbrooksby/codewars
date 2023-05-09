function order(words) {
  let wordStr = "";
  let count = 1;

  if (words.length > 0) {
    words = words.split(" ");
  } else {
    return words;
  }
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i].charAt(j) == count) {
        if (wordStr === "") {
          wordStr += words[i];
        } else {
          wordStr += ` ${words[i]}`;
        }
        j = -1;
        i = 0;
        count++;
      }
    }
  }
  return wordStr;
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
