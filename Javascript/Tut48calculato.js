console.log("calculator app");
let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";
for (const button of buttons) {
//   console.log(button);
  button.addEventListener("click", (e) => {
    buttonText = button.innerText;
    if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "X") {
      buttonText = "*";
      screen.value += buttonText;
      console.log(screen.value);
    } else if (buttonText == "=") {
      console.log(screen.value);
      screen.value += screenValue;
        screen.value = eval(screen.value);
    } else if (
      e.target.id == "clear" ||
      e.target == document.getElementById("far")
    ) {
      // console.log(e.target.);
      console.log(screen.value.length);
      console.log(screen.value.substring(0, screen.value.length - 1));
      screen.value = screen.value.substring(0, screen.value.length - 1);
      console.log("screen.value");
      // screen.value=screen.value;
    } else {
      screen.value += buttonText;
    }
  });
}
