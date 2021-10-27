// ``````````````````````Regular Expression ``````````````````````
// console.log("This tutorial of regular eXpression");
// below is regular expr literalin js
let reg = /javascript/;
reg = /javascript/g; //here is global flag search for whole string
reg = /Javascript/i; //here i is case insensitive
// reg=/Javascript/ig  //here more than one flag can be apply

// console.log(reg);
// console.log(reg.source);

// functions to match expressions
let str = "This is javascript tutorial for javascript learners";
// 1.exec()-this function will return an array for match or null for no match
let result = reg.exec(str);
// console.log(result);
// result=reg.exec(str)
// if global flag not apply only first match return
// console.log(result);
// result=reg.exec(str)
// console.log(result);
// console.log(result[0]);
// console.log(result[1]);
// console.log(result.index);
// console.log(result.input);
// console.log(result.groups);

// 2.test()-Returns a Boolean value that indicates whether or not a pattern exists in a searched string.

result = reg.test(str);
// console.log(result);

// 2.match()-//Matches a string or an object that supports being matched against, and returns an array containing the results of that search, or null if no matches are found.

result = str.match(reg);
result="str".match(reg)
// console.log(result);

// 4.search()-Returns index of first match else -1
result = str.search(reg);
// result="str".search(reg)
// console.log(result);

// 5.replace()-Replaces text in a string,
// result = str.replace(reg,"python");
// console.log(result);


// ````````````````````` Metacharacter symbols  ``````````````````````
let stri="javascript is programming lang";

let regex=/javascript/;

// regex=/^jav/;//^ means expr will match if string startswith

// regex=/ang$/;//$ means expr will match if string endswith

// regex=/jav.script/;//. means expr will match if any one character

// regex=/jav*ascript/;//* means expr will match if any zero or more character
// regex=/j*ascript/;//* means expr will match if any zero or one character
// stri="javvvvvvvvvvascript is programming lang";//for * meta char

regex=/ja?vascri?pt/ //? means optional char here"a" and "i" are optional
stri="hi this is a jvascrpt";
regex=/ja?vascri?pt/ //? means optional char here"a" and "i" are optional
stri="hi this is a jvascrpt";

regex=/ja\*vascript/ //\ means escape sequence 
stri="hi this is a ja*vascript";

let result1=regex.exec(stri);
// console.log('the result from exec() is ',result1);
if (regex.test(stri)) {
    // console.log(`the string "${stri}" matches the ${regex.source}`);
} else {
    console.log(`the string "${stri}" does not matches the ${regex.source}`);   
}


// ````````````````````` character sets  ``````````````````````
// char set can write in []
let str1="javascrIpt3";
let regex1=/javascr[a-z]pt/ //[a-z] means match any char between a to z 
regex1=/javascr[ijk]pt/     //[ijk] means match any char in ijk set  
regex1=/javascr[a-k]pt/     //[a-k] means match any char between a to k 

regex1=/javascr[^ijk]pt/    //[^ijk] means match any char except ijk set  
regex1=/javascr[^a-z]pt/    //[^ijk] means match any char except a to z set ,here ^ mean not 

regex1=/([A-Za-z0-9]){0,9}/   //0-9 char includes a-z ,A-Z 0-9
regex1=/javascr[a-zA-Z]pt[v-z0-9]/ // 
str1="javascrIpt3";

str1="javascript";


// Quantifiers -,means specify quantity of specific character,it written in {}braces

str1="harry";
regex1=/har{2}y/ //here r can occurs exactly 2times
regex1=/ha{0,2}rry/ //here a can occurs 0 to 2times ,means 0,1,2 times


// Groupings -we use parenthesis for grouping
str1="harryharry";
regex1=/(harry){2}/ //here harry can occurs 2times 
str1="harry1y";
// regex1=/(harry){0,2}([0-9]y){1}/ //here harry can occurs 2times 
// let result2=regex1.exec(str1);
// console.log('the result from exec() is ',result2);
// if (regex1.test(str1)) {
    //     console.log(`the string "${str1}" matches the ${regex1.source}`);
    // } else {
        //     console.log(`the string "${str1}" does not matches the ${regex1.source}`);   
        // }
        
        // ````````````````````` Shorthand character classes  ``````````````````````
        
        let str2="0_javascript_9 is New @(version)%% ##";
        let regex2=/\wscript/ /* \w is word char means _ or alphabet or number*/
regex2=/\w+script/ /* \w+ means one or more char*/
regex2=/script\w+/

// \W means non word char ,"space is also include"
regex2=/version\W/

// \W+ means more than one non word char ,"space is also include"
regex2=/version\W+/

str2="123javascript is @lang999999"
//\d means match one digit
regex2=/\djava/           

//\d+ means match one 0r more digit
// regex2=/\W+lang\d+/                     
// \D non digit and D+ means More than one non digit
regex2=/\Dlang/     

str2="123javascript    \nis\t @lang999999 2"
// \s means match whitespce char and \s+ more than one whitspce char ,it includes tab and newline char
regex2=/javascript\s/                     
regex2=/javascript\s+/                     
regex2=/\sis/                     

// \S non whitespace char
regex2=/\Slang\S+/                     

// \b word boundary
str2="123javascript  isn't@  \nis\t @lang999999 2"
regex2=/isn't\b/                     
regex2=/\bisn't/                     


// ```````Assertions`
// str2="javascri!pt  is lang!"
// below means match "a" occurs strictly after j
regex2=/j(?=a)/
// below means match "a" does not occurs strictly after j
regex2=/j(?!a)/

regex2=/^(?=.*[0-9])([a-z]){0,150}$/


let result3=regex2.exec(str2);
console.log('the result from exec() is ',result3);
if (regex2.test(str2)) {
    console.log(`the string "${str2}" matches the ${regex2.source}`);
} else {
    console.log(`the string "${str2}" does not matches the ${regex2.source}`);   
}