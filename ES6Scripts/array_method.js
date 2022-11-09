let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 }, 
  { item: "Baking Potato", price: 1.89, quantity: 6 }, 
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 }, 
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 }, 
  { item: "Apples", price: 0.66, quantity: 6 }
];


function onlyName(array) {
  console.log(array.item);
}

cart.forEach(onlyName)
console.log("------------");

/// b reduce 

function getTotal(total, car) {
  return total + (car.price * car.quantity);
}
let total = cart.reduce(getTotal, 0);
console.log(total)
console.log("------------");
//c

cart.sort(function (a, b) {
  if (a.item < b.item) return -1;
  else if (a.item == b.item) return 0;
  else return 1;
});


cart.forEach(onlyName);
