function toWeirdCase(string) {
  //TODO
  newTable = [];
  var res = string.split(" ");
  let newString = "";
  res.forEach(element => {
    let newElement = element.length;
    for (let i = 0; i < newElement; i++) {
      if (i % 2 == 0 || i == 0) {
        newString += element[i].toUpperCase();
      } else {
        newString += element[i];
      }
    }
    newTable.push(newString);
    newString = "";
  });
  let equals = newTable.join(" ");
  return equals;
}
