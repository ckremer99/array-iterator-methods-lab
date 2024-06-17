const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
  ];
  
  const travelMethods = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
  ];

  const devs = [
    { name: 'Alex', year: 1988 },
    { name: 'Dani', year: 1986 },
    { name: 'Matt', year: 1970 },
    { name: 'Wes', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Array.prototype.filter()

// 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's.

// - You have an array of inventors, each with a birth year listed by the property 'year'.
// - Use the Array.prototype.filter() method to create a new array.
// - The new array, 'veryOldInventors', should only include inventors born between the years 1500 and 1599.

let veryOldInventors = []

// Enter your solution code here:
veryOldInventors = inventors.filter((inventor) => {
    return (inventor.year >= 1500 && inventor.year <= 1599)
})


// Check your return value:
console.log('Exercise 1 My Result: ', veryOldInventors)
console.log('Exercise 1 Correct Result: ',
    [
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }
    ]
)


// Array.prototype.map()

// 2. Map the array of inventors into a new array. This new array should only contain objects with the inventors' first and last names.

// - For each inventor, return an object in the format { first: "First Name", last: "Last Name" }.
// - The new array should be a collection of these objects, each representing an inventor with only their first and last names.

// Hint:  Return a new object literal from the callback that looks something like { first: "First Name", last: "Last Name" }


let inventorNames = []

// Enter your solution code here:
inventorNames = inventors.map((inventor) => {
    return {"first" : inventor.first, "last" : inventor.last}
})


// Check your return value:
console.log('Exercise 2 My Result: ', inventorNames)
console.log('Exercise 2 Correct Result: ',
    [
        { first: 'Albert', last: 'Einstein' },
        { first: 'Isaac', last: 'Newton' },
        { first: 'Galileo', last: 'Galilei' },
        { first: 'Marie', last: 'Curie' },
        { first: 'Johannes', last: 'Kepler' },
        { first: 'Nicolaus', last: 'Copernicus' },
        { first: 'Max', last: 'Planck' },
        { first: 'Katherine', last: 'Blodgett' },
        { first: 'Ada', last: 'Lovelace' },
        { first: 'Sarah E.', last: 'Goode' },
        { first: 'Lise', last: 'Meitner' },
        { first: 'Hanna', last: 'Hammarström' }
    ]
)

// Array.prototype.sort()

// 3. Sort the inventors by birth date in ascending order (from those born furthest in the past to those born most recently).

let sortedByBirthYear = []

// Enter your solution code here:
sortedByBirthYear = inventors.sort((a, b) => {
    return a.year - b.year
})


// Check your return value:
console.log('Exercise 3 My Result: ', sortedByBirthYear)
console.log('Exercise 3 Correct Result: ',
    [
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }
    ]
)

// Array.prototype.find()

// 4. Use Array.prototype.find() to identify the inventor with the first name 'Ada' from an array of inventor objects

// - You have an array of objects, each representing an inventor with various properties including their first name.
// -  Utilize the Array.prototype.find() method to locate the object for the inventor named 'Ada'.
// -  Assign the found inventor object to the variable 'inventorNamedAda'

let inventorNamedAda = {}

// Enter you solution code here:
inventorNamedAda = inventors.find((inventor) => {
    return inventor.first === "Ada"
})


// Check your return value:
console.log('Exercise 4 My Result: ', inventorNamedAda)
console.log('Exercise 4 Correct Result: ', { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 })

// Array.prototype.map()

// 5. Use the Array.prototype.map() method to reformat each name in the 'people' array. 
// The goal is to convert names from "Last, First" format to "First Last" format.

// Hint: Use the String.prototype.split method to separate the first and last names. You can split the string using ', ' as the separator.
// After splitting the names, rearrange them to the "First Last" format.

let firstLast = []

// Enter your solution code here:

firstLast = people.map((person) => {
    firstname = person.split(", ")[1]
    lastname = person.split(", ")[0]
    // return firstname + " " + lastname
    return `${firstname} ${lastname}`
})

// Check your return value:
console.log('Exercise 5 My Result: ', firstLast)
console.log('Exercise 5 Correct Result: ',
    [
        'Carl Becker',
        'Samuel Beckett',
        'Mick Beddoes',
        'Henry Beecher',
        'Ludwig Beethoven',
        'Menachem Begin',
        'Hilaire Belloc',
        'Saul Bellow',
        'Robert Benchley',
        'Peter Benenson',
        'David Ben-Gurion',
        'Walter Benjamin',
        'Tony Benn',
        'Chester Bennington',
        'Leana Benson',
        'Silas Bent',
        'Lloyd Bentsen',
        'Ric Berger',
        'Ingmar Bergman',
        'Luciano Berio',
        'Milton Berle',
        'Irving Berlin',
        'Eric Berne',
        'Sandra Bernhard',
        'Yogi Berra',
        'Halle Berry',
        'Wendell Berry',
        'Erin Bethea',
        'Aneurin Bevan',
        'Ken Bevel',
        'Joseph Biden',
        'Ambrose Bierce',
        'Steve Biko',
        'Josh Billings',
        'Frank Biondo',
        'Augustine Birrell',
        'Elk Black',
        'Robert Blair',
        'Tony Blair',
        'William Blake'
    ]
)

// Array.prototype.some()

// 6. Determine if there is at least one person in the devs array who is 18 years old or older.

// - You have an array of people with their respective ages.
// - Use the Array.prototype.some() method to check if any person in the array is 18 years old or older.
// - Store the result (true or false) in the variable 'isAdultPresent'. 

let isAdultPresent = null

// Enter your solution code here:
isAdultPresent = devs.some((dev) => {
    return (2024 - dev.year) >= 18;
})


// Check your return value:
console.log('Exercise 6 My Result: ', isAdultPresent)
console.log('Exercise 6 Correct Result: ', true)


// Array.prototype.every()

// 7. Use Array.prototype.every() to determine if every person in the devs array is 19 years old or older.

// - You have an array of individuals, each with their year of birth represented by the 'year' property.
// - Use the Array.prototype.every() method to verify if every individual in the array is at least 19 years old.
// - Store the result (true or false) in the variable 'isEveryone19OrOlder'.

let isEveryone19OrOlder = null

// Enter your solution code here:
isEveryone19OrOlder = devs.every((dev) => {
    return (2024 - dev.year) >= 19
})


// Check your return value:
console.log('Exercise 7 My Result: ', isEveryone19OrOlder)
console.log('Exercise 7 Correct Result: ', false)

// Array.prototype.find()

// 8. Use Array.prototype.find() to identify and retrieve the comment object with a specific ID 823423 from an array of comment objects.

// - Assign the found comment object to the variable 'commentById'.


let commentById = {}

// Enter your solution code here:
commentById = comments.find((comment) => {
    return comment.id === 823423;
})


// Check your return value:
console.log('Exercise 8 My Result: ', commentById)
console.log('Exercise 8 Correct Result: ', { text: 'Super good', id: 823423 })

// Array.prototype.findIndex()

// 9. Determine the index of the comment that has a specific ID 123523 in an array of comment objects.

// - Store the index in the variable 'idx'.

let idx = null

// Enter your solution code here:
idx = comments.findIndex((comment) => {
    return comment.id === 123523
})


// Check your return value:
console.log('Exercise 9 My Result: ', idx)
console.log('Exercise 9 Correct Result: ', 3)

// Array.prototype.reduce()

// Bonus 1. Calculate the Combined Lifespan of Inventors Using Array.prototype.reduce()

// - Each object in the array includes properties: 'first', 'last', 'year' (birth year), and 'passed' (year of death).
// - Use the Array.prototype.reduce() method to sum up the total years lived by all the inventors.
// - Store the total sum in the variable 'totalYearsLived'.

// Hints:
// - Inside the reduce callback function, calculate the lifespan of each inventor (passed - year).
// - Accumulate this lifespan in the 'totalYearsLived' variable.
// - Remember, reduce takes a callback function and an initial value for the accumulator.

let totalYearsLived = 0

// Enter your solution code here:
totalYearsLived = inventors.reduce((acc, inventor) => {
    return acc + inventor.passed - inventor.year;
}, 0)


// Check your return value:
console.log('Bonus 1 My Result: ', totalYearsLived)
console.log('Bonus 1 Correct Result: ', 861)

// Array.prototype.reduce()

// Bonus 2. Tallying Travel Methods Using Array.prototype.reduce(). Count the number of times each travel method appears in the 'travelMethods' array.

// - The resulting object should have keys as the travel methods ('car', 'truck', 'bike', etc.) and values as their respective counts.
// - Store this object in the variable 'travelMethodCounts'.

// Hints:
// - Inside the reduce function, check if the travel method already exists as a key in your accumulator object. If it does, increment its count. If not, add it with a count of 1.
// - Since you want to return an object, be sure to pass an empty {} for the initial value of the "accumulator".


let travelMethodCounts = {}

// Enter your solution code here:
travelMethodCounts = travelMethods.reduce((acc, method) => {
   switch(method) {
    case 'car':
        acc.car += 1;
        break
    case 'truck':
        acc.truck += 1;
        break
    case 'bike':
        acc.bike += 1; 
        break
    case 'walk':
        acc.walk += 1;
        break 
    case 'van':
        acc.van += 1;
        break
   }

   return acc
}, {'car' : 0, 'truck' : 0, 'bike' : 0, 'walk' : 0, 'van' : 0})

// Check your return value:
console.log('Bonus 2 My Result: ', travelMethodCounts)
console.log('Bonus 2 Correct Result: ', { car: 5, truck: 3, bike: 2, walk: 2, van: 2 })
