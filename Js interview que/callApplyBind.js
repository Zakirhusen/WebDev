let user1={
    name:'zakir',
    age:33,
    printDetails:function(state,country){
        console.log('Name is :',this.name +" from "+state+" "+country);
        return state
    }
}
let user2={
    name:'husen',
    age:30,
    // printDetails:function(){
    //     console.log('Name is :',this.name/n,this.age);

    // }
}

// call and apply execute immedialtely
// In Call method we can pass parameter as normal
let a=user1.printDetails.call(user2,"karnataka","india")
console.log('a is ',a);

// in Apply method we can pass parameter as in array like object
user1.printDetails.apply(user2,["karnataka",   "india"])

// Bind also work as same as call and apply but it catnt excute immediately we can store in variable call it as later.

let bindFun=user1.printDetails.bind(user2,"Bindkarnataka","india")
let b=bindFun()
// b=bindFun()
console.log('b',b);