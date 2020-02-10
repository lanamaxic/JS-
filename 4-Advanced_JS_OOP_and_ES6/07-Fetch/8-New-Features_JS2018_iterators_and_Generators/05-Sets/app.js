//SETS - Store unique values of any type
//A set is a special type collection - "set of values" (without keys), where each value may occure only once.
//The alternative to Set could be an array of users, and the code to check for duplicates on every insertion using arr.find.
//But the performance would be much worse, because this method walks through the whole array checking every element. 
//Set is much better optimized internally for uniqueness checks.

/**
 * new Set(iterable) - creates the set and if an iterable object is provied (usually an array),
 * copies values from it into the set
 * set.add(value) - adds a value, returns the set itself.
 * set.delete(values) - removes the values, returns true if the values exists at the moment of the call, otherwise false
 * set.has(value) - returns true if the value exists in the set, otherwise false
 * set.clear() - removes everything from the set
 * set.size - is the element count
 *  *  
 */


 //Create the set
let set = new Set()

let person1 = {name: "Safwan"}
let person2 = {name: "Mustafa"}
let person3 = {name: "Ahmad"}


//Visits, some users come multiple times
set.add(person1);
set.add(person2);
set.add(person3);
set.add(person1);
set.add(person3);

//set keeps only unique values
console.log(set.size)

//Iteration over Set

//We can loop over set either with for...of, or isung forEach :
for(let x of set){
   // x takes place of the value
    console.log(x)
}

//the same with forEach
set.forEach(item => console.log(item))

/**
 * set.keys() - return an iterable object for values, 
 * set.values() - same as set.keys()
 * set.entries() - returns an iterable object for entries [values, value], exists for compatibility with Map
 */

//Convert set to array
const setArr = Array.from(set)
console.log(setArr)