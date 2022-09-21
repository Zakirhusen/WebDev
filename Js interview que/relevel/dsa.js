// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'reverseArray' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts INTEGER_ARRAY a as parameter.
//  */

// function reverseArray(a) {
//     // Write your code here

// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const arrCount = parseInt(readLine().trim(), 10);

//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     const res = reverseArray(arr);

//     ws.write(res.join(' ') + '\n');

//     ws.end();
// }

// console.log('sadf');
// Positive Negative

// Question Name: Positive Negative

// Problem Statement

// Alex has an array A of N non-zero integers.

// Let’s define X = number of pair of integers (i,j), i<=j such that:

// A[i] * A[i+1] * ….. * A[j] is negative.
// and let’s say Y = number of pair of integers (i,j), i<=j such that:

// A[i] * A[i+1] * …… * A[j] is positive.
// Help Alex to find X and Y.

// Input Format

// First line contains one integer N, representing the size of the array.
// Second line contains the array A.
// Output Format

// Output X and Y in space-separated format.
// Constraints

// 1 <= N <=2*105
// -109 <= A[i] <= 109 (A[i] != 0)
// Sample Input 1

// 5

// 2 -2 1 4 -2

// Sample Output 1

// 9 6

// Explanation of Sample 1

// Following are the pair of integers (i,j) which constitute under X (assume one-based indexing):

// (1,2)
// (1,3)
// (1,4)
// (2,2)
// (2,3)
// (2,4)
// (3,5)
// (4,5)
// (5,5)
// Following are the pair of integers (i,j) which constitute under Y (assume one-based indexing):

// (1,1)
// (1,5)
// (2,5)
// (3,3)
// (3,4)
// (4,4)


// Things to Note for the Candidate :

 

// You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.
// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)



// dsa 2
 
// Question Name: Minimize the integer

// Problem Statement


// Antonio got a very large integer as his christmas present from his parents. Antonio does not like large integers and hence decided to change a few digits of this integer and make it as small as possible.

// But changing too many digits will make Antonio’s parents sad. More formally if Antonio changes more than K digits of the integer, his parents will become sad. Antonio does not want that to happen and hence will change at most K digits of the given integer.

// Also if the final integer contains any leading zeroes, Antonio’s parents again become sad. So Antonio will perform the K changes in such a way that the final integer does not contain any leading zeroes.

// Given the integer Antonio got and K(maximum number of changes Antonio can perform), print the minimum integer that Antonio can get.



// Input Format



// First line contians a single integer denoting the integer Antonio got as his christmas present.
// Next line contains a single integer denoting K.


// Output Format



// Print the minimum integer that Antonio can get.


// Constraints



// 1<=number of digits in the integer<=105
// 1<=K<=number of digits in the integer
// Its guaranteed that the given integer does not contain any leading zeros.


// Sample Input 1



// 2399

// 2



// Sample Output 1



// 1099



// Explanation of Sample 1



// Antonio can change the first digit to ‘1’ and change the second digit to ‘0’. It can be proved that 1099 is the minimum possible integer that Antonio can get.



// Things to Note for the Candidate: You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.

// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.

// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output.

// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement (Right Click and Open in New Tab to view.)

// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'reverseArray' function below.
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts INTEGER_ARRAY a as parameter.
//  */

// function reverseArray(a) {
//     // Write your code here
//     console.log("adsf")

// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const arrCount = parseInt(readLine().trim(), 10);

//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     const res = reverseArray(arr);

//     ws.write(res.join(' ') + '\n');

//     ws.end();
// }




// DSA

// Problem Statement

// An array is called “X-Mas”, if no two adjacent elements have sum strictly greater than X.

// You are given an array A of N integers. In one operation you can select a K (1<=K<=N) such that AK > 0 and decrease AK by 1.

// For the given value of X, find the minimum number of operations required to make A, a X-Mas array.

// You are given T independent test cases.

// Constraints

// 1 <= T <= 10
// 1 <= N <= 105
// 1 <= Ai <= 109
// 0 <= X <= 109
// All input values are integers.
// Input Format

// First-line contains T.
// First line of each test case consists of two space separated integers N and X.
// Second line contains N space separated integers denoting the array A.
// Output Format

// Print in a newline for each test case a single integer denoting the minimum number of operations required to make array A, a X-Mas array.
// Sample Input 1

// 1

// 3 3

// 2 2 2

// Sample Output 1

// 1

// Explanation of Sample 1

// Decrease the 2nd element by 1. So, Array A = [2,1,2].

// A1+A2 = 2+1=3 and A2+A3 = 1+2=3, so sum of adjacent element is not greater than X = 3.




// DSA 4

// Problem Statement



// Consider an array A consisting of N positive integers.

// An array B is a subarray of an array A if B can be obtained from A by deletion of several (possibly, zero, or all) elements from the beginning and several (possibly, zero, or all) elements from the end. In particular, an array is a subarray of itself.

// A nice array is an array satisfying the below condition :

// Bitwise AND of any two elements of the array must be zero.
// More formally for any two integers i and j, Bitwise AND of the ith and jth elements of the array must be zero.
// Given array A, print the largest possible length of a nice subarray of array A.



// Input Format



// First line contains a single integer denoting N.
// Next line contains N space separated integers denoting the elements of array A.


// Output Format



// Print the largest possible length of a nice subarray of array A.


// Constraints



// 1<=N<=2*105
// 0 <= Ai< 220


// Sample Input 1



// 5

// 6 2 4 1 7



// Sample Output 1



// 3



// Explanation of Sample 1



// A possible way to choose a 3 length nice subarray is : A2..4 = [2,4,1]

// Here 2 AND 4 = 0, 2 AND 1 = 0, 4 AND 1 = 0, hence it is a nice subarray.



// Things to Note for the Candidate: You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.

// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.

// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output.

// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement (Right Click and Open in New Tab to view.)

// ***********Problem
 
// Question Name: Sum AND
// Problem Statement

// Antonio got an array A for his christmas present. Array A consists of N positive integers.

// He wants to give a pair of integers from this array to his girlfriend Teena.

// Teena likes a pair of integers (a,b) if and only if (a+b)/2 equals the bitwise AND of a and b.

// In other words Teena likes an integer pair (a,b) if and only if (a+b)/2 = Bitwise AND(a,b) holds.

// Now Antonio wants to find the number of pairs he can gift to Teena such that she likes it. Note that an element of the array can be a part of atmost one pair.

// As Antonio is weak in arrays he asked you for help. Help Him !



// Input Format



// First line contains a single integer denoting N.
// Next line contains N space separated integers denoting the elements of array A.


// Output Format



// Print the number of pairs Antonio can gift to Teena such that she likes it.


// Constraints



// 1<=N<=105
// 1<=Ai<=109


// Sample Input 1



// 5

// 2 1 3 2 1



// Sample Output 1



// 2



// Explanation of Sample 1



// Antonio can form the pairs as : (1st element, 4th element), (2nd element, 5th element)



// Things to Note for the Candidate:



// You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.
// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)



// console.log("and",4 && 6 );
// let a={}
// let b={key:"b"}
// let c={key:"c"}
// a[b]=123
// a[c]=425
// console.log('a[b]',a[b]);

// let player={name:"mani",name:"hari"}
// let b=[player]
// player=null

// console.log('player,b',player,b);

// var a
// console.log(a==undefined);
// console.log(isNaN(undefined));
 
// function myArr(x,y,...args){
//     console.log('x,y',x,y);
//     console.log("args",args);
// }
// myArr(1,2,3)
// myArr(1,2)
// var name="hfds"


let check={
    name:"zakir",
    func:function () {
        var self=this
        console.log('this.name',this.name);
        console.log('self.name',self.name);
        (function(){
            console.log('this.name iif',this.name);
            console.log('self.name iif',self.name);
            
        })()
    }   
}
// check.func()
// console.log('this.name iif',this.name);
let fun=function(altName) {
    if(altName) this.name=altName;
    console.log(this.name+" "+this.city)
}
let obj={
    name:'zakir',
    city:"rnr"
}
fun.call(obj,"sayed")
console.log('name is ',obj.name);