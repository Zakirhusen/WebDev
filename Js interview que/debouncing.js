let input = document.querySelector(".input");
// let dbounce = getData
// input.addEventListener("keyup", dbounce);


// myown way
// debouncing - callApi function when event is hasn't carried out in specified amount of time
// throttling - if user carried out event call function at intervals of specified amount of time
let counter = 0;
// let timer
// function getData(){
//     clearTimeout(timer)
//     timer=setTimeout(() => {
//         console.log('calling api ...',++counter);




function getData() {
    console.log('this is ',this);
    console.log('this is args',arguments);

  console.log("calling api ...", ++counter);
}
function myDebounce(fn,time) {
    let timer;
    // console.log('timer',timer);
    // console.log('myDbounce');

    // console.log(arguments);
  return function () {
    let args=arguments;
    let context=this
    // console.log(arguments);
    // console.log('this is ',this);
    clearTimeout(timer);
    timer = setTimeout(() => {
    // fn.apply(context,args);
    fn()
    }, time);
};
}

let dbounce = myDebounce(getData,800);
// console.log('dbounce==',dbounce);
input.addEventListener("keyup", dbounce);