// if arr =[1,2,3,4,5] op-[[1,5],[2,4],[3,3]]
// let obj={
//     1:2,
//     3:4
// }
let arr =[1,2,3,4,5,6,7]
function combine(arr) {
    let arr2=[...arr].reverse()
    console.log(arr);
    console.log(arr2);
    console.log("arr2",);
    let resArr=[]
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[arr.length-1]);
        resArr.push([arr[i],arr[arr.length-1]])
        arr.length--
    }
    return resArr
}
// console.log('asdfl',Object.entries(obj));
console.log(combine(arr))