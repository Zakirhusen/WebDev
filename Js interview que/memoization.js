// memoization - is a optimization technique that can be reduce time consuming calcutions by saving previous input result into something called cache and returning result from it 
// Example
function calc(n){
    let sum=0
    for (let i = 0; i < n; i++) {
         sum += i;
    }
    return sum
    
}

function memoize(fun){
    let cache={};
    return function(...args){
        let n=args[0]
        if(n in cache){
            console.log('from cache');
            return cache[n]
        }else{
            console.log('from new cal');
            cache[n]=fun(n)
            return cache[n]
        }
    }

}
let effective=memoize(calc)
console.time('cal')
effective(10)
// calc(11)
console.timeEnd('cal')
console.time('caler')
effective(10)
// calc(11)
console.timeEnd('caler')
console.time('calera')
effective(20)
// calc(11)
console.timeEnd('calera')
console.time('caleras')
effective(20)
// calc(11)
console.timeEnd('caleras')
 