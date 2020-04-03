function towerBuilder(nFloors) {
  let newArray = [];
  for (let i = 0; i < nFloors; i++) {
    if (i == 0) {
      if (nFloors > 1) {
        newArray.push(" * ");
      } else {
        newArray.push("*");
      }
    } else {
      if (i == nFloors - 1) {
        newArray.push("*".repeat(2 * i + 2 - 1));
      } else {
        newArray.push(" " + "*".repeat(2 * i + 2 - 1) + " ");
        for (let j = 0; j < i; j++) {
          newArray[j] = " " + newArray[j] + " ";
        }
      }
    }
  }
  return newArray;
}
