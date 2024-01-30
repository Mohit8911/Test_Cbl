var arr = [-2, 5, 3, -8, 10, -4];
console.log(sumOfPositives(arr));

function sumOfPositives(arr) {
  let sum = 0;
  arr.forEach((element) => {
    if (element > 0) {          // condition check
      sum += element;
    }
  });
  return sum;
}
