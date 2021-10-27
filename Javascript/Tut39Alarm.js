
console.log('this is alarm');
let setAlarmDate=document.querySelector("#setAlarmDate")
let setAlarmTime=document.querySelector("#setAlarmTime")
let submitAlarmTime=document.querySelector("#submitAlarm")
submitAlarm.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(setAlarmDate.value);
    console.log(setAlarmTime.value);
    let alarmTime=new Date(`${setAlarmDate.value} ${setAlarmTime.value}`)
    // console.log(typeof (alarmTime));
    // console.log(alarmTime);

    let now=new Date()
    console.log(now);
    let totalAlarmTime=alarmTime-now;

    //alarm Bell
    let audio=new Audio('https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3')
    
    // Function for ringing bell for valid time
    if (totalAlarmTime>0) {
        let alert=document.querySelector(".alert")

        setAlarmDate.classList.remove('is-invalid')
        setAlarmTime.classList.remove('is-invalid')
        console.log(totalAlarmTime);
        setTimeout(() => {
            console.log('bell is ringing');
            audio.play();
        }, totalAlarmTime);
        alert.classList.add("show")
        alert.innerHTML=`<strong>Set Alarm for : </strong>  ${new Date(alarmTime).toString()}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
        
    } else {
        setAlarmDate.classList.add('is-invalid')
        setAlarmTime.classList.add('is-invalid')
    }
})