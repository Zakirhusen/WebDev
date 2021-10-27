console.log("this is form validation");
let names = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let namesValid=false;
let emailValid=false;
let phoneValid=false;
// console.log(email,names,phone);
names.addEventListener("input", () => {
  console.log("you are now out of name row");
  regex = /^([a-zA-Z_0-9]){4,10}$/;
  console.log(regex.test(names.value),regex,names.value);
  if (regex.test(names.value)) {
    names.classList.add("is-valid");
    names.classList.remove("is-invalid");
    namesValid=true;
    
  } else {
    names.classList.add("is-invalid");
    namesValid=false;
  }
});
email.addEventListener("input", () => {
  console.log("you are now out of email column");
  regex = /^([_\.a-zA-Z_0-9]+)@([a-z]+)\.([a-zA-Z]+){2,}$/;
  if (regex.test(email.value)) {
    
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    emailValid=true;
  } else {
    email.classList.add("is-invalid");
  }
});
phone.addEventListener("input", () => {
  console.log("you are now out of phone column");
  regex = /^[0-9]{10}$/;
  if (regex.test(phone.value)) {
    phone.classList.add("is-valid");
    phone.classList.remove("is-invalid");
    phoneValid=true;
  } else {
    phone.classList.add("is-invalid");
  }
});

let submit=document.getElementById("submit");
submit.addEventListener("click",(e)=>{
  e.preventDefault()
  console.log('clicked submit btn');
  let success=document.getElementById("success")
  let failure=document.getElementById("failure")
  if (namesValid==true && emailValid==true && phoneValid==true) {
    success.style.display="block"; 
    failure.style.display="none"; 
    success.classList.add("show"); 
  } else {
    failure.style.display="block"; 
    failure.classList.add("show"); 
    success.style.display="none"; 
  }
})