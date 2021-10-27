//  <!--  fa-thermometer-empty [&#xf2cb;]
//              -->
//              fa-thermometer (alias) [&#xf2c7;]
//              fa-thermometer-0 (alias) [&#xf2cb;]
//              fa-thermometer-1 (alias) [&#xf2ca;]
//              fa-thermometer-2 (alias) [&#xf2c9;]
//              fa-thermometer-3 (alias) [&#xf2c8;]
//              fa-thermometer-4 (alias) [&#xf2c7;]
//              fa -->
let thermometer=document.querySelector(".fa")
let tempLoad=() => {
     
    console.log('this is thermometer');
    
        thermometer.innerHTML=`&#xf2cb`
        // thermometer.style.color="white"
        
    setTimeout(() => {
        thermometer.innerHTML=`&#xf2ca`
        thermometer.style.color="#e9a70d"
        
    }, 1000);
    setTimeout(() => {
        thermometer.innerHTML=`&#xf2c9`
        thermometer.style.color="#e9a70d"
        
    }, 2000);
    setTimeout(() => {
        thermometer.innerHTML=`&#xf2c8`
        thermometer.style.color="#e9a70d"
        
    }, 3000);
    setTimeout(() => {
        thermometer.innerHTML=`&#xf2c7`
        thermometer.style.color="red"
        
    }, 4000);
   
}
tempLoad()
setInterval(tempLoad, 5000);