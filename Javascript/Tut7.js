//````````````````````` Objects literals ````````````````````` 
//first way creating object
let myObj={
    name:{
        fname:'zakir',
        lname:'Husen',
        age:32,
        myVar(){
            console.log(this);
        }
    },
    firstname:'zakir',
    'lastname':'Husen',
    marks:[1,2,4,5],
    isactive:true,
    // getData:function(){
    //     console.log(myObj.name);
    // }
    //we can write function in another way
    getData(){
        // console.log(myObj.name);
        // here this objects current context is current object
        console.log(this);
        // console.log(this.name);
    }
}


// console.log(myObj);
// console.table(myObj);
// console.log(myObj.name);
// myObj.getData();
// console.log(typeof( myObj.name));
// console.log(myObj['name']);
// console.log(myObj['lastname']);
// console.log(myObj.lastname);
// console.log(myObj.isactive);

// calling object inside the objcet
console.log(myObj.name.age);

// "this" object-defn is that it contain the current context 
// The this object can have multiple vlues depending on where it  is placed



// this objects
// below one refers to current context is window global object
// console.log(this);

function myName(){
    console.log(this);
    // here is also current context is window global object not myName function
}
// myName();


// myObj.getData()
// myObj.name.myVar()



// for fat arrow function in object then current context is widow global object. This is normal function and fat arrow function

let myAge={
    age:()=>{
        console.log(this);
    }
}
   
myAge.age()
