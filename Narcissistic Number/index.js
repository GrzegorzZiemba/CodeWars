function narcissistic(value) {
  const toString = value.toString();
  const newArray = toString.split("");
  const arrayLength = toString.length;
  console.log(`${arrayLength} to długość !`);
  let newNumber = 0;
  newArray.forEach(element => {
    newNumber += Math.pow(element, arrayLength);
  });
  return newNumber == value ? true : false;
}
