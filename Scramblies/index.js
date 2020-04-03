function scramble(str1, str2) {
  return isEquivalent(getCharFrequencies(str1), getCharFrequencies(str2));
}

function getCharFrequencies(str) {
  return str.split("").reduce(function(container, char) {
    (container[char] += 1) || (container[char] = 1);
    return container;
  }, {});
}

function isEquivalent(a, b) {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);
  var akey = Object.values(a);
  var bkey = Object.values(b);
  console.log(akey, aProps);
  console.log(bkey, bProps);
  let newVeryble = true;
  for (let i = 0; i < bProps.length; i++) {
    let newValue = aProps.indexOf(bProps[i]);
    if (aProps.includes(bProps[i]) && akey[newValue] >= bkey[i]) {
      console.log(
        `aProps zawiera ${bProps[i]} oraz ${akey[newValue]} jest większe od ${bkey[i]}`
      );
    } else {
      newVeryble = false;
      return false;
    }
  }

  return newVeryble;
}

//
//
//
//
//
//
//
// STILL TOO SLOW ! ==,

// function scramble(str1, str2) {
//     let unorderedWords = str1.split("").sort();
//     let word = str2.split("").sort();
//     let count = 0;

//     for (let i = 0; i <= unorderedWords.length && count < word.length; i++) {

//       if (unorderedWords[i] === word[count]) {
//         count++;
//         console.log(count);
//       }
//     }
//     return count === word.length;
//   }

//
//
//
//
//
//
//
//
// TO SLOW SOLUTION -> But i like that :)

//
// function scramble(str1, str2) {
//   let newArray = str1.split("");
//   let word = str2.split("");
//   let flag = true;
//   try {
//     word.forEach(element => {
//       let newValue = newArray.indexOf(element);
//       console.log(newValue);
//       if (newValue != -1) {
//         for (var i = 0; i < newArray.length; i++) {
//           console.log(`Cokolwiek to by było :::::: ${newArray[i]}`);
//           if (newArray[i] === element) {
//             newArray.splice(i, 1);
//             break;
//           }
//         }
//       }
//       if (newValue == -1) {
//         console.log("zmieniłem wartość");
//         flag = false;
//         throw false;
//       }
//     });
//   } catch (e) {
//     if (e !== false) throw e;
//   }
//   return flag;
// }
