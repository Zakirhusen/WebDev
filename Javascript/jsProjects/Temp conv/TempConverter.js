console.log("This is temp Converter");
let tempCalc = document.getElementById("tempCalc");
let temp = document.getElementById("temp");
let tempType = document.getElementById("tempType");
let resultDiv=document.querySelector('.result');

tempCalc.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(tempType.value);
    console.log(temp.value);
    console.log('this tempCalc');
    let result;
    if (tempType.value=='cel') {
        // console.log('this is celcius');
        // °C x 1.8) + 32 
        result=`${((temp.value*1.8)+32).toFixed(3)} °F`;
        // console.log(result);
    } else {
        // To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).
        // console.log('this is fahrenheit');
        result=`${((temp.value-32)*(0.556)).toFixed(3)} °C`;
        // console.log(result);
    }
    resultDiv.innerHTML=`= ${result}`
});