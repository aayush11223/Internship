// a function to deep merge in js

//  recursively combining properties of nested objects and arrays to ensure no data is lost or overwritten by reference

function deepMerge(...objects) {
  const result = {};

  objects.forEach(obj => {
    for (let key in obj) {
      if (
        obj[key] &&
        typeof obj[key] === "object" &&
        !Array.isArray(obj[key])
      ) {
        if (!result[key]) result[key] = {};
        result[key] = deepMerge(result[key], obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  });

  return result;
}

// Objects to merge
const obj1 = { a: 1, b: { x: 10, y: 20 }, d: 5 };
const obj2 = { b: { y: 30, z: 40 }, c: 3 };
const obj3 = { b: { w: 50 }, e: 100 };

// Perform deep merge
const merged = deepMerge(obj1, obj2, obj3);

console.log(merged);