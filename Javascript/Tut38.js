// ````````````````````` Generators  ``````````````````````
console.log('Generetors');
function* numbersGen(){
    yield  1
    yield  2
    yield  3
    yield  4
}
let gen=numbersGen()
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* numGen(){
    let i=0
    while (true) {
        // yield (i++).toString();
        yield (i++);
    }
}
let num=numGen()
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);