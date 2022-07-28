// event bubling means when event triggers event propogation starts from innermost target element  to its ancestors in hierarchy

// by default its false means capturing false if it is true it event capturing phase is active
let child=document.querySelector('.child');
let parent=document.querySelector('.parent');
let grandparent=document.querySelector('body');
child.addEventListener('click',()=>{
    console.log('child is clicked');
},true)
parent.addEventListener('click',()=>{
    console.log('parent is clicked');
},true)
grandparent.addEventListener('click',()=>{
    console.log('grandparent is clicked');
},true)
