//````````````````````` Maps in javascript `````````````````````
console.log('Map in javascript');
// in Map we key , value pair
let myMap = new Map();
// console.log(myMap);
const key1='myStr',key2={},key3=function(){};

// setting map values key, value  pair
myMap.set(key1,'This is string')
myMap.set(key2,'This is a blank obj')
myMap.set(key3,'This is an empty function')
// console.log(myMap);
// console.log(myMap.size);

// myMap.key and myMap.values return Mapiterator
// a=myMap.keys()
// a=myMap.values()
// console.log(a);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);

// To get values of map
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));

//myMap return item=key,value pair array
for (const item of myMap) {    
    // console.log('item is ',item);
}

// here return key and value
for (const [key,value] of myMap) {
    // console.log('key is ',key,' value is '+value);
}

for (const key of myMap.keys()) {    
    // console.log('key is ',key);
}
for (const key of myMap.values()) {    
    // console.log('key is ',key);
}

myMap.forEach((key,value) => {
    // console.log(key,value);
});

// converting map to array
let myArray=Array.from(myMap)
console.log('myArray is-->',myArray);

let myKeysArray=Array.from(myMap.keys())
console.log('myKeysArray is-->',myKeysArray);

let myValues=Array.from(myMap.values())
console.log('myValues is-->',myValues);