let arr = [1,1,2,4,7,4,9,1,5,8,7,2,4,6,9];
// My method
function countUniqueNumber(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(uniqueArr.includes(arr[i]))) {
      uniqueArr.push(arr[i]);
    }
  }
  console.log('unique arr',uniqueArr);
  return uniqueArr.length
}
let unique=countUniqueNumber(arr)
console.log('unique numberlength',unique);
