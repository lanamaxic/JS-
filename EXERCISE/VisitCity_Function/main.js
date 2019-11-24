let citySearch = 'Dubai'
let arrayOfCities = ['Pula', 'Hamburg', 'Triberg']

function visitCity(city, array) {
    let result = ''
   for (i=0; i < array.length; i++) {
       if (array[i] == city) {
          return`I have visited ${city}`
       }
   }

   return `I have not visited ${city}` 
}
document.write(visitCity(citySearch, arrayOfCities));
