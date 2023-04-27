function toCamelCase(str) {
  let splitStr = "";
  if (str.includes("-") === false && str.includes("_") === false) {
    return str;
  } else if (str.includes("_") || str.includes("-")) {
    splitStr = str.split(/[-_]/);
    for (let i = 1; i < splitStr.length; i++) {
      let firstLetter = splitStr[i][0].toUpperCase();
      let remaining = splitStr[i].slice(1, splitStr[i].length);
      splitStr[i] = firstLetter + remaining.toLowerCase();
    }
  }
  return splitStr.join("");
}

console.log(toCamelCase("a_Cat-Is-kawaii"));
