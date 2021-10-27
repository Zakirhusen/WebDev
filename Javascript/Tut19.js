//````````````````````` ES6/2015 `````````````````````
// 1)let and const
// 2)Destructuring
// 3)Template String
// 4)Object Properties
// 5)spread operators
// 6)Rest operators

//      *********Destructuring************

// Array destructuring
// Example
// let myBiodata=['zakir','husen',32]
// let fName=myBiodata[0];
// let lName=myBiodata[1];
// let age=myBiodata[2];

// We can write above using Array destructuring like
// let [fName,lName,age]=myBiodata;
// we can add values too
// let [fName,lName,age,myNo='puc']=myBiodata;
// console.log(myNo);
// console.log(myBiodata);

// Object destructuring

let myBiodata = {
  fName: "zakir",
  lName: "husen",
  age: 32,
};
// console.log(myBiodata);
let { fName, lName, age, myNo = "puc" } = myBiodata;
// console.log(fName);
// console.log(typeof myBiodata);
// console.log(myBiodata);

// **********Object Properties ********

// We can use Dynamic properties using []
// let myName='zakir'
// let bio={
//     myName:'how are you',
//     [myName]:'how are you',
//     // 20+6:'is my age'
//     [20+6]:'is my age'
// }

// console.log(bio);

// No need to write key and value, if both are same
// let myName='zakir';
// let myAge=26;
// const bio={
//     Name:myName,
//     age:myAge
// }
// const bio={
//     myName:myName,
//     myAge:myAge
// }
// we write as
// let myBio={myName,myAge}

// console.log(myBio);

// Spread Operators
let colors = ["red", "yellow", "grey"];
// colors.push('green')
// // we add using spread operator ie ...Array name
// let myColors=[...colors, 'black','orange']
// console.log(myColors);

//````````````````````` ES7/2016 `````````````````````
// include and ** operator

// console.log(colors.includes('red'));
// console.log(colors.includes('re'));

//````````````````````` ES8/2017 `````````````````````
// String padding
// Object.values
// Object.entries

// String padding

// let str='zakir';
// paddingspace including existing str
// a=str.padStart(15);
// b=str.padEnd(15);
// console.log('h'+a);
// console.log(b+'h'+a);

// let myBiodata = {
//     fName: 'zakir',
//     lName: 'husen',
//     age: 32
// }

// Object.values  return array containing values

console.log(Object.values(myBiodata));

// Object.entries  return array containing array of key value pair
let entry = Object.entries(myBiodata);
console.log(entry);

// //````````````````````` ES8/2017 `````````````````````
// //Rest/spread operators works in objects also.Ex
// let myData={...myBiodata,myDeg:'BE'}
// console.log(myData);

//````````````````````` ES/2019 `````````````````````
// array .{flat}
// Object.fromEntries

// array .{flat}
let fArr = [
  ["zone1", "zone2"],
  ["zone3", "zone4"],
  ["zone5", "zone6"],
  [
    ["zone7", "zone8"],
    ["zone9", "zone10"],
  ],
];
// by default flats up to one level
// console.log(fArr.flat());
// // upto 2 level
// console.log(fArr.flat(2));
// // upto infinity
// console.log(fArr.flat(Infinity));

// convert array into object like key value pair ,it opposit like Object.entries
// Object.fromEntries

console.log((Object.fromEntries(fArr)));
console.log((Object.fromEntries(fArr)).zone1);

//````````````````````` ES/2020 `````````````````````
// bigInt
// to perform large integer
// let oldNum=Number.MAX_SAFE_INTEGER
// // let oldNum=Number.MIN_SAFE_INTEGER
// console.log(oldNum);
// console.log(oldNum+12);
// let newNum=9007199254740991n+12n
// console.log(newNum,typeof newNum);

("use strict");

a = 29.8;
// console.log(a);
