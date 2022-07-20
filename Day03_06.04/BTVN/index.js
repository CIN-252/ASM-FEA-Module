// Input a = [1,2,3,4] ; Output: [1,4,3,8] (Gợi ý: số chẵn nhân 2). Thực hiện với hàm Map:
const numbers = [1, 2, 3, 4];

function doubleEvenNumber(number) {
  if (number % 2 == 0) return (number *= 2);
  return number;
}

function doubleEvenNumberInArr(number) {
  return number.map((number) => doubleEvenNumber(number));
}

console.log("Result: ", doubleEvenNumberInArr(numbers));

// Thực hiện với hàm Filter:
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

// output: (mảng các con vật có weight > 50 kg):
function isWeightOver50Kg(animal) {
  if (animal.weight > 50) return true;
  return false;
}
function filterAnimalsOver50Kg(animal) {
  return animal.filter((animal) => isWeightOver50Kg(animal));
}
console.log("Animal over 50kg: ", filterAnimalsOver50Kg(animals));

// output: (mảng các con vật có chữ t trong name):
function filterAnimalsContainTInName(animal) {
  return animal.filter((animal) => animal.name.includes("t"));
}
console.log(
  'Animal contain "t" in name: ',
  filterAnimalsContainTInName(animals)
);

// output: apply filter and map [ "name: cat - size: small - weight: 5kg", "name: elephant - size: big - weight: 5000kg"]
function filterAnimalsByName(animal) {
  return animal.filter((animal) => {
    if (animal.name == "cat" || animal.name == "elephant") return animal;
  });
}
const result = filterAnimalsByName(animals).map((animal) => {
  return `"name: ${animal.name} - size: ${animal.size} - weight: ${animal.weight}kg"`;
});
console.log(result);

// TÍnh tổng mảng [1,2,3,4] với dkien: nếu giá trị là số chẵn thì x2
// Input: [1,2,3,4]
// Ouput : 16

const numbersInput = [1, 2, 3, 4];

function sumArrWithDoubleEvenNumber(number) {
  return doubleEvenNumberInArr(number).reduce((accumulate, currValue) => {
    return accumulate + currValue;
  });
}
console.log("SUM: ", sumArrWithDoubleEvenNumber(numbersInput));

// Tính tổng mảng [1,2,3,4] với điều kiện số lẻ * 2, số chẵn / 2
// Input: [1,2,3,4]
// Ouput : 11
function doubleOddAndHalveEvenNumber(number) {
  return number.map((number) => {
    if (number % 2 == 0) return (number /= 2);
    else if (number % 2 != 0) return (number *= 2);
  });
}
function sumArrWithDoubleOddAndHalveEvenNumber(number) {
  return doubleOddAndHalveEvenNumber(number).reduce((accumulate, currValue) => {
    return accumulate + currValue;
  });
}
console.log("SUM: ", sumArrWithDoubleOddAndHalveEvenNumber(numbersInput));
