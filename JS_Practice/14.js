// function to deep clone an object.

const original = {
  name: "Alice",
  details: {
    age: 30,
    hobbies: ["coding", "reading"]
  },
  date: new Date()
};

// Create a deep clone
const clone = structuredClone(original);

// Modify the cloned object
clone.details.age = 31;
clone.details.hobbies.push("running");

console.log(clone.details.age); // Output: 31
console.log(original.details.age); // Output: 30 (original is unchanged)
console.log(original.details.hobbies); // Output: ["coding", "reading"] (original is unchanged)

// Benefits:
// - Creates independt copy of an Object, in which changes to the clone do not affect the original and vice versa.
// - During API Calls, deep clone helps to safely manipulate data without affecting the original data source.