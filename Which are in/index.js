function inArray(array1, array2) {
  let newTable = [];
  array1.forEach(element => {
    console.log(element);
    array2.forEach(arrs => {
      if (arrs.includes(element)) {
        if (newTable.includes(element)) {
        } else {
          newTable.push(element);
        }
      }
    });
  });

  return newTable.sort();
}
