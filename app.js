function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = function () {
    return title + " by " + author + ", " + pages + "pages, not read yet";
  };
}
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295");
console.log(theHobbit.info());
