//` `````````````````````  Wallclock Excersise ````````````````````` 
const date = new Date();
console.log(date.toLocaleTimeString());
let clock=document.getElementById('clock');
window.addEventListener('load',()=>{
    setInterval(() => {
        // console.log("object");
        const date = new Date();
        clock.innerHTML=date.toLocaleTimeString()
    }, 1000);
})

