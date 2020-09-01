//goals of the logic

//user will input the name of the Book they are reading
function buttonPressed() {
  var book = document.getElementById("bookName");
  document.getElementById("currentBook").append(book.value);
  var bookVal = book.value;

  var chapter = document.getElementById("chapterNumber");
  document.getElementById("chapterChapter").append(chapter.value);
  var chapterVal = chapter.value;

  var minute = document.getElementById("minuteMarker");
  document.getElementById("minuteMark").append(minute.value);
  var minuteVal = minute.value;

  var character = document.getElementById("characterList");
  document.getElementById("characters").append(character.value);
  var characterVal = character.value;

  var bookNote = document.getElementById("bookNotes");
  document.getElementById("notes").append(bookNote.value);
  var bookNoteVal = bookNote.value;

  //store the name of the book
  //will be saved to local storage
  localStorage.setItem("book", bookVal);
  localStorage.setItem("chapter", chapterVal);
  localStorage.setItem("minute", minuteVal);
  localStorage.setItem("character", characterVal);
  localStorage.setItem("bookNote", bookNoteVal);
}

console.log(localStorage);

function showLast() {
  localStorage.getItem("book", bookVal);
  localStorage.getItem("chapter", chapterVal);
  localStorage.getItem("minute", minuteVal);
  localStorage.getItem("character", characterVal);
  localStorage.getItem("bookNote", bookNoteVal);
}
//Notes
// to save data to the localStorage you need to pass TWO arguments, the key and the actual data value you want to store
// in this case we are storing each input by name as the "key" and the value the user enters as the data
//in order to get the data to show up in the console:
// a variable was created for each respective user input, and then appended to the HTML so the user sees it as entered
//then a second variable was created that allows for saving the value from the first user input, and accessing it
//...later when writing to the localStorage
//basically one variable is for saving to the user side so they see the information theyve entered
//and the second variable is for saving to the localStorage to be accessed later if desired.
