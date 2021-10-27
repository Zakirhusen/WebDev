// Stings And String Methods


// let string='zak"s';
// console.log(string);
// let Name='Hafeez';
// let age='12';

// // creating template using $
// let temp=`My name is ${Name} and My age is ${age} `
// console.log(temp)

// string concatination
let string="this is string";
console.log(string.includes('is'));

// console.log(string+Name);
// console.log(string.length);
// console.log(string[4]);
// console.log(string.charAt(5));

// finding position of letters
// first occurance
// let fposition=string.indexOf('is');

// if substring not present it returns -1
// let position=string.indexOf('js');

// another way finding position
// console.log(position);
//last occurance
// let lposition=string.lastIndexOf('is');
// console.log(position)

// console.log(string.endsWith('string'))
// console.log(string.endsWith('strig'))
// console.log(string.endsWith('g'))

// console.log(string.startsWith('th'))


// substring from string means string slicing ,slice takes -ve values also 
// substr=string.slice(1,7);
// substr=string.slice(0,-1);
// substr=string.slice(3,string.length);
// console.log(substr)

// Another way of string slicing using -substr(),it same as slice() but doesnot take -ve values
// substr1=string.substr(1,7);
// substr1=string.substring(1,6);
// console.log(substr1)


// replacing string
// repl=string.replace('this','That')
// console.log(repl)

// console.log(string.toUpperCase())
// console.log(string.toLowerCase())

// another type concating string ,we also use + notation
// console.log(string.concat(' And it is String','   This is also string'))

// trim() removes whitespaces at first and last
// let Name="   zakir     husen      "
// console.log(Name.trim())
// console.log(Name)

// converting string into array
// arr=string.split('')
// arr=string.split(' ')
// arr=string.split(' s')
// arr=string.split('s ')
// console.log(arr)

// let fname='Zakir';
// let lname="Husen";
// let myname=`<h1>This is My Name</h1>
//             <p>My firstNameis:${fname}</p>
//             <p>My lastNameis:${lname}</p>
//              `;
// document.body.innerHTML=myname
