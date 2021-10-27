
// ````````````````````````Dom```````````````````
console.log(window.document);
a = document;
a = document.all;
a = document.body;
a = document.forms;
// a=document.forms.length;
a = document.forms[0];
// console.log(a);

a = document.all;
// this type we cant do
// a.forEach(element => {
    //     console.log(element);    
    // });

    // we can do by converting into array
    // Array.from(a).forEach(function(element){
        //     console.log(element);    
        // });
        // console.log('object');
// a=document.links;
// a=document.links[0];
// a=document.links[0].href;
// Array.from(a).forEach(element => {
    //     console.log(element.href);
    // });
    b=document.links;
    console.log(b);


// Extact links which contains text "javascript " from any website
let arr=[]
a= document.links
Array.from(a).forEach(element => {
    if(element.href.includes("google")){
        arr.push(element.href)
    };
    return arr;
        
});
console.log(arr);



// a=document.images;
// a=document.scripts;
// console.log(a);
