class Person {
    constructor(firstName, lastName, dateBirth) {
        this.name1 = firstName;
        this.name2 = lastName;
        this.date = new Date(dateBirth)
    }

    greeting(hello) {
        return `Hi ${this.name1} ${this.name2}`
    }

}