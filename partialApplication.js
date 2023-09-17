const R = require("ramda");

const bookObject = [
  { title: "A River Runs Through It", year: 1950 },
  { title: "Anne of Green Gables", year: 1890 },
  { title: "The Trumpet", year: 1950 },
]

// (year) => (book) => boolean
// const publishedInYear = year => book => book.year === year;
// const curriedPublishedInYear = R.curry(publishedInYear);

// const titlesForYear = (year, books) => {
//   // note the commented out line below doesn't work because it evaluates to R.filter((book) => (book) => book.year === year)
//   /** const selected = R.filter((book) => publishedInYear(year), books);*/
//   const selected = R.filter(curriedPublishedInYear(year), books);
//   return R.map((b) => b.title, selected);
// }

const publishedInYear = R.curry((year, book) => book.year === year);

const bookTitle = book => book.title;

// const titlesForYear = (year, books) => R.pipe(
//   R.filter(publishedInYear(year)),
//   R.map(bookTitle)
// )
// the (books) invocation at the end means its going to wait for us to pass the `books` along later
// calling curry is what allows you to partially apply it
const titlesForYear = R.curry((year, books) => R.pipe(
  R.filter(publishedInYear(year)),
  R.map(bookTitle)
)(books))
// partial application
const fiftiesBookTitles = titlesForYear(1950);


console.log(fiftiesBookTitles(bookObject));