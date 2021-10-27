console.log("Magic Notes Project1");

let addBtn = document.getElementById("addBtn");
let notesObj = [];
// For show notes while refresh website
showNotes();
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  // For first time if title or textArea is empty
  if (addTxt.value.trim().length >= 2 && addTitle.value.trim().length >= 2) {
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let myObj = {
      title: addTitle.value,
      note: addTxt.value,
    };
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    // alert for successfully adding notes
    let alert = document.querySelector("#Alert");
    alert.innerHTML = `
    <div class="alert alert-success" role="alert">
    Successfully added a note   </div>`;
    setTimeout(() => {
      alert.innerHTML = ``;
    }, 4000);
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notesObj);
  } else {
    // alert for empty notes
    let alert = document.querySelector("#Alert");
    alert.innerHTML = `
<div class="alert alert-danger" role="alert">
  <strong>Message!</strong> You can't Add note   </div>`;
    setTimeout(() => {
      alert.innerHTML = ``;
    }, 4000);
  }
  showNotes();
});

// For showing notes
function showNotes() {
  // let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = " ";
  notesObj.forEach(function (element, index) {
    // console.log(element,index);
    html += `
        <div class="${index + 1} noteCard card mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${index + 1}.${element.title}</h5>
        <p class=" card-text">${element.note}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn row btn-danger">Delete Note</button>
        <button id="${
          index + 1
        }" onclick=editNote(this.id) class=" btn row btn-danger mx-4" >Edit</button>
        </div>
        </div>`;
  });
  let noteTxt = document.getElementById("notes");
  if (notesObj.length != 0) {
    noteTxt.innerHTML = html;
  } else {
    noteTxt.innerHTML = `<span>Nothing to show<strong> !</strong> use "Add note" to add a note</span>`;
  }
}

// Function to  Deleting note
function deleteNote(delId) {
  console.log("i am deleting", delId);

  notesObj.splice(delId, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  showNotes();
}

// Funtction for edit Notes
function editNote(editId) {
  let editTxt = document.getElementsByClassName(editId)[0];
  console.log(editTxt);
  editTxt.innerHTML = `<textarea id="textArea1" class="my-3">${
    notesObj[editId - 1].title
  }</textarea>
      <textarea class="textArea" id="textArea" rows="4" placeholder="click here to edit">${
        notesObj[editId - 1].note
      }</textarea>
      <div class="card-body">
      <button id="${
        editId - 1
      }" onclick="deleteNote(this.id)" class="btn row btn-primary">Delete Note</button>
      <button id="btn${editId}" onclick=saveNote(this.id) class=" btn row btn-primary mx-4" >Save</button>
      </div>`;

  let textArea = document.getElementById("textArea");
  console.log(textArea);
  textArea.addEventListener("blur", function () {
    let textArea1 = document.getElementById("textArea1");
    console.log("focus out");
    let editedTxt = textArea.value;
    let editedTxt1 = textArea1.value;
    notesObj[editId - 1]["note"] = editedTxt;
    notesObj[editId - 1]["title"] = editedTxt1;
    // console.log(notesObj[editId-1]["note"]=editedTxt);
    localStorage.setItem("notes", JSON.stringify(notesObj));
  });
}

// Funtion for Saving Note after Editing

function saveNote(saveId) {
  saveId = saveId.slice(3);
  console.log(saveId);
  let textArea = document.getElementById("textArea");
  let textArea1 = document.getElementById("textArea1");

  let editedTxt = textArea.value;
  let editedTxt1 = textArea1.value;
  notesObj[saveId - 1]["note"] = editedTxt;
  notesObj[saveId - 1]["title"] = editedTxt1;
  // console.log(notesObj[saveId - 1]);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

// Function to search note in search bar

let searchNote = document.getElementById("searchNote");
searchNote.addEventListener("input", function () {
  // console.log(searchNote.value);
  let searchDiv = document.getElementsByClassName("noteCard");
  //   console.log(searchDiv);
  Array.from(searchDiv).forEach((element) => {
    let elem = element.getElementsByTagName("p")[0].innerText;
    // console.log(elem);
    if (elem.includes(searchNote.value)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });

  // *****************OR mycreated************
  // for (let index = 0; index < searchDiv.length; index++) {
  //     const element = searchDiv[index];
  //     let elem = element.getElementsByTagName("p")[0].innerText;
  //     if (elem.includes(searchNote.value)) {
  //       element.style.display = "block";
  //       console.log(elem);
  //     }
  //     else{
  //       element.style.display = "none";
  //     }
  // }
});