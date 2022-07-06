// // ***********************************************************************************
// // Bunty and Biscuits

// Problem Statement :

 

// Bunty the dog wants to buy Biscuits from the Parle canteen and Britannia canteen. Buying X biscuits from Parle canteen will cost him A*(X*X) rupees and Buying X biscuits from Britannia will cost him B*(X*X) rupees. Please help Bunty to buy exactly N biscuits and minimize the money he pays

 

 

// Input Format :

 

// The first line contains an integer T denoting the number of test cases.
// Each of the test cases is described in a single line containing three space-separated integers N,A,B
 

 

// Output Format :

 

// For each test case, print a single line containing the answer i.e. the minimum amount of money Bunty pays.
 

 

// Constraints:

 

// 1<=T<=100000
// 1<=N,A,B<=100000
 

 

// Sample Input :

 

// 2

// 5 1 2

// 10 2 4

 

 

// Sample Output :

 

// 17

// 134  

 

 

// Explaination :

// Let's say we get the minimum cost when we buy x biscuits from Parle canteen then we will need to buy y=(n-x) biscuits from britannia canteen. 

// So our total cost becomes A*(x*x)+B*((n-x)*(n-x))

// To minimize an equation , its differentiation should be zero. So 2*A*x-2*B*(n-x) = 0. 

 

