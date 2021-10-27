// Using Es classes
console.log("this is Es classes");
let bookObj = [];
class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

// display constructor
class Display {
  add() {
    let books = localStorage.getItem("books");
    if (books == null) {
      console.log(books);
      bookObj = [];
    } else {
      bookObj = JSON.parse(books);
    }
    console.log("adding to Ui");
    let uiString = "";
    bookObj.forEach((element, index) => {
      uiString += `
          <tr class="searchRow">
          <td>${element.name}</td>
          <td>${element.author}</td>
          <td>${element.type}</td>
          <td><button id=${index} onclick="display.del(this.id)" style="line-height:.74" class="btn btn-dark" type="button">Delete</button>
          </td>
          </tr>`;
    });
    let tableBody = document.getElementById("tableBody");
    if (bookObj.length != 0) {
      tableBody.innerHTML = uiString;
    } else {
      tableBody.innerHTML = `<span>Nothing to show<strong> !</strong> add a book</span>`;
    }
  }

  validate = function (book) {
    if (book.name.length < 3 || book.author.length < 3) {
      return false;
    } else {
      return true;
    }
  };


  // function for delete
  del(delId) {
    bookObj.splice(delId, 1);
    localStorage.setItem("books", JSON.stringify(bookObj));
    console.log(`You delete id-${delId}`);
    display.add();
  }

  // Clear the form fields after submit
  clear = function () {
    //   console.log("reset form");
    let libraryForm = document.querySelector("#libraryForm");
    libraryForm.reset();
  };

  // function to show error or success message
  show = function (aletType, alert) {
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${aletType} alert-dismissible fade show" role="alert">
      <strong>Message!</strong> ${alert}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>`;
    setTimeout(() => {
      message.innerHTML = "";
    }, 4000);
  };

  // Function to search book by type or bookname or author

  bookSearch() {
    let searchBook = document.getElementById("searchBook");
    console.log("search for book is active" + searchBook.value);
    let searchRow = document.getElementsByClassName("searchRow");
    Array.from(searchRow).forEach((element) => {
      let elem = element.getElementsByTagName("td");
      // for removing "td" of "Delete"
      let tempArr = Array.from(elem);
      tempArr.pop();
      let tempStr = "";
      tempArr.forEach((element1) => {
        tempStr += element1.innerText;
        console.log(tempStr);
        console.log(searchBook.value);

        if (tempStr.toLowerCase().includes(searchBook.value.toLowerCase())) {
          element.style.display = "table-row";
        } else {
          element.style.display = "none";
        }
      });
    });
  }
}

let display = new Display();
// it for initially display items in localStorage
display.add();


let searchBook = document.getElementById("searchBook");
searchBook.addEventListener("input", display.bookSearch);
// For submiting form
let libraryForm = document.querySelector("#libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(event) {
  console.log("Submit the form");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;

  // for type
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  let book = new Book(name, author, type);
  console.log(book);
  // event.preventDefault();

  if (display.validate(book)) {
    let books = localStorage.getItem("books");
    if (books == null) {
      console.log(book);
      bookObj = [];
    } else {
      bookObj = JSON.parse(books);
    }
    bookObj.push(book);
    localStorage.setItem("books", JSON.stringify(bookObj));
    console.log(bookObj);

    // localStorage.setItem.("books",book)
    display.add(book);
    display.clear();
    display.show("success", "Book added successfully");
  } else {
    display.show("danger", "Sorry you cant add book");
  }
  event.preventDefault();
}
