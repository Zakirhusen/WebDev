// ````````````````````````Creating,Removing and replacing Elements ```````````````````

// Creating elements
let element=document.createElement('li');
// add class name to element
element.className='child1';
element.id='createdLi';
// element.setAttribute('class','mytitle');
// element.setAttribute('id','mytitle');
element.setAttribute('title','mytitle');
// console.log(element.getAttribute('class'));

// adding element to Dom
let ul=document.querySelector('ul');
ul.appendChild(element);
// ul.append(element);
// element.innerHTML='<b>This is Created li</b>'

// we can also add text by creating Textnode
let txt=document.createTextNode('This another Way fo adding text to element')
element.appendChild(txt);
// console.log(element);
// console.log(element.parentElement);


// Replacing Element
let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';
let tnode=document.createTextNode('this is replaced node ')
elem2.append(tnode);
// console.log(elem2);
// console.log(element);

element.replaceWith(elem2);
// console.log(ul);

// replacing child
let myul=document.getElementById('myul');
// myul.replaceChild(element,document.getElementById('fui'));
// myul.replaceChild(element,myul.firstElementChild);


// Removing child
// myul.removeChild(myul.lastElementChild)
// console.log(myul);



// get attribute
let ga=elem2.getAttribute('id');
// ga=elem2.getAttribute('class');
    // ga=elem2.removeAttribute('id');
    // ga=elem2.hasAttribute('id');
    // ga=elem2.hasAttribute('ss');
    // ga=elem2.hasAttribute('elem2');
console.log(ga);
console.log(elem2);