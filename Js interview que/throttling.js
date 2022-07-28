let btn = document.querySelector(".btn");
let counter = 0;
function getData() {
  console.log("calling an api...", ++counter);
  // console.log(this);
//   console.log(arguments);
}

function myThrottle(func,time) {
  let throttlePause;

  return function() {
    if (throttlePause) return;
    throttlePause = true;

    let args = arguments;
    let context = this;
    // console.log("ars", args);
    btn.disabled = true;
    setTimeout(() => {
      func.apply(context,args);
      btn.disabled = false;
      throttlePause = false;
    }, time);
  };
}
let throttleVar = myThrottle(getData, 400);
btn.addEventListener("click", throttleVar);
