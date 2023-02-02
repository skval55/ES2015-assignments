// 1 [1,2,3,4]

// 2 'ref'
// [...new Set("referee")].join("")

// 3 {[1,2,3] => true, [1,2,3] => false}
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

// 4
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// 5
const vowelCount = (str) => {
  str = str.toLowerCase();
  const vowelMap = new Map();
  for (let letter of str) {
    if (vowelMap.has(letter)) {
      vowelMap.set(letter, vowelMap.get(letter) + 1);
    } else if ("aeiou".includes(letter)) {
      vowelMap.set(letter, 1);
    }
  }
  return vowelMap;
};
