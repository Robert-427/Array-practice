const contacts = require('./data.json');

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with. 

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result, 
// 2. store the result with a variable
// 3. appropriately log the results to the console



//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS
let insectusArray = contacts.filter(contact => contact.company === "INSECTUS")
//console.log(insectusArray)

//2. an array all of the contacts, with only the name property
let nameArray = contacts.map((contact) => contact.name)
//console.log (nameArray)

//3. an array of all of the contacts over the age of 50
//let ageArray = contact.filter((contact) => contact.age > 50)
//console.log (ageArray)

//4. the first ten contacts when alphabetically ordered by name
let firstTen = contacts.sort((a,b) => {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    if (nameA < nameB) {
        return -1
    }
    if (nameA > nameB) {
        return 1
    }
})
//console.log(firstTen)

//5. the oldest person's name
// let oldestPerson = con
contacts.reduce((a,b) => a.age > b.age ? a : b)
//console.log(contacts[0].name)

//6. the contact id with the name Isabella Burke
let isabellaFind = contacts.find((contact) => contact.name === "Isabella Burke")
//console.log(isabellaFind)

//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties
let formattedContacts = contacts.map((contact) => {
    contact.firstName = contact.name.split(" ")[0]
    contact.lastName = contact.name.split(" ")[1]
    contact.name = undefined
    return contact
})

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend
let contactsWithFriends = contacts.map((contact) => {
    return contact.friends = contact.friends.map((friendId) => {
        return contacts.find((cntct) => cntct.id === friendId)
    })
})
//console.log(contactsWithFriends)

//9. the average age of the contacts
let averageAge = []
let totalAge = 0
contacts.map(
    (contact) => {
        totalAge += contact.age
    }
)
totalAge = totalAge/contacts.length
averageAge.push(totalAge)
console.log(totalAge)

//10. the median age of the contacts
let medianAge = contacts.sort((contact) => contact.age)[Math.floor(contacts.length)]
//console.log(medianAge)