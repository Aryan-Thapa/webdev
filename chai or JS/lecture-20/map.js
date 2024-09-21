const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNumbers.map((nums) => nums + 10);
console.log(newNums);

const newArr = [];
const newNums2 = myNumbers.forEach((nums) => {
  newArr.push(nums + 10);
});
console.log(newArr);

// chaining: applying more than one method at once
const newNums3 = myNumbers.map((nums) => nums * 10).map((nums) => nums + 7).filter((nums)=>nums>=67);
console.log(newNums3);
