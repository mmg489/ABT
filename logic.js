//goals of the logic
//user will input the name of the Book they are reading
function buttonPressed() {
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

  var bookData = {
    book: "",
    chapter: "",
    minute: "",
    character: "",
    bookNote: "",
  };

  //store the name of the book
  //will be saved to local storage
  localStorage.setItem("bookName", JSON.stringify(book));
  localStorage.setItem("chapterNumber", JSON.stringify(chapter));
  localStorage.setItem("minuteMarker", JSON.stringify(minute));
  localStorage.setItem("characterList", JSON.stringify(character));
  localStorage.setItem("bookNotes", JSON.stringify(bookNote));

  console.log(localStorage);
}
