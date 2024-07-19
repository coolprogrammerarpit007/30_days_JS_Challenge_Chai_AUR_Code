`use strict`;

const book = {
  title: `Harry Potter and Philospher stone`,
  author: `JK Rowling`,
  year: 1997,
  bookInfo: function () {
    console.log(`${this.title} is written by ${this.author}`);
  },
  publishingYear: function (year) {
    this.year = year;
  },
};
// console.log(book);
// console.log(book.title);
// console.log(book.author);
// book.bookInfo()
// console.log(book.year);
// book.publishingYear(2005);
// console.log(book.year);

const library = [
  {
    title: `Harry Potter and Philospher stone`,
    author: `JK Rowling`,
    year: 1997,
  },
  {
    title: `Harry Potter and chamber of secrets`,
    author: `JK Rowling`,
    year: 1998,
  },
  {
    title: `Harry Potter and prisoner of askaban`,
    author: `JK Rowling`,
    year: 1999,
  },
  {
    title: `Harry Potter and goblit of fire`,
    author: `JK Rowling`,
    year: 2000,
  },
  {
    title: `Harry Potter and order of phoenix`,
    author: `JK Rowling`,
    year: 2001,
  },
  {
    title: `Harry Potter and half blood prince`,
    author: `JK Rowling`,
    year: 2002,
  },
  {
    title: `Harry Potter and deathly hollows`,
    author: `JK Rowling`,
    year: 2003,
  },
];

// library.forEach((book)=>{
//     console.log(book.title);
// })


// for(const prop in book){
//     console.log(prop);
// }
// console.log(Object.keys(book));
// console.log(Object.values(book));