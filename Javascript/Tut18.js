// ````````````````````````Event And Event Object ```````````````````
// let func=()=>{
//     console.log("you have click on child1");
//     // location.href='//google.com';
//     alert('Are you ok')
// }

const child1 = document.getElementById('div1');

// child1.onclick=()=>{
//     console.log("you have click on child1 again");
//     // location.href='//google.com';
//     alert('Are you ok')
// }


// difference b/w addEventListener and normal is normal way is overwrite other event while addEventListener it cant overwrite .ex shown
// child1.addEventListener('click',()=>{
//     console.log("you have click on child1 once again");
//     // location.href='//google.com';
//     alert('Are you ok')
// })


// how to print event object here 'e' is event objct
// child1.addEventListener('click', (e) => {
// child1.addEventListener('mouseover', (e) => {
//     console.log("you have click on child1 once again");
//     // location.href='//google.com';
//     // confirm('Are you ok to confirm')
//     // console.log(e);

//     // e.target returns element ,you perform all with as do with element
//     let variable = e.target;
//     // offsetX shows how much far you clicked on div
//     variable = e.offsetY;
//     variable = e.target.className;
//     variable = e.target.id;
//     variable = e.target.parentNode;
//     variable = e.target.parentElement;
//     variable = e.offsetX;

//     // variable = e.target.classList;
//     // Array.from(variable).forEach((elem,ind)=>{
//     //     console.log(elem,ind);
//     // })


//     console.log(variable);


// })




// let btn = document.getElementById('btn');
// function func2(e) {
// if run this submit form but we want stop deafault action we use preventDefault
// e.preventDefault();
// console.log('thanks', e);
// console.log(e.offsetX);
// }

// function func3(e) {
//     // if run this submit form but we want stop deafault action we use preventDefault
//     e.preventDefault();
//     console.log('thanks it is double click', e);
// }


// click includes , left click
// btn.addEventListener('click',func2)

// mousedown includes mousewheel and right click , left click      
// btn.addEventListener('mousedown',func2)
// btn.addEventListener('mouseup',func2)
// btn.addEventListener('mouseenter',func2)
// btn.addEventListener('mouseleave',func2)
// btn.addEventListener('mousemove',func2)

// let cont=document.querySelector(".container")

function func4(e) {
    console.log(e.offsetX, e.offsetY, e.screenY);
    document.querySelector('body').style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.screenY})`
}
//     // or

//     document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${e.screenY})`
// }

// cont.addEventListener('mousemove',func4)
// btn.addEventListener('dblcliack',func3)



// ```````````````````KeyboardEvents

// let keyEvent = document.querySelector("form input");
// keyEvent.addEventListener('keypress',(even)=>{
//     let show=document.querySelector('.showKey');
//     show.innerHTML=`you Enter key-->${even.key} and key code is-->${even.code}`;
//     console.log('youPressKey');
// });

// keyup- event

// keyEvent.addEventListener('keyup',(even)=>{

//     let show=document.querySelector('.showKey');
//     show.innerHTML=`you Enter key-->${even.key} and key code is-->${even.code}`;
//     console.log('Key is up');
// })

// keyup- event

// keyEvent.addEventListener('keydown', (even) => {
//     let show = document.querySelector('.showKey');
//     show.innerHTML = `you Enter key-->${even.key} and key code is-->${even.code}`;
//     console.log('Key is down');
// }) 



// ````````````````````````Input Events ``````````````````
// onchange events occurs when the value of an element has been changed


// let iceCreams=document.getElementById('iceCreams');
// iceCreams.addEventListener('change',()=>{
//     let Name=document.getElementById('ice').value;
//     let result=document.getElementById('result');
//     result.innerHTML=`Mr ${Name} You Selected ${iceCreams.value} IceCream Flavour`;
// });



// ````````````````````````Timing Events ``````````````````
// setTimeOut(),clearTimeout(),setInterval(),clearInterval()

// setTimeout
let showName = document.querySelector('#showMyName');
let btn = document.querySelector('#btn1');

// let showMyName=()=>{
//     showName.innerHTML='loading....'
//         tout=setTimeout(()=>{
//         showName.innerHTML='Zakir Husen'
//         console.log('zaki');
//     },3000);


// let tout;
// let showMyName = () => {
//     showName.innerHTML = 'loading....'
//     tout = setTimeout(() => {
//         showName.innerHTML = 'Zakir Husen'
//         console.log('zaki');
//     }, 3000);
// }
// btn.addEventListener('click', showMyName)


// Cleartimeout
// let Sbtn=document.querySelector('#btn2');
// Sbtn.addEventListener('click',()=>{ 
//     clearTimeout(tout)
//     // showName.innerHTML='Ok coo...l'
//     showName.innerHTML=''
//     console.log('clearTimeOut is working');
// });



// setInterval
let stopNum = document.querySelector('#showMyName');
    btn1 = document.querySelector('#btn1');

let timeRef;
let num=0;
let showMyName = () => {
    stopNum.innerHTML = 'loading....'
    timeRef = setInterval(() => {
        stopNum.innerHTML = `${num}`;
        num++;
        console.log(timeRef);
    }, 1000);
}

btn.addEventListener('click', showMyName)
let stopBtn=document.querySelector('#btn2');
stopBtn.addEventListener('click',()=>{
    clearInterval(timeRef);
    console.log('nowItIsStop');
})

