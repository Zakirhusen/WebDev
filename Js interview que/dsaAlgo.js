// // console.log([...`${321}`]);

// Super String

// Problem Statement :

// You are given a String  s of length N  you need to print a new string t of size N formed by using characters of string s such that:

// The character of the i’th index of string “t” is the smallest lexicographical character in the given range of [0-k] inclusive and delete it from string s.

// Example: s=”adbc” k=2
// String t = “abcd”
// s=”adbc” smallest element within range is “a” -> String t=”a”
// s=”dbc” smallest element within range is “b”  -> String t=”ab”
// s=”dc” smallest element within range is “c”  -> String t=”abc”
// s=”d” smallest element within range is “d”  -> String t=”abcd”

// Input Format:

// First line contains input string s (consisting of only lowercase alphabets).
// Second line contains a single integer k.

// Output Format :

// Print the smallest lexicographical string “t” as asked in the question.

// Constraints:

// 1<= N <= 10^5
// 1<= K <= N
 
// Sample input:
// errichto
// 2

// Sample output:
// erichrot

 let supStr=(str,k) => { 

    let t=""
    while(str.length>0){
        let subStr=[...str.substring(0,k)].sort();
        t+=subStr[0]
        str=str.replace(subStr[0],"")

    }
    return t

  }
// let a ="dafabs"
// // console.log(a.slice(1,10));
// let sub=[...a.substring(0,3)].sort()
// // a=a.substring(2)
// console.log(sub);
// console.log(sub.toString().length);
// console.log(a.replace("a",""))
// let sstr=supStr("errichto",3)
// console.log(sstr);

let a ='aabbccd'
console.log(a.split('')) 
