// Map:
// BT1:
console.log("BT1:");
// arrInput = [1, 2, 3, 4]
// arrOutput = [6, 7, 8, 9]

const arrInput = [1, 2, 3, 4];
const arrOutput = arrInput.map(plusFiveToEachElement);

function plusFiveToEachElement(value) {
  return value + 5;
}

const arrOutput_Callback = arrInput.map((value) => value + 5);

console.log("Result: ", arrOutput);
console.log("Result: ", arrOutput_Callback);

// BT2:
console.log("BT2:");
/* arrOutput: [{value: 1, isOdd: true}, {value: 2, isOdd: false}, {value: 3, isOdd: true}, {value: 4, isOdd: false}] */

function isOddNumber(number) {
  if (number % 2 == 1) return true;
  return false;
}

function convertToCheckedOddArr(arr) {
  return arr.map((number) => {
    let isOdd;
    if (isOddNumber(number)) {
      isOdd = "true";
    } else {
      isOdd = "false";
    }
    return { number: number, isOdd: isOdd };
  });
}

console.log("Result: ", convertToCheckedOddArr(arrInput));

/* BT3:
Output: ["name:... - size:... - weight:...kg", "...", "..."] */
console.log("BT3:");

const animals = [
  {
    name: "cat",
    size: "small",
    weight: 5,
  },
  {
    name: "dog",
    size: "medium",
    weight: 10,
  },
  {
    name: "elephant",
    size: "big",
    weight: 5000,
  },
];

function getAnimalInfo(animal) {
  return `name: ${animal.name} - size: ${animal.size} - weight: ${animal.weight}kg`;
}

function convertAnimalToString() {
  return animals.map(getAnimalInfo);
}

//Viet tong quat:
function convertAnimalToString_C2(arr) {
  return arr.map((item) => {
    return `name: ${item.name} - size: ${item.size}`;
  });
}

console.log(animals);
console.log("Result: ", convertAnimalToString());
console.log("Result: ", convertAnimalToString_C2(animals));

// BT4: Filter
// Filter 4 Character:
console.log("BT4");
const words = ["Thuan", "Cin", "An", "Nguyen", "Loan", "Ngan"];
const _4Character = words.filter((word) => word.length === 4);
console.log("4 Character: ", _4Character);

// Contain "a":
function findACharacterInName() {
  return words.filter((word) => {
    return word.includes("a");
  });
}

console.log('Contain "a": ', findACharacterInName());

// const AContain = words.filter((word) => word.includes("a"));
// console.log('Contain "a": ', AContain);

// BT5: Reduce
console.log("BT5");
const input = [1, 2, 3, 4];

const sum = input.reduce((accumulate, currValue, currIndex, array) => {
  return accumulate + currValue;
}, 0);

console.log("Sum: ", sum);
