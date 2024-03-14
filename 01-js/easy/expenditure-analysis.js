/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // first check if transaction array is empty
  if (transactions.length === 0) {
    console.log("Empty transaction array ");
  }

  // if not empty then -->
  // initialize an object to store the category and price
  const categoryStore = {};

  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // if the category already exists, add the price to the total
    if (categoryStore[category]) {
      categoryStore[category] += price;
      console.log(categoryStore);
    } else {
      // if the category doesn't exist, create a new one
      categoryStore[category] = price;
      console.log(categoryStore);
    }
  });

  // convert object into array of objects
  const totalSpentByCategory = Object.keys(categoryStore).map((category) => ({
    category,
    totalSpent: categoryStore[category],
  }));

  return totalSpentByCategory;

  return [];
}

let transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656076800000,
    price: 20,
    category: "Clothing",
    itemName: "Shirt",
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 15,
    category: "Food",
    itemName: "Coffee",
  },
];

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
