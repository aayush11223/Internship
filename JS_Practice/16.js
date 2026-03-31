// function to group array items by a property 

const people = [
  { name: "Alice", city: "New York" },
  { name: "Bob", city: "Paris" },
  { name: "Charlie", city: "New York" },
  { name: "David", city: "Paris" }
];

const grouped = Object.groupBy(people, person => person.city);

console.log(grouped);