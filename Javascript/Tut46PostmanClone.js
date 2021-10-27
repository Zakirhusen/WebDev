console.log("Postmaster clone app");
let addParamCount = 0;
// to switch content type according to content type
let jsonRadio = document.getElementById("jsonRadio");
let paramRadio = document.getElementById("paramRadio");
let parameterBox = document.getElementById("parameterBox");
let requestJsonBox = document.querySelector("#requestJsonBox");
let params = document.getElementById("params");
// initially json contnet type is checked so custom parameters doesnot show

parameterBox.style.display = "none";
//  console.log(getRadio.value);

jsonRadio.addEventListener("click", () => {
  parameterBox.style.display = "none";
  requestJsonBox.style.display = "block";
});
paramRadio.addEventListener("click", () => {
  parameterBox.style.display = "block";
  requestJsonBox.style.display = "none";
});

let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", () => {
  console.log("click addbtn");
  let string = `<div class="my-2 row">
                    <label  for="url" class="col-sm-2 col-form-label legParameter">Parameter${
                      addParamCount + 2
                    }</label>
                    <div class="col-4">
                        <input type="text" id="parameterKey${
                          addParamCount + 2
                        }" class="form-control legParameter" placeholder="Parameter${
    addParamCount + 2
  }" aria-label="First name">
                    </div>
                    <div class="col-4">
                      <input type="text" id="parameterValue${
                        addParamCount + 2
                      }" class="form-control legParameter" placeholder="Parameter${
    addParamCount + 2
  }" aria-label="Last name">
                    </div>
                    <div class="col-1">
                      <button id="addBtn${
                        addParamCount + 2
                      }" class="btn deleteParam btn-primary">-</button>
                    </div>
                </div>`;
  params.innerHTML += string;
  // let div=document.createElement('div')
  // div.innerHTML=string
  // params.appendChild(div.firstElementChild)
  addParamCount++;

  // when clicking - button delete particular parameter
  let deleteParam = document.getElementsByClassName("deleteParam");
  // console.log(deleteParam);
  for (const item of deleteParam) {
    item.addEventListener("click", (e) => {
      console.log("you clicked deleteParamBtn");
      // console.log(e.target.parentNode);
      // console.log(e.target.parentElement);
      // console.log(e.target.parentElement.parentElement);
      e.target.parentElement.parentElement.remove();
      addParamCount--;

      // for updating parameter digit in ui*** i have two ways to do that
      let legPamrmeter = document.getElementsByClassName("legParameter");
      let i = 0;
      // console.log(legPamrmeter);
      Array.from(legPamrmeter).forEach((element, index) => {
        // console.log(element);
        if (index % 3 == 0) {
          element.innerText = `parameter${i + 2}`;
        } else if (index % 3 == 2) {
          element.setAttribute("placeholder", `parameter${i + 1}`);
          element.setAttribute("id", `parameterValue${i + 1}`);
        } else {
          element.setAttribute("placeholder", `parameter${i + 2}`);
          element.setAttribute("id", `parameterKey${i + 2}`);
          i++;
        }

        // let legPamrmeter=document.getElementsByClassName('legParameter');
        // console.log(legPamrmeter);
        // Array.from(legPamrmeter).forEach((element,index) => {
        //   // console.log(element);
        //   if ((index)%3==0) {
        //     console.log(index);
        //     console.log(element);
        //     console.log(element.innerText);
        //     element.innerText=`parameter${Math.floor((index)/3)+2}`
        //     // element.setAttribute("placeholder",`parameter${Math.floor((index)/3)+2}`);

        //     console.log('cond 3');

        //   } else if((index)%3==2){
        //     console.log(index);
        //     console.log(element);
        //     console.log('cond 2');
        //     element.innerText=`parameter${Math.floor((index)/3)+2}`
        //     element.setAttribute("placeholder",`parameter${Math.floor((index)/3)+2}`);
        //   } else{

        //     console.log(element);
        //     console.log(element.innerText);
        //     console.log(index);
        //     console.log('cond 1');
        // element.setAttribute("id", `parameterKey${i + 2}`);
        //     element.innerText=`parameter${Math.floor((index)/3)+2}`
        //     element.setAttribute("placeholder",`parameter${Math.floor((index)/3)+2}`);
        //   }
      });
    });
  }
});
// for deleting all parameter at once
let clearAll = document.getElementById("clearAll");
clearAll.addEventListener("click", () => {
  if (confirm("are you wnt clear") == true) {
    params.innerHTML = "";
    addParamCount = 0;
  }
});

// on click submit button to show response
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  let responsePrism = document.getElementById("responsePrism");
  document.getElementById("responsePre").style.maxHeight = "500px";
  responsePrism.innerHTML = "please wait  ....loading";
  let url = document.getElementById("url").value;

  let requestType = document.querySelector('input[name="request"]:checked').value;

  let contentType = document.querySelector(
    'input[name="content"]:checked'
  ).value;

  // getting parameter box value
  if (contentType == "custom") {
    data = {};
    for (let i = 0; i < addParamCount + 1; i++) {
      let key = document.getElementById("parameterKey" + (i + 1)).value;
      let value = document.getElementById("parameterValue" + (i + 1)).value;
      data[key] = value;
      console.log(data);
    }
    data = JSON.stringify(data);
  } else {
    let requestJsonText = document.getElementById("requestJsonText").value;
    data = JSON.stringify(requestJsonText);
  }

  console.log(url);
  console.log(requestType);
  console.log(contentType);
  console.log(data);
  if (requestType == "GET") {
    fetch(url, {
      method: "GET",
      // }).then((response)=>response.json())
    })
      .then((response) => response.text())
      .then((text) => {
        responsePrism.innerHTML = text;
        Prism.highlightAll()
        // responsePrism.innerHTML =(text[0]["login"])
        // console.log(text[0]["login"])
        console.log(text);
      });
    } else {
      fetch(url, {
        method: "POST",
        body: data,
        headers: {
        "contet-type": "application/json; charset=UTF-8",
      },
    })
    .then((response) => response.text())
      .then((text) => {
        responsePrism.innerHTML = text;
        Prism.highlightAll()
        console.log(text);
      });
  }
});
