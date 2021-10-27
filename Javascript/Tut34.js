// ``````````````````````````` Error Handling ```````````````````````````
// pretend this is coming from server
let a="harry"
a=undefined;
if (a!=undefined){
    throw new Error('This is not undefined')
}else{
     console.log('this is undefined');
}


// harry() //here show error
try {
    // dsaklfasd;f
    console.log('we are inside try block');
    harry()
} catch (error) {//error means try block failed to execute
    console.log('Are you ok?');
    console.log(error);
    console.log(error.name); //type of errror try block is failed
    console.log(error.message);
} 
// whatever finally will be ran
finally{
    console.log('Finally we will run this');
}