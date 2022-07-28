// input=7824 o/p=>sinngle digit like 7+8+2+4=21 =>2+1=>3 is answer
const singleDigitSum =(num) => { 
    // let numArr=String(num).split("").map((ele)=>{
    //     return +ele
    // }).reduce((accum,ele)=>{
    //     console.log('acc',accum)
    //     console.log('ele',ele)
    //     return accum+ele
    // },0)
    // above code can be written in one line as follows
    let numArr=String(num).split('').map(ele=>+ele).reduce((accum,curEle)=>accum+curEle,0)
    console.log('numArr',numArr);
        if (numArr>9) {
            console.log('cc');
            return singleDigitSum(numArr)
        }else{
            return numArr
        }
        
}
// singleDigitSum(99999999999)
console.log('num',singleDigitSum(99999999999))