// arrInput = [1, 2, 3, 4]
// arrOutput = [6, 7, 8, 9]
const arrInput = [1, 2, 3, 4];
const arrOutput = arrInput.map(plusFiveToEachElement);

function plusFiveToEachElement(value) {
  return value + 5;
}

console.log(arrOutput);

/* arrOutput: [{value: 1, isOdd: true}, {value: 2, isOdd: false}, {value: 3, isOdd: true}, {value: 4, isOdd: false}] */
function isOddNumber(number) {
  if (number % 2 == 1) return true;
  return false;
}

function convertToCheckedOddArr(arr) {
  return arr.map((number) => {
    // let value = number;
    let isOdd;
    if (isOddNumber(number)) {
      isOdd = "true";
    } else {
      isOdd = "false";
    }
    return { number, isOdd };
  });
}

console.log(convertToCheckedOddArr(arrInput));
