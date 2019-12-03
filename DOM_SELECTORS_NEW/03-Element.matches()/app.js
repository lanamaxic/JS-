//The Element.matches(css-selector) does not look for anything, 
//it numerely checks if the element matches the given css-selector.
//it return, other wise it returns false
//The method comes in handy when we are iterating over elements 
//(for example array or anything similar) and trying to filter out those that interest us
// let is HTMLCollection --> children liefert HTML-Elements in HTMLCollection

//this can be any collection instead of body.children
const elements = document.body.children
for(let elem of elements){
    if(elem.matches('a[href$="zip"]')){
        console.log(`The archive refrence: ${elem.href}`)
    }
}