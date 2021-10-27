console.log("Drag and drop utility");
let imgBox=document.querySelector('.imgBox');
let whiteBoxes=document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart',(e)=>{
    console.log('dragStart has been triggered');
    // imgBox.classList.add("start")    
    e.target.className+=' hold'
    setTimeout(() => {
        
        e.target.className=' hide'
    }, 0);
    console.log('class is',e.target.className);
})
imgBox.addEventListener('dragend',(e)=>{
    console.log('dragEnd has been triggered');
    e.target.className='imgBox'
})

for (const whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover',(e)=>{
        e.preventDefault()
    })
    whiteBox.addEventListener('dragenter',(e)=>{
        console.log('dragenter is triggered');
        
    })
    whiteBox.addEventListener('dragleave',(e)=>{
        console.log('dragleave is triggered');
        
    })
    whiteBox.addEventListener('drop',(e)=>{
        console.log('drop is triggered');
        e.target.appendChild(imgBox)
        
    })
}
