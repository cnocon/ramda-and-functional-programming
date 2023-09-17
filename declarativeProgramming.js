const R = require("ramda");
// For example, let’s say we have a collection of book objects and we want to find the titles of all of the books published in a given year.Let’s write that using only Ramda’s collection iteration functions:

// const publishedInYear = (year, book) => book.year === year
// const titlesForYear = (books, year) => {
//   const selected = filter(book => publishedInYear(book, year), books)

//   return map(book => book.title, selected)
// }
const books = [
  {
    title: "Shawshank Redemption",
    year: 1975
  },
  {
    title: "War and Peace",
    year: 1850
  },
  {
    title: "The Feminine Mystiquie",
    year: 1975
  },
  {
    title: "On the Road",
    year: 1960
  }
]

function publishedInYear(year) {
  return function (book) {
    return book.year === year
  }
}
const booksForYear = year => R.filter(publishedInYear(year), books);
console.log( booksForYear(1975));