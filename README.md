# Programming intro

Don't worry about the syntax.

Main things to take away

## Variables

Variables store values

Use nouns for var names. Esp don't use verbs

```js
var piet = 'cool'
var pietsAge = 34
```

You can change the value stored in a variable:

```js
var age = 1
age = 2 // why isn't there a "var" on this line? 
```

## Data types

They vary from language to language. [Here's a link to the javascript ones](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

### Numbers

```js
var age = 1
```

### Booleans

`true` or `false`

### Arrays (an ordered list)

```
var shoppingList = ['beer', 'avos', 'cats']
```

Getting an element out of the array by it's index. "Indexing into an array"
Indexes start at 0

```js
var firstElement = shoppingList[0]
```


### Objects (store values by a key, no ordering)

```js
var person = {
  name: 'sam', // string (text)
  age: 33, // number
  isAngry: true // boolean
}
```

Get a value out of an object by key, both ways are functionally identical:
```js
// get a value out of an object (the first way, not common but required sometimes)
var personAge = person['age']
// get a value out of an object (the second way that's most common)
var personAgeToo = person.age
```

## if else

Controls what bits of code get run, based on conditions of the program.

```js
if (person.age > 20) {
  console.log('person is older than 20')
} else {
  console.log('person is younger than 21')
}
```

## Loops

```
var shoppingList = ['beer', 'avos', 'cats']
for (var i = 0; i < shoppingList.length; i = i + 1) {
  console.log('the element in the shopping list is:', shoppingList[i])
}
```
