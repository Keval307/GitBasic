let data = [
  {
    id: 1,
    name: "Andres",
    city: "Los Angeles",
    fees: 2500,
  },
  {
    id: 2,
    name: "Jang",
    city: "Chicago",
    fees: 2200,
  },
  {
    id: 3,
    name: "Shane",
    city: "Chicago",
    fees: 4200,
  },
  {
    id: 4,
    name: "John",
    city: "Hobart",
    fees: 900,
  },
  {
    id: 5,
    name: "Sean",
    city: "Chicago",
    fees: 1500,
  },
];

function addValue(addedId, addedName, addedCity, addedFees) {
  data.push({ id: addedId, name: addedName, city: addedCity, fees: addedFees });
  console.log(addedId, addedName, addedCity, addedFees)
}
export {data, addValue};
