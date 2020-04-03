function findOdd(A) {
  console.log(A);
  let free = "";
  let counter = 0;
  try {
    A.forEach(element => {
      console.log(` To jest element ${element}`);
      let wu = A.find(number => {
        if (number == element) {
          counter += 1;
        }
      });
      console.log(counter);
      if (counter % 2 != 0) {
        free = element;
        throw free;
        counter = 0;
      } else {
        counter = 0;
      }
    });
  } catch (e) {
    if (e !== free) throw e;
  }
  return free;
}
