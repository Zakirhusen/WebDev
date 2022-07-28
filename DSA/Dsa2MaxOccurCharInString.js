// // problem statement : Maximum Occuring Characters in string
// // string-"adbdacd" o/p=>a-2,d-3,b-1,c-1
let maxCharInString = (str) => {
  let charObj = {};

  for (const ch of str) {
    i = 0;
    // console.log('str',str);
    // console.log(charObj[str[ch]]);
    if (!charObj[ch]) {
      charObj[ch] = 1;
    }
    for (const char of str) {
      if (char == ch) {
        i++;
      }
    }
    charObj[ch] = i;
  }
  return charObj;
};

// console.log(maxCharInString("zakirhusenayyubsabsaiyyad"));

// 2.way- optimization of code
function optimize1(arr) {
    charObj={}
    arr.split('').forEach(ele => {
        charObj[ele]=(charObj[ele]||0)+1
    });
    return charObj;
}
// console.log('asd;fl',"arr".split('').join(''));
// console.log(    optimize1("zakirhusenayyubsabsaiyyad"));


// 3.way- optimization of code
function optimize2(arr) {
    charObj={}
    arr.split('').forEach(ele => {
        charObj[ele]=charObj[ele]?charObj[ele]+1:1
    });
    return charObj;
}
console.log(    optimize2("zakirhusenayyubsabsaiyyadz"));
console.log("asdf"+78)
