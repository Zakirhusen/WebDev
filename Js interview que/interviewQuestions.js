console.log("react");
console.log(typeof 42);
let a = [1];
let [b] = a;
console.log(b);
// console.log(++a)

const myfun = () => {
  let x = 2;
  return () => console.log("a is" + x);
};
const x = 1;
const test = myfun();
test();
// myfun()
//string returns true
console.log(Boolean("false"));
console.log(Boolean(false));
console.log(Boolean(true));

//empty string returns false
// empty str i.e Boolean('') returns false
console.log("empty str i.e Boolean('') returns" +" "+ Boolean(""));

//empty array or obj returns true
// Boolean([]) returns  true
console.log("Boolean([]) returns " +" "+ Boolean([]));

// Boolean([].length-->retruns 0) returns  false
console.log("Boolean([].length-->retruns 0)so it returns " +" "+ Boolean([].length));

// Boolean({}) returns true
let aa={}
console.log("Boolean({}) returns" +" "+ Boolean(aa));

// Boolean('false') returns true
console.log("Boolean('false') returns" +" "+ Boolean("false"));

// Boolean(0) returns false
console.log("Boolean(0) returns" +" "+ Boolean(0));

// Boolean(-1) ie negative value returns true
console.log("Boolean(-1) returns" +" "+ Boolean(-1));

// Boolean(undefined) returns false
console.log("Boolean(undefined) returns" +" "+ Boolean(undefined));

// Boolean(null) returns false
console.log("Boolean(null) returns" +" "+ Boolean(null));

// Boolean(NaN) returns false
console.log("Boolean(NaN) returns" +" "+ Boolean(NaN));


// 2. Que-fibonacci series and pascals triangle numbers
const fibonacci = (fibNo) => {
  let temp = [];

  if (fibNo >= 1) {
    temp = [0];
  }
  if (fibNo >= 2) {
    temp = [0, 1];
  }
  if (fibNo >= 3) {
    temp = [0, 1];
    for (let i = 0; i < fibNo - 2; i++) {
      let lastIndex = temp[temp.length - 1];
      let befLastIndex = temp[temp.length - 2];

      // console.log(lastIndex)
      temp.push(lastIndex + befLastIndex);
      // console.log(temp)
    }
  }
  return temp;
};
let f = fibonacci(20);
console.log(f);
// pascals triangle
//      1     row1
//     1 1    row2
//    1 2 1   row3
//   1 3 3 1  row4
//  1 4 6 4 1

let pasc = (rowNo) => {
  if (rowNo >= 1) {
    pascArray = [1];
  }
  if (rowNo >= 2) {
    pascArray = [1, 1];
  }
  if (rowNo >= 3) {
    pascArray = [1, 1];
    for (let i = 0; i < rowNo - 2; i++) {
      temp = [];
      for (let i = 0; i < pascArray.length - 1; i++) {
        temp.push(pascArray[i] + pascArray[i + 1]);
      }
      pascArray=[1,...temp,1]
    }
  }
  return pascArray;
};
let p=pasc(8);
console.log(p)

// *****************
console.log([...`${321}`]);