//````````````````````` Symbols in javascript `````````````````````
// symbol is primitive
// every Symbol() guarantee to  return a unique Symbol
const sym1=Symbol('my identifier')

// if we use new for symbol it show error
// const sym1=new Symbol('my identifier')

const sym2=Symbol('my identifier')
// console.log('symbol is ',sym1);


// console.log('is sym1 and sym1 are equal ',sym1===sym2);
// console.log('Type of symbol is ',typeof sym1);

const a= "this is"
const b= "this is"
// console.log(a===b);
// console.log(NaN===NaN);
// console.log(undefined===undefined);
// console.log(null===null); 54

const k1=Symbol('for k1')
const k2=Symbol('for k2')

let myobj={
    'name':'zakir',
    'class':12
}
myobj[k1]='harry'
myobj[k2]='rohan'
myobj['character']='good'
// console.log(myobj);
// console.log(myobj[k1]);

// In forin loop and Json symbols are ignored
for (const key in myobj) {
    console.log(key,myobj[key]);
}

let jsonObj=JSON.stringify(myobj)
console.log(jsonObj);
