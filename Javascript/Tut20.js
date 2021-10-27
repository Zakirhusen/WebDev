//````````````````````` local Storage and Session storage  `````````````````````

// Add key value pair in local storage we cant add array to locla storage
// localStorage.setItem('Name','Zakir')
// localStorage.setItem('Age',93)

// value not in local storage shows null
// let name=localStorage.getItem('Name2')

// to clear entire local storage
// localStorage.clear();
// let name=localStorage.getItem('Name')

// console.log(name);
// console.log(typeof localStorage);

// to remove perticular item
// localStorage.removeItem('Age')
// console.log(localStorage);


// to add array we use Json
let veg=['banana','mango','pineapple']

// below will give a string
localStorage.setItem('Myarr',veg)
// to store as array we can do like this

// localStorage.setItem('Myarr',JSON.stringify(veg))
// let arr=localStorage.getItem("Myarr")
// console.log(localStorage);
// console.log(arr[2]);

// to retrieve array from localstorage
// let arr1=JSON.parse(arr)
// console.log(arr1[2]);
// console.log(arr1);
// console.log(typeof arr1);




// SESSion STorage

// sessionStorage.setItem('Name','Zakir')
// sessionStorage.setItem('Age',93)