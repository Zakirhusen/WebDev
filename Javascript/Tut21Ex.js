//````````````````````` EXCERCISE `````````````````````
// Creating an Editable div-- create a div and inject it into the page containing heading whenever clicks on div ,it should be converted into editable Item,whenever clicks away (bur).save the edited note into local storage


// creating div
let divElem=document.createElement('div');
divElem.setAttribute('class','elem')
divElem.setAttribute('id','elem')
divElem.setAttribute('style','border:2px solid red; width:160px;margin:12px;padding:40px')

let heading=document.getElementById('head');



// injecting div into body
heading.insertAdjacentElement("afterend",divElem)



// addding text to created element
let tNode=document.createTextNode('Click here to edit');
let val=localStorage.getItem('text');
let text; 
if (val==null) {
    text=tNode;
}
else{
    text=document.createTextNode(val);
}
divElem.appendChild(text);


// console.log(divElem,heading);



divElem.addEventListener('click',()=>{
    let noTextAreas=document.getElementsByClassName('textArea').length;
    console.log(noTextAreas);
    // debugger;
    // divElem.innerHTML=""
    if (noTextAreas==0) {
        
        let html= divElem.innerHTML;
        divElem.innerHTML=`<textarea class="textArea" id="textArea" rows="4" placeholder="click here to edit">${html} </textarea>`
    }
    // console.log(divElem.innerHTML);
    
    // console.log(divElem.innerHTML);
    
    let textArea=document.getElementById('textArea')
    textArea.addEventListener('blur',function(){
        console.log('focus out');
        divElem.innerHTML=textArea.value;
        if (textArea.value.trim().length==0) {
            textArea.value="Click here... to edit"
            
        }
        localStorage.setItem('text',divElem.innerHTML)
    // console.log(divElem.innerHTML.length);
})
});
