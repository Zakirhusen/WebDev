// ````````````````````````Element Selector in javascript````````````````````````

// id selector is single element selector
let idSel=document.getElementById("div1");
idSel.style.color='red'
// idSel=idSel.className;
// idSel=idSel.childNodes;
// idSel=idSel.parentElement;
// idSel=idSel.parentNode;
// idSel.innerText="he is good boy"
// idSel.innerHTML="<b>he is good boy</b>"
// console.log(idSel.innerText);
// console.log(idSel.innerHTML);

// console.log(idSel);



// query Selector is also single element selector

// by id name
let sel=document.querySelector('#div2');
// sel.style.color='cyan';

// using classname in query selector it applicable to only first of class
// sel=document.querySelector('.child');
// sel.style.color='Blue';


// using in query selector Tagname it applicable to only first of class
// sel =document.querySelector('div');
// sel.style.border='2px solid red';
// console.log(sel);


// Multielement Selector
// let elems=document.getElementsByClassName('child')
// console.log(elems);
// console.log(elems[2].style.color='blue');

elems=document.getElementsByClassName('container')
console.log(elems[0].getElementsByClassName("child"));

elems=document.getElementsByTagName('div');
// console.log(elems);


Array.from(elems).forEach(element => {
    console.log(element); 
});
// OR using normal for loop

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    element.style.color='hotpink';
}