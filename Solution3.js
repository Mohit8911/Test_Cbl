let number = 8046957321;
number= number.toString();                           // First convert to string
let numberArray = number.split('');                 // Then split it into array
numberArray = numberArray.map((n) => {
  return Number(n);                                  // convert to number from string
});

for(let i = 0; i < numberArray.length; i++) {                   //applying sortting
    for (let j = 0; j < numberArray.length-i; j++) {
        if (numberArray[j] > numberArray[j + 1]) {
            let temp = numberArray[j];
            numberArray[j] = numberArray[j + 1];                //swaping data
            numberArray[j + 1] = temp;
        }
    }
}

console.log(numberArray);
