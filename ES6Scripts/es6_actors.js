
let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
  },
  {

    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]

  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
      "Cowboy Boots"]
  }
];


let Id187 = academyMembers.find((ID) => ID.memID == "187" && console.log(ID.name));


console.log("-----------");


let films = academyMembers.filter((num) => num.films.length >= 3);
films.forEach((num) => console.log(num.name));

console.log("-----------");

let nameBob = academyMembers.filter((num) => num.name.includes("Bob"));
nameBob.forEach((num) => console.log(num.name));