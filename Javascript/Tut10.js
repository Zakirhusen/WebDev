
// ```````````````````Functions ``````````````````

// total(2,5);
// function total(a,b){
//     console.log(a+b)
// }
// total(12,55);
// total();
// let funExp=total(58,87)
// funExp;


// function total(a,b){
//    return a+b;
// }
// let funExp=total(58,87)
// console.log( funExp, total(7,3));

// function total(a, b) {
//     a = 20;
//     b = 10;
//     return a + b;
// }
// console.log(total(30, 12));


// we can write function in variable this is anonymous function
// default argument


// let funExp=function (a,b=700){
//     return a+b;
// }
// let sum=funExp(7,3);
// let sum1=funExp(77,43);
// console.log( funExp(7,3),funExp, sum);



//Fat arrow Function =>
// let sum=(a,b)=>{
//     return a+b;
// } 

// it can be shorten
// if two or more parameter need of parenthesis
// let sum=(a,b)=> a+b;

// console.log(sum(4,5))

// if one parameter no need of parenthesis
// let half=a=>a/2;
// console.log(half(37))

// if no parameter  need parenthesis

// let greet=()=>"how are you"
// console.log(greet())


// Map and reduce method
// map method,returns an array that contains the results without mutating original array.it is chainable it can be used with reduce,filter ,sort method 
// let arr1=[1,4,9,16,25];
// let newArr=arr1.map((elem,index,arr)=>{
//     // return elem;
    // return index;
    // return elem>9;
    // return `index n0 ${index} elemnt:${elem} ${arr} `

// })
// console.log(newArr);

// let newArr1=arr1.forEach((elem,index,arr)=>{
//     // return elem;
//     // return index;
//     // return elem>9;
//     return `index n0 ${index} elemnt:${elem} ${arr} `

// })
// console.log(newArr1);



// 1.find square root of each element of  arry
// 2.multiply each element by 2 and return those elements which greater than 100 .arr3=[20,50,,63,232,76,45,54,70]

// sol .1
// let arr2=[25,36,49,64,81]
// let newArr2=arr2.map((elm)=> Math.sqrt(elm));
// console.log(newArr2);

// sol 2
let arr3=[20,50,,63,232,76,45,54,70]
// let newArr3=arr3.map((elem)=> (elem*2)).filter((elem)=>elem>100) ;
// console.log(newArr3);




// Reduce() method uses-flatten an array means convert the 3d or 2d array into single dimension array 2.result -single output value
// it takes four arguments accumator,curr value,currIndex,array
// -Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.



// Ex-multiply each element by 2 and return those elements which greater than 100 .arr3=[20,50,,63,232,76,45,54,70] make sum of resulting elements


// let newArr3=arr3.map((elem)=> (elem*2)).filter((elem)=>elem>100).reduce((acc,elem)=>{
//     let sum=acc+=elem;
//     return sum;
// });
// console.log(newArr3);


// ex-
// let arr4=[2,3,4,5,6,]
// // let newArr4=arr3.reduce((acc,elem,index,arr)=>`Acc:${acc}  elem:${elem}  index:${index}`);
// let newArr4=arr4.reduce((acc,elem,index,arr)=>{
//     // debugger;
//     // console.log(elem,acc);
//     return acc+elem;
// },9 );
// // initial value of acc here 9 otherwise first element of array
// console.log(newArr4);


// ex multi-d to single dimensions array that is flatten array

let d2d=[
    ['zone1','zone2'],
    ['zone3','zone4'],
    ['zone5','zone6'],
    ['zone7','zone8']
];

let d1d=d2d.reduce((acc,elem)=>acc.concat(elem));

console.log(d1d);

