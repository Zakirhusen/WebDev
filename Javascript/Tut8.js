// if else and switch statement

let age=19;
    age='18';
// if (age==19) {
//     console.log('You can vote');    
// } 
// else if(age>=18){
//     console.log('You can also  vote')    
// }
// else{>=
    
//     console.log('You cant vote');    
// }

// === it checks value as well as datatype is equal
age='18';

// if (age===18) {
//     console.log('You can vote');    
// } 
// if (age==18) {
//     console.log('You canttt vote');    
// } 

// total five falsy value in javascript ==>0,undefined,null,NaN,false
// if(score=0){
// if(score=false){
// if(score=0){
if(null){
// if(score=NaN){
    console.log('You LOSS')
}else{
    console.log('You WON')
}

// conditional ternary operation it takes 3 operands
let ag=21;
let vote=(ag>=18)?"you can vote":"you cant vote"
console.log(vote)

// switch statment
const pi=3.142,l=20, b=30, r=3;
let area='rectle'
area='rectangle'
area='triangle'

switch(area){
    case 'circle':
        console.log(`Area of Circle is :${pi*(r**2)}`)
        break
    case 'triangle':
        console.log(`Area of Triangle is :${1/2*l*b}`)
        break

    case 'rectangle':
        console.log(`Area of Rectangle is :${l*b}`)
        break

    default:
        console.log(`Enter the valid data`)
}


//                              EXCERCISE

// To find leap year
let year=2400;
    year=2100;
if (year%4===0) {
    if (year%100===0) {
        if (year%400===0){
            console.log(`${year} is a leap year`)
        }else{
             console.log(`${year} is not a leap year`)
        }
    }else{
        console.log(`${year} is a leap year`)
    }
}else{
    console.log(`${year} is not a leap year`)
}





