console.log("increament counter");
let counter = document.querySelectorAll(".counter");
counter.forEach((counter) => {
  counter.innerHTML = 0;

  // converting string into numbers in two  ways ,use + sign before string or use Number constructor
  // dataTaraget=+counter.getAttribute('data-target')
  let dataTaraget = Number(counter.getAttribute("data-target"));
  let startingCount=0;
  

        

  
  let updateCounter = () => {
    console.log('this update counter');
    let dataTaraget = Number(counter.getAttribute("data-target"));
    let inc = dataTaraget / 100;
    let startingCount = +counter.innerHTML;
    if (startingCount < dataTaraget) {
      counter.innerHTML = startingCount + inc;
      setTimeout(()=>{
        updateCounter()
        console.log('th counter');
      }, 20);
    } else {
      counter.innerHTML = dataTaraget;
    }
    //   updateCounter()
  };
  updateCounter();
});
