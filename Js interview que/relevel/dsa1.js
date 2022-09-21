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



// Question Name: Cupcakes



// Problem Statement



// Gru, the criminal mastermind successfully performed the heist at the Deshute Bank with the help of his N minions. So he decided to give a treat to the minions.

// For the treat, Gru bought M cupcakes. There are several types of cupcakes and the ith cupcake is of type Ai.

// The minions don’t like variety, hence a minion accepts the treat if and only if he gets all the cupcakes of the same type. Also not giving the same number of cupcakes to every minion may cause the minions to fight and Gru does not want that. Hence Gru will distribute the cupcakes among the minions such that :

// Each minion gets the same number of cupcakes.
// All the cupcakes a minion gets must be of the same type. Different minions may get cupcakes of different(or the same) types.
// It can be seen that this type of distribution may lead to the wastage of cupcakes(see the sample example). Hence Gru wants to distribute the cupcakes among the minions such that a minimum of cupcakes are wasted. Given N, M, and array A, tell the maximum number of cupcakes Gru can distribute among the minions.



// Input Format



// First line contains two space separated integers denoting N and M.
// Next line contains M space separated integers denoting array A.


// Output Format



// Print the maximum number of cupcakes Gru can distribute among the minions.


// Constraints



// 1<=N, M<=105
// 1<=Ai<=109


// Sample Input 1



// 2 6

// 1 2 1 2 1 3



// Sample Output 1



// 4



// Explanation of Sample 1



// Distribute the cupcakes as :

// 1st minions get 2 cupcakes of type 1
// 2nd minion gets 2 cupcakes of type 2
// This distribution leads to wastage of 2 cupcakes(one of type 1 and one of type 3).



// Things to Note for the Candidate: You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.

// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.

// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output.

// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement (Right Click and Open in New Tab to view.)

// ...data: any[], hint
function distribute(arr,n,m){
    console.log(n,m,arr)
    if(n>m){
        return 
    }
    let distObj={}
    arr.forEach(element => {
        distObj[element]=(distObj[element] || 0)+1        
    });
    console.log(distObj)
    
}
distribute([1,2,1,2,1,3],2,6)
 



// /************** Number of ArraysProblem**********
 
// PERFECTLY FILLED BUCKETS

// Problem Statement

// Amy has an array A of N prime numbers. She needs to fill K buckets with the integers of the arrays. Initially all the buckets are empty. Buckets are numbered from 1 to N.

// Each element of the array can be put in at most one bucket. Also, each bucket must contain at least one integer.

// A bucket is considered “perfectly-filled”, if after removing at most one integer from the bucket, the product of the resultant integers in the bucket becomes a perfect square or the bucket will become empty.

// For example, bucket with integers: {2, 2, 5} is considered as “perfectly-filled” as after removing integer 5, the product of the resultant integers will become perfect square. Buckets: {3}, {2, 2}, {5, 3, 3} are “perfectly -filled”.

// Amy filled all the K buckets “perfectly”.

// Bi denotes the number of integers in the bucket numbered i.

// She wants to maximise the value of M, M = MIN (B1, B2, …, BK). Help to find the maximum possible value of M, if she fills the buckets optimally.

// You are given T independent test cases.

// Constraints

// 1 <= T <= 5
// 1 <= K <= N <= 105
// 2 <= Ai <= 120
// Ai is prime number.
// All input values are integers.
// Input Format

// First-line contains T.
// First line of each test case consists of two space separated integers N and K.
// Second line of each test case consists of N space separated integers denoting the array A.
// Output Format

// Print in a newline for each test case a single integer denoting the maximum possible value of M.
// Sample Input 1

// 1

// 5 2

// 3 2 5 3 2

// Sample Output 1

// 2

// Explanation of Sample 1

// B1 = 3, bucket-1 contains {3, 5,3}

// B2 = 2, bucket-1 contains {2, 2}

// M = MIN (B1, B2) = 2


// Question Name: Number of Arrays

// Problem Statement

// Alice has an integer Array A of N size. Now he challenges Bob to find the number of arrays B, satisfying the given conditions:

// The length of array B = length of array A
// 1 <= B[i] <= A[i] (1<= i <= N)
// B[i] != B[j] (1 <= i < j <= N)
// Since the answer can be very large, print the answer modulo 109 + 7.

// Input Format

// First line contains one integer N.
// Second line contains N integers, denoting the array A.
// Output Format

// Output the number of arrays B modulo 109 + 7.
// Constraints

// 1 <= N <= 2*105
// 1 <= A[i] <= 109
// Sample Input 1

// 2

// 2 3

// Sample Output 1

// 4

// Explanation of Sample 1

// The 4 Arrays, are as follows:

// B = [1,2]

// B = [1,3]

// B = [2,3]

// B = [2,1]

