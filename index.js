// Javascript
// variables store values
// use nouns for var names. Esp don't use verbs
var piet = 'cool'
var pietsAge = 34 // number

console.log(pietsAge)
//
// data types (what sorts of things can you store in a var)
// common data types
// numbers
var age = 1
// change the contents of a variable
age = age + 1
// text (strings)
var name = 'piet'
// array (lists or collection of things)
var shoppingListItem = 'dogs'
var shoppingList = ['beer', 'avos', 'cats', shoppingListItem]

// get an element out of an array
// gets called 'indexing into an array'
// GOTCHA: stumbers
var firstElement = shoppingList[0]
var lastElement = shoppingList[3]
var notAnElement = shoppingList[100]
console.log(firstElement)
console.log(lastElement)
console.log(notAnElement)

console.log('shopping list:', shoppingList)

// hash (key value store)
var person = {
  name: 'sam', // string (text)
  age: 33, // number
  isAngry: true // boolean
}

// get a value out of an object (the first way)
var personAge = person['age']
// get a value out of an object (the second way)
var personAgeToo = person.age
console.log('person: ', person)

console.log('personeAge is: ', personAge)
console.log('personeAgeToo is: ', personAgeToo)

// booleans (true or false)
//
// if else

if (person.age > 20) {
  person.age = 5
  console.log('person is older than 20')
  console.log('person is older than 20')
  console.log('person is older than 20')
  console.log('person is older than 20')
  console.log('person is older than 20')
} else {
  console.log('person is younger than 20')
  console.log('person is younger than 20')
  console.log('person is younger than 20')
  console.log('person is younger than 20')
  console.log('person is younger than 20')
}

if (person.age > 20) {
  console.log('person is older than 20')
  console.log('person is older than 20')
  console.log('person is older than 20')
  console.log('person is older than 20')
  console.log('person is older than 20')
} else {
  console.log('person is younger than 20')
  console.log('person is younger than 20')
  console.log('person is younger than 20')
  console.log('person is younger than 20')
  console.log('person is younger than 20')
}
//
// loops
for (var i = 0; i < shoppingList.length; i = i + 1) {
  console.log('the element in the shopping list is:', shoppingList[i])
}
//
// functions
//
