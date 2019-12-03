let fLi = document.querySelector('.chapter'); //selecting by tagName the first LI

let x, y, z;

x = fLi.closest('.book') //selecting the closest PARENT ,like here ist --> UL
//x = fLi.closest('ul')
y = fLi.closest('.contents')// selecting the closest PARENT ---> DIV

z = fLi.closest('.heading')// we get here NULL (because h2 is not an ancestor)

console.log(x)
console.log(y)
console.log(z)