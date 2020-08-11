//goals of the logic
//user will input the name of the Book they are reading
function buttonPressed() {
  // document.write ( document.myForm.elements[0].value );
  var book = document.getElementById("bookName");

  document.getElementById("currentBook").append(book.value);

  var chapter = document.getElementById("chapterNumber");

  document.getElementById("chapterChapter").append(chapter.value);
  var minute = document.getElementById("minuteMarker");

  document.getElementById("minuteMark").append(minute.value);

  var character = document.getElementById("characterList");

  document.getElementById("characters").append(character.value);

  var bookNote = document.getElementById("bookNotes");
  document.getElementById("notes").append(bookNote.value);
}
//identify when the user submits the book name
//store the name of the book
localStorage.setItem("book_name", JSON.stringify(minuteMarker));
localStorage.setItem("chapter_number", "ReadyPlayerOne");
localStorage.setItem("minute_mark", "ReadyPlayerOne");
localStorage.setItem("characters", "ReadyPlayerOne");
localStorage.setItem("book_notes", "ReadyPlayerOne");
console.log(localStorage);
// if (localStorage(Storage) !== "undefined") {
//   console.log("Storage is confirmed");
// } else {
//   console.log("Sorry! No web storage support");
// }

//will be saved to local storage

//user will then have the option to save character names in a list

//user will be able to provide a summary as they read (notes of their last chapter read etc)

//user will store the chapter and minute mark they were on
