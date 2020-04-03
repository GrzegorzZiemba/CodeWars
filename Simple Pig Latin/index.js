function pigIt(str) {
  const newArray = str.split(" ");
  //   console.log(newArray);
  let wu = "";
  newArray.forEach(element => {
    //     console.log(element[0]);
    //     console.log(element.substr(1, element.length));
    if (element == "!" || element == "?") {
      wu += element + " ";
    } else {
      wu += element.substr(1, element.length) + element[0] + "ay" + " ";
    }
  });
  let keke = wu.substr(0, wu.length - 1);
  return keke;
}
