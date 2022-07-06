// let a=Promise.resolve("this is resolved")
// a.then(data=>console.log(data))
let heading1=document.querySelector('.heading1');
let heading2=document.querySelector('.heading2');
let heading3=document.querySelector('.heading3');
let heading4=document.querySelector('.heading4');
let heading5=document.querySelector('.heading5');
let heading6=document.querySelector('.heading6');
let heading7=document.querySelector('.heading7');
let heading8=document.querySelector('.heading8');


// setTimeout(() => {
//     heading1.innerHTML="one"
//     heading1.style.color="green"
//     setTimeout(() => {
//         heading2.innerHTML="orange"
//         heading2.style.color="orange"
//         setTimeout(() => {
//             heading3.innerHTML="red"
//             heading3.style.color="red"
//             setTimeout(() => {
//                 heading4.innerHTML="purple"
//                 heading4.style.color="purple"
//                 setTimeout(() => {
//                     heading5.innerHTML="blue"
//                     heading5.style.color="blue"
//                     setTimeout(() => {
//                         heading6.innerHTML="gray"
//                         heading6.style.color="gray"
//                         setTimeout(() => {
//                             heading7.innerHTML="brown"
//                             heading7.style.color="brown"
//                             setTimeout(() => {
//                                 heading8.innerHTML=color
//                                 heading8.style.color="yellow"
//                             }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
// Above code looks like  callback to overcome this we use promises
const changeTextAndColor=(text,color,element)=>{
    return new Promise((resolve,reject)=>{
    if (element) {
        setTimeout(() => {
            element.innerHTML=text
            element.style.color=color   
            resolve("this is is resolve")
        }, 1000);
    }else{
        reject("Something went wrong")
    }
    })
}

// replcing callback hell to make flat code 
changeTextAndColor("one","red",heading1)
.then(data=>changeTextAndColor("three","violet",heading2))
.then(data=>changeTextAndColor("three","orange",heading3))
.then(data=>changeTextAndColor("four","blue",heading4))
.then(data=>changeTextAndColor("five","yellow",heading5))
.then(data=>changeTextAndColor("six","gray",heading6))
.then(data=>changeTextAndColor("seven","purple",heading7))
.then(data=>changeTextAndColor("Eight","pink",heading8))


// let fruits=['banana','apple','grapes','pineapple']
// const haveFruit=()=>{
//     return new Promise((resolve,reject)=>{
//         if (fruits.includes('banana')) {
//             console.log('you have a banana')
//             resolve(`you have fruit banana`)
//         }else{
//             reject(new Error(`you dont have fruit banana`))
//         }
//     })
// }

// // consuming promises
// haveFruit().then((data)=>{
//     console.log(data)
//     data=data+".is it a fruit "
//     return data
// }).then(a=>console.log(a)).catch(err=>console.log(err))
// const asyncFunc=async()=>{
//     let a= await haveFruit()
//     console.log('hi');
//     console.log("async await is ",a);
//     console.log('hi')
// }
// asyncFunc()
// clg