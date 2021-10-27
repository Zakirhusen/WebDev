// ````````````````````` iterators  ``````````````````````

// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     let nextIndex = start;
//     let iterationCount = 0;

//     const rangeIterator = {
//        next: function() {
//            let result;
//            if (nextIndex < end) {
//                result = { value: nextIndex, done: false }
//                nextIndex += step;
//                iterationCount++;
//                return result;
//            }
//            return { value: iterationCount, done: true }
//        }
//     };
//     return rangeIterator;
// }
// const it = makeRangeIterator(0, 10, 2);

// let result = it.next();
// while (!result.done) {
//  console.log(result.value); // 1 3 5 7 9
//  result = it.next();
// }

// console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]

function fruitsIterator(arr){
    let nextIndex=0;
    // This function will return an below object
    return{
        next:function(){
            if (nextIndex<arr.length) {
                return{
                    value:arr[nextIndex++],
                    done:false
                }
            } else {
                return{
                    done:true
                }                
            }
        }
    }
}
let fruits=['Apple','Grapes','Banana','Orange']
let fruit=fruitsIterator(fruits);
console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);