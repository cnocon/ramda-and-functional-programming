const R = require("ramda");
const DATA = [
  {
    birthCountry: "USA",
    naturalizationDate: new Date("12-11-1987"),
    age: 35
  },
  {
    birthCountry: "Canada",
    age: 35
  },
  {
    birthCountry: "USA",
    naturalizationDate: new Date("08-09-1990"),
    age: 33
  },
  {
    birthCountry: "USA",
    naturalizationDate: new Date("09-16-2006"),
    age: 17
  }
];
const wasBornInCountry = person => R.equals(person.birthCountry, "USA");
const wasNaturalized = person => Boolean(person.naturalizationDate);
const isOver18 = person => R.gte(person.age, 18);

const isCitizen = R.either(wasBornInCountry, wasNaturalized);

const isEligibleToVote = R.both(isOver18, isCitizen);
const result = R.filter(isEligibleToVote, DATA);
console.log(result);