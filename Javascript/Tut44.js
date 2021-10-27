//````````````````````` destructuring in javascript `````````````````````

console.log("destructuring");

// let a,b;
// [a,b]=[23,45]
// console.log(a,b);

// [a,b,c,...d]=[1,2,3,4,5,6,7,8,9,10,11,12,13]
// console.log(a,b,c,d);

// ({a,b,c}={a:34,b:345,c:54})
({a,...k}={a:34,b:345,c:54,d:111})

// console.log(a,b,c);
console.log(a,k,);

const fruits=['apple','banana','grapes']
// let [x,y]=fruits
let [x,y,z]=fruits
// console.log(x,y);
console.log(x,y,z);

// object destructuring

let myBiodata={
        fName:'zakir',
        lName:'husen',
        age:32,
        start(){
            console.log('This is my biodata');
        }
    }
let {fName,lName,age,start}=myBiodata;
console.log(fName);
start();

