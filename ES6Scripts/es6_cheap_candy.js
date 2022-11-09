let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Gum", price: 3.00 },

];


let somePeople = products.filter(p => p.price < 4);

for (let i = 0; i < somePeople.length; i++) {
  console.log(somePeople[i].product + " " + somePeople[i].price);
}



//2
let mm = products.filter(p => p.product === "M&Ms");

for (let i = 0; i < mm.length; i++) {
  console.log(mm[i].product + " " + mm[i].price);
}