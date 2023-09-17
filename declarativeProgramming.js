const R = require("ramda");
// For example, let’s say we have a collection of book objects and we want to find the titles of all of the books published in a given year.Let’s write that using only Ramda’s collection iteration functions:

// const publishedInYear = (year, book) => book.year === year
// const titlesForYear = (books, year) => {
//   const selected = filter(book => publishedInYear(book, year), books)

//   return map(book => book.title, selected)
// }
const data = [
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
]
const bookTitle = book => book.title;
// used to have args in other order
// const publishedInYear = R.curry((book, year) => book.year === year)
const publishedInYear = R.curry((year, book) => book.year === year);

const titlesForYear = (books, year) => {
  // publishedInYear is curried, so it will return a partial application if you pass partial arguments
  const selected = R.filter(publishedInYear(year), books);
  return R.map(bookTitle, selected);
}
const newFunction = R.partialRight(titlesForYear, [1975]);
console.log(newFunction(data));

