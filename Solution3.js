let number = 8046957321;
number= number.toString();
let numberArray = number.split('');
numberArray = numberArray.map((n) => {
  return Number(n);
});

for(let i = 0; i < numberArray.length; i++) {
    for (let j = 0; j < numberArray.length-i; j++) {
        if (numberArray[j] > numberArray[j + 1]) {
            let temp = numberArray[j];
            numberArray[j] = numberArray[j + 1];
            numberArray[j + 1] = temp;
        }
    }
}

console.log(numberArray);
