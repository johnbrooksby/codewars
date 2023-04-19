var array = [
  ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
  ["name2", 120, ["B", "A", "A", "A"]],
  ["name3", 160, ["B", "A", "A", "A", "A"]],
  ["name4", 140, ["B", "A", "A", "C", "A"]],
];

function findHack(arr) {
  let hacker = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let lowCount = 0;
    arr[i][2].forEach((e) => {
      if (e === "A") {
        count += 30;
      } else if (e === "B") {
        count += 20;
      } else if (e === "C") {
        count += 10;
        lowCount++;
      } else if (e === "D") {
        count += 5;
        lowCount++;
      } else {
        lowCount++;
      }
    });
    for (let j = 0; j < arr[i][2].length; j++) {
      if (arr[i][2].length >= 5 && lowCount === 0) {
        count += 20;
      }
    }
    if (count < arr[i][1]) {
      hacker.push(arr[i][0]);
    }
  }
  return hacker;
}

console.log(findHack(array));
