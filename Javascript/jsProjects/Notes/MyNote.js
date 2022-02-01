console.log("This is Clone App");

let updateLSData = () => {
  const notesArr = [];
  const textAreaData = document.querySelectorAll("textarea");
  const labelData = document.querySelectorAll(".label");
  textAreaData.forEach((element, index) => {
    if (element.value) {
      notesArr.push(element.value);
      console.log(element);
    }
    //dynamically updating id and htmlFor
    element.id=index
    labelData[index].htmlFor=index;
    // console.log(element);
    // console.log(labelData[index]);
  });

  localStorage.setItem("notes", JSON.stringify(notesArr));
  // console.log(notesArr);
};

let addBtn = document.getElementById("add");
const addNewNote = (text = "") => {
  let note = document.createElement("div");
  console.log("you clicked addBtn");
  note.classList.add("note");
  let htmlData = `<div class="operation">
                    <label class='label' >
                    <i class="far items edit fa-edit"></i>
                    </label>
                    <i class="far delete items fa-trash-alt"></i>
                  </div>
                    <div class="main ${text ? "" : "hidden"}"></div>
                    <textarea  class=${
                      text ? "hidden" : ""
                    } cols='25' rows='4' placeholder='write note here'></textarea> `;

  note.insertAdjacentHTML("afterBegin", htmlData);
  document.body.appendChild(note);
  // console.log(document.body);

  // getting the references
  const editBtn = note.querySelector(".edit");
  const delBtn = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");
  // deleting node
  delBtn.addEventListener("click", () => {
    console.log("you rmove", textArea.value);
    note.remove();
    updateLSData();
  });

  // store both field is same, when toggling it show same data on both fields
  textArea.value = text;
  mainDiv.innerText = text;
  // Toggle using edit button
  editBtn.addEventListener("click", () => {
    console.log("you clicked editBtn");
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
    updateLSData();
  });
  // console.log(mainDiv.innerText);

  // adding data from textarea to maindiv
  textArea.addEventListener("change", () => {
    mainDiv.innerText = textArea.value;
    // console.log(textArea.value);
  });

  // below is for updating id for textarea and htmlFor for label ,onclicking edit button cursor will move
  updateLSData()
};
// end of addNewNote() function

const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  // console.log(notes);
  notes.forEach((note) => {
    addNewNote(note);
  });
}
addBtn.addEventListener("click", () => addNewNote());
// let labal=document.getElementsByClassName('label')[0];
// // labal.for='hie'
// labal.classList.add('ads')
// // labal.htmlFor='ads'
// labal.htmlFor='ads'
// console.log(labal);
