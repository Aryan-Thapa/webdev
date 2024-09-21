const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = myNums.reduce((acc, curr) => {
  console.log(`acc:${acc} and currval:${curr}`);
  return acc + curr;
}, 0);

console.log(result);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const totalBill = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(totalBill);
