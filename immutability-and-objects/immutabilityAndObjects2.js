const R = require("ramda");

const list = [{
    age: 35,
    birthCountry: "Libya"
  }, {
    age: 20,
    naturalizationDate: new Date("09-18-2003")
  }, {
    age: 17,
    birthCountry: "USA",
    
  }, {
    age: 23,
    birthCountry: "Libya"
  }]

/****************************************************
 *  ITERATION #1 
const OUR_COUNTRY = "USA";

const wasBornInCountry = person => R.equals(
  (person) => OUR_COUNTRY(person),
  R.prop("birthCountry", person)
);
const wasNaturalized = person => R.prop("naturalizationDate", person);
const isOver18 = person => R.gte(R.prop("age", person), 18);

// isCitizen and isEligibleToVote are using Pointfree style
const isCitizen = person => R.either(wasBornInCountry, wasNaturalized)(person)
const isEligibleToVote = person => R.both(isOver18, isCitizen)(person);
const eligibleVoters = people => R.filter(isEligibleToVote, people);

console.log(eligibleVoters(list));*/

/****************************************************
 *  ITERATION #2 
 ****************************************************/
const OUR_COUNTRY = "USA";
const birthCountry = R.prop("birthCountry");

const wasBornInCountry = person => R.equals(
  R.always(OUR_COUNTRY),
  birthCountry
);
const wasNaturalized = R.prop("naturalizationDate");
const isOver18 = person => R.gte(
  R.prop("age")(person),
  R.always(18)(person)
);

// isCitizen and isEligibleToVote are using Pointfree style
const isCitizen = R.either(wasBornInCountry, wasNaturalized);
const isEligibleToVote = R.both(isOver18, isCitizen);
const eligibleVotersFromList = R.filter(isEligibleToVote);

console.log(eligibleVotersFromList(list));