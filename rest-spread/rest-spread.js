// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }
const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

// my function
const findMin = (...nums) =>
  nums.reduce((min, currNum) => (min > currNum ? currNum : min));

// springboads function
const findMin1 = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// my function
const doubleAndReturnArgs = (arr, ...rest) => {
  const doubled = rest.map((arg) => arg * 2);
  return [...arr, ...doubled];
};
// sprinboards
const doubleAndReturnArgs1 = (arr, ...rest) => [
  ...arr,
  ...rest.map((arg) => arg * 2),
];

/** remove a random element in the items array
and return a new array without that item. */

// my function
// function removeRandom(items) {
//   const rand = Math.floor(Math.random() * items.length);
//   return items.filter((item, index) => {
//     if (index !== rand) {
//       return item;
//     }
//   });
// }

// springboards function
const removeRandom = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {}
const extend = (array1, array2) => [...array1, ...array2];
/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {}
const addKeyVal = (obj, key, val) => {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

/** Return a new object with a key removed. */

// function removeKey(obj, key) {}
const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {}
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Return a new object with a modified key and value. */

// function update(obj, key, val) {}

// function won't add another key only modify
const update = (obj, key, val) => {
  obj.hasOwnProperty(key) ? (obj[key] = val) : obj;
  return obj;
};

// this one will add if key is not there
const update2 = (obj, key, val) => {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
