const animal = {
    kind : 'Cat',
    sound : 'meou',
    legs : 4,
    tail: true,
    numOfLegs : function(){
        return this.legs
    }
}

console.log(animal.numOfLegs())
//////////////////////////////////////////////
const person = {
    firstName: 'Merry',
    lastName: 'Christmas',
    birthdate: new Date('9-10-1994'),
    calculateAge : function() {
        const diff = Date.now() - 
        this.birthdate.getTime()
        //now (in ms) and getTime() (in ms)
        //diff is the age in ms
        const ageDate = new Date(diff)
        //
    }


  
}