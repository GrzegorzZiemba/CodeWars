function rgb(r, g, b) {
  let rgb = [r, g, b];

  let hexaString = "";
  let newNumber = 0;
  let main = 0;
  let decimal = 0;
  rgb.forEach((element) => {
    if (element > 255) {
      element = 255;
      hexaString += "FF";
    } else if (element <= 0) {
      element = 0;
      hexaString += "00";
    } else {
      newNumber = element / 16;
      main = Math.floor(newNumber);

      hexaString += checkIfBiggerThen(main);
      console.log(hexaString);
      decimal = newNumber.toString().split(".");

      decimal = "0." + decimal[1];
      console.log(decimal);
      decimal = parseFloat(decimal);

      if (decimal === 0) {
        hexaString += "0";
      } else {
        decimal = decimal * 16;

        console.log("decimal x " + decimal);

        decimal = decimal.toString().substring(0, 2);
        console.log(decimal);
        decimal = parseInt(decimal);
        hexaString += checkIfBiggerThen(decimal);
        console.log("as second : " + hexaString);
      }
    }
  });
  return hexaString;

  // complete this function
}

function checkIfBiggerThen(something) {
  if (something == 10) {
    return (something = "A");
  } else if (something == 11) {
    return (something = "B");
  } else if (something == 12) {
    return (something = "C");
  } else if (something == 13) {
    return (something = "D");
  } else if (something == 14) {
    return (something = "E");
  } else if (something == 15) {
    return (something = "F");
  } else if (something == 0) {
    return (something = 0);
  } else {
    return something;
  }
}
