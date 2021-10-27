// Arrays
const marks = [56, 67, 49, 86, 49, 80];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 72, [2, 5, 6]];
// console.log(marks);

// array created using array constructor
const arr = new Array('Orange', 'Apple', 'Pineapple');
// console.log(arr[1]);
// console.log(arr.length);
// console.log(Array.isArray(arr));
// console.log(Array.isArray('arr'));

// changing values array
// arr[0]="banana";
// console.log(arr);
// let arrelem=arr[2];
// console.log(arrelem);

// let inc=arr.includes('Apple',2);
//     inc=arr.includes('Apple',1);
// console.log(inc)

// let value=marks.indexOf(49);
// value=marks.lastIndexOf(49);

// push():Appends new elements to the end of an array, and returns the new length of the array.
// value=marks.push(23)

// unshift():Inserts new elements at the start of an array, and returns the new length of the array.
// value=marks.unshift(12,34);

//shift() removes first elem and returns it
// value=marks.shift();
// marks.pop();
console.log(marks);

//pop() removes last elem and returns it
// value=marks.pop();

// value=marks.sort();

// value=marks.reverse();
// console.log(value);
// console.log(value);

// Concat()-Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// value=marks.concat(fruits);

//splice() @returns — An array containing the elements that were deleted.
// value=marks.splice(2,3,23)
// console.log(value);
// console.log(marks);

// find() if not found return undefined else return only first elem
// const prices = [200, 300, 400, 80, 5, 500, 600, 80];

// // to find price <400

// let pirce=prices.find((currElem)=> currElem<400);
// console.log(pirce);

// let pirceIndex=prices.findIndex((currElem)=> currElem<40);
// console.log(pirceIndex);

// filter method -Returns the elements of an array that meet the condition specified in a callback function.

// let filt=prices.filter((elem,index)=> elem<700);
// console.log(filt);

// sort() it work with string ,mutates original array
// console.log(filt.sort());
// console.log(filt);





// forof loop returns array element
// for (elem of prices) {
//     console.log(elem)
// }

// forin loop array index
// for (const elem in prices) {
//     console.log(prices[elem]);
//     console.log(elem);
// }



// forEach loop

// let x=prices.forEach((elem,index,array) => {
//     console.log(elem,index,array  )

// });
// forEach returns undefined while map returns array without mutating oringinal array
// console.log(x);
// console.log(prices);
// console.log(prices);

const prices = [200, 300, 400, 80, 5, 500, 600, 80];
// filter method
let filt = prices.filter((elem,index , arr) => {
    console.log(`${index},${arr}`)
    return elem>200;

    // map method doesnot return below it retuns only results like above
    // return `index n0 ${index} elemnt:${elem} ${arr} `
    
})
console.log(filt);