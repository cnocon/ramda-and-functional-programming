// For example, let’s say we have a collection of book objects and we want to find the titles of all of the books published in a given year.Let’s write that using only Ramda’s collection iteration functions:

// const publishedInYear = (year, book) => book.year === year
// const titlesForYear = (books, year) => {
//   const selected = filter(book => publishedInYear(book, year), books)

//   return map(book => book.title, selected)
// }
const DATA = [
  {
    title: "Shawshank Redemption",
    year: 1975
  },
  {
    title: "War and Peace",
    year: 1850
  },
  {
    title: "The Feminine Mystique",
    year: 1975
  },
  {
    title: "On the Road",
    year: 1960
  }
];
const R = require("ramda");
const bookTitle = book => book.title;

const publishedInYear = R.curry((year, book) => book.year === year);

const titlesForYear = R.curry((books, year) => R.pipe(
  R.filter(publishedInYear(year)),
  R.map(bookTitle)
)(books))

const fxn = titlesForYear(R.__, 1975);
console.log(fxn(DATA));

