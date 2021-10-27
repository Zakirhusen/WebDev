//````````````````````` Sets in javascript `````````````````````
console.log('Sets in javascript');

// Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.
// main use of set is to remove duplicates

// Initialize an empty set
const mySet = new Set();
// console.log(mySet);

// Adding values to set
mySet.add('Apple')
mySet.add('Apple')
mySet.add('apple')
mySet.add('Banana')
mySet.add(true)
mySet.add(false)
mySet.add(34)
// console.log(mySet);

// const mySet1 = new Set([[1,2,3],true,34,{name:"harry"}]);
// console.log(mySet1);

// console.log(mySet.size);

// Set.has() returns boolean
// console.log(mySet.has(34));
// console.log(mySet.has(348));

//delete() used to remove item set
// console.log(mySet.delete("Banana"));
// console.log(mySet.delete("Banana"));
// console.log(mySet);

// entries() returns Setiterator
console.log(mySet.entries())

console.log(mySet.values());

// clear() clear the set entries
// mySet.clear()
// console.log(mySet);

let setArray=Array.from(mySet);
console.log(setArray);

