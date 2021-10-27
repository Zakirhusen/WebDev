// Type conversion  and type coersion

// let myvar = 45;
// myvar = String(45);
// console.log(myvar + " is " + (typeof myvar));

// let boolianvar = true;
// boolianvar = String(true);
// console.log(boolianvar + " is " + (typeof boolianvar));

// let num="57"
//     num1=Number(num)
// console.log(num +" is " +(typeof num1));

// when we trying to convert string into no o/p NaN
// let num = "558jk99";
// let num="23"
// let num1 = Number(num);
// console.log(num1 + " is " + (typeof num1));

// converting array into string
// let arr1=([1,3,4,6,7,8,true])
// console.log(arr1.length)
// let arr=String([1,3,4,6,7,8,true])
// console.log(arr.length)


// let i=new Date()
// console.log(i+" is "+typeof(i));
// let i1=String(new Date());
// console.log(i1+" is "+typeof(i1));


// Converting to string using toString() method
// let str=true;
// let str1=str.toString();
// console.log(str1+" "+ typeof(str1));

// str=Number([1,3,5,6])
// str=Number(false)
// str=Number(true)
// console.log(str+" "+ typeof(str));

// to convert float into integer
// let numb=parseInt("12.98772");

// to convert integer into float 
// numb=parseFloat("4.2334");

// toFixed is  used to give how much decimal no
// console.log(numb.toFixed(2)+" "+ typeof(numb));


// Type Coersion

let mystr="696";
let mynum=34;
//in this coersion convert number into string
console.log(mystr+mynum);
console.log(typeof(mystr+mynum));


//in this coersion convert  string into number 
console.log(mystr-mynum);
console.log(typeof(mystr-mynum));

