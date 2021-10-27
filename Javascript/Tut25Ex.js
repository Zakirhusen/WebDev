// // create class library implement following
// // constructor must take the book list as arguments
// // getBookList()
// // issueBook(bookName,user)
// // returnBook(bookName)
console.log("Excercise");
class library {
  constructor(bookList) {
    this.bookList = bookList;
    this.issuedBooks = {};
  }
  getBookList() {
    this.bookList.forEach((element) => {
      console.log(element);
    });
  }
  issueBook(bookName, user) {
    if (this.bookList.includes(bookName)) {
      this.issuedBooks[bookName] = user;
      this.bookList.splice(this.bookList.indexOf(bookName),1)
      
    }
    else{
        console.log(`${bookName} is not available`);
    }
}
returnBook(bookName) {}
}
a = ["harry legend", "rohan legend ", "rahul legend"];
console.log(a.indexOf("harry legend"));
let harryLib=new library(a)
harryLib.issueBook('harry legend','zakir');
// a.splice(1,1)
// console.log(a);
harryLib.getBookList()
console.log(harryLib.issuedBooks);
harryLib.issueBook('rahullegend','zakir');