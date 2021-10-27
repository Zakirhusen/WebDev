
//`````````````````````Date and  Time`````````````````````

// Date object contains  a Number that represents milliseconds since 1 Jan 1970 UTC
// Creating Date objects there are 4 ways to create new date object:

// 1-->
let currDate = new Date();
// console.log(currDate);
// console.log(currDate.toLocaleDateString());
// console.log(currDate.toLocaleString());
// console.log(currDate.toString());

// 2-->new Date(year,month,day,hours,minutes,seconds,milliseconds).It takes seven arguments
// we cant avoid month section.
// Note:JS counts months from 0 to 11

//let date =new Date(1989,06,25,04,23,34,300);



// 3-->new Date(milliseconds).It shows milliseconds from 1 jan 1970;
// date=new Date(1980);
// date=new Date(1000);


//4--> new Date(dateString );creates a new object from a date string
//  let date=new Date('august 13,2021 11:13:00')
//  date=new Date(' 13 2021 aug 11:13:00')
//  date=new Date(' 13 2021 11:13:00 aug')
//  date=new Date(' 27  11:13:00 2021 jul')
//  date=new Date(' 27  11:13:00 2021 ju')
//  date=new Date("2021-10-10")
//  date=new Date("2021-10-10 02:02:14")

//  console.log(date);



// another way Date.now it shows milliseconds lapsed from 1 jan 1970
// date= Date.now();
// console.log(date);
// console.log(Date(date));


// Dates method
// how to get the individual date
// console.log(currDate.toLocaleString());
// console.log(currDate.toLocaleTimeString());
// console.log(currDate.toTimeString());
// console.log(currDate.getFullYear());
// console.log(currDate.getDate());
// console.log(currDate.getDay());
// console.log(currDate.getMonth());


// how to set the individual date
// console.log(currDate.setFullYear(1989,06,25));
// console.log(currDate.setDate(28));
// console.log(currDate.setMonth(1));
// console.log(new Date(1616989377659));

// ``````````````````````````````Time Methods````````````````````
// get individual time
// console.log(currDate.setTime(1212222222201));
// console.log(currDate.getTime());

// console.log(currDate.getMinutes());
// console.log(currDate.getSeconds());
// console.log(currDate.getSeconds());
// console.log(currDate.getFullYear());

// console.log(currDate.toLocaleTimeString());

// How to set individual time
// console.log(currDate.setTime(30));

// same ms in o/p
// console.log(currDate.setHours(6));
// console.log(currDate.getHours());
// console.log(currDate.setMinutes(80));
// console.log(currDate.setSeconds(10));
// console.log(currDate.setSeconds(100));

// function setTimeTut11(){
//     let t=new Date();
//     t.setFullYear( 2011 );
//     t.setDate( 11 );
//     t.setMonth( 10 );
//     t.setHours(11);
//     t.setMinutes(11);
//     t.setSeconds(11);
//     t1=t.toLocaleString();
//     // document.getElementById("Tut11").innerHTML=t;
//     document.getElementById("Tut11").innerHTML=t1;

// }


// By event listener

let t=document.getElementById('btn')
function showTimeTut11(){
    let p=document.getElementById('Tut11')

    let showTime=()=>{
        p.innerHTML=new Date().toLocaleTimeString();
    }
    setInterval(showTime,1000);
}
t.addEventListener('click',showTimeTut11);
// t.addEventListener(showTimeTut11()); 



// by id
// setInterval(showTimeTut11,1000)
// function showTimeTut11(){

// let p=document.getElementById('Tut11');
// let t=new Date();
// t1=t.toLocaleTimeString();
// p.innerHTML=t1;

// }
