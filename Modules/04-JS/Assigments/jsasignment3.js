const products1 = [
  { number: 1, price: 100, name: "Orange juice" },
  { number: 2, price: 200, name: "Soda" },
  { number: 3, price: 150, name: "Chocolate snack" },
  { number: 4, price: 250, name: "Cookies" },
  { number: 5, price: 180, name: "Gummy bears" },
  { number: 6, price: 500, name: "Chocolate bar" },
  { number: 7, price: 120, name: "Crackers" },
  { number: 8, price: 220, name: "Potato chips" },
  { number: 9, price: 80, name: "Small snack" },
];
function vendingMachine1(productNumber, moneyPaid) {
  let productName = "";
  let productChange = 0;
  let changeArray = [];
  // check validity of product number
  if (productNumber <= 0 || productNumber > 9) {
    return "Enter a valid product number";
  } else {
    productName = products1[productNumber - 1].name;
  }
  // check validity of money paid
  if (moneyPaid < products1[productNumber - 1].price) {
    return "Not enough money for this product";
  } else {
    productChange = moneyPaid - products1[productNumber - 1].price;
  }
  // calculate for change
  while (productChange >= 500) {
    productChange = productChange - 500;
    changeArray.push(" 500");
  }
  while (productChange < 500 && productChange >= 200) {
    productChange = productChange - 200;
    changeArray.push(" 200");
  }
  while (productChange < 200 && productChange >= 100) {
    productChange = productChange - 100;
    changeArray.push(" 100");
  }
  while (productChange < 100 && productChange >= 50) {
    productChange = productChange - 50;
    changeArray.push(" 50");
  }
  while (productChange < 50 && productChange >= 20) {
    productChange = productChange - 20;
    changeArray.push(" 20");
  }
  while (productChange < 20 && productChange >= 10) {
    productChange = productChange - 10;
    changeArray.push(" 10");
  }
  let output = "product: " + productName + ", change: [" + changeArray + " ]";
  return output;
}
console.log(vendingMachine1(4, 1130));
console.log(vendingMachine1(0, 500));
console.log(vendingMachine1(1, 90));

// Alternate Solution
function vendingMachine(products, payment, productNumber) {
  // in array.find, it is looping through the "products" array
  // the "product" parameter used is the current item looping in the function
  const productBought = products.find(
    (product) => product.number === productNumber
  );
  if (productBought === undefined) return "Enter a valid product number";

  const { name: productName, price: productCost } = productBought;
  // Equivalent to
  // const productName = productBought.name
  // const productCost = productBought.price
  if (payment < productCost) return "Not enough money for this product";

  let balance = payment - productCost;
  const coins = [500, 200, 100, 50, 20, 10].filter((coin) => coin <= balance);
  const change = [];

  for (let coin of coins) {
    const coinCount = Math.floor(balance / coin);
    const coinChange = Array.from({ length: coinCount }, () => coin);
    change.push(...coinChange);
    balance %= coin;
  }
  return {
    product: productName,
    change,
  };
}

// Products
const products = [
  { number: 1, price: 100, name: "Orange juice" },
  { number: 2, price: 200, name: "Soda" },
  { number: 3, price: 150, name: "Chocolate snack" },
  { number: 4, price: 250, name: "Cookies" },
  { number: 5, price: 180, name: "Gummy bears" },
  { number: 6, price: 500, name: "Chocolate bar" },
  { number: 7, price: 120, name: "Crackers" },
  { number: 8, price: 220, name: "Potato chips" },
  { number: 9, price: 80, name: "Small snack" },
];

// Test Cases
console.log(
  JSON.stringify(vendingMachine(products, 200, 7)) ===
    JSON.stringify({ product: "Crackers", change: [50, 20, 10] })
);
console.log(
  JSON.stringify(vendingMachine(products, 500, 0)) ===
    JSON.stringify("Enter a valid product number")
);
console.log(
  JSON.stringify(vendingMachine(products, 90, 1)) ===
    JSON.stringify("Not enough money for this product")
);
