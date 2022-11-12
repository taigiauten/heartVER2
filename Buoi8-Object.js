// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };

// programming.languages.push("Go")
// programming.difficulty = 7
// delete programming.jokes
// programming.isFun = true

// //5
// programming.languages.forEach((item) => console.log(item))
// //6
// Object.keys(programming).forEach((item) => console.log(item))
// //7
// Object.values(programming).forEach((item) => console.log(item))


//****************************
// bài tap

// 1) What is the average income of all the people in the array?
// 2) Who are the people that are currently older than 30?
// 3) Get a list of the people's full name (firstName and lastName).
// 4) Get a list of people in the array ordered from youngest to oldest.
// 5) How many people are there in each department?


const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];


// 1) What is the average income of all the people in the array?
// const average = people.reduce((s, i) => s + parseInt(i.salary), 0) / (people.length + 0)
// console.log(average)

// 2) Who are the people that are currently older than 30?
// const than30 = people.filter((item) => new Date(Date.now()).getFullYear() - new Date((item.DOB).getFullYear() > 30))
// console.log(than30)
// 3) Get a list of the people's full name (firstName and lastName).
// const list = people.map((item) => console.log(item.firstName + ' ' + item.lastName))
// 4) Get a list of people in the array ordered from youngest to oldest.

// const oldset = people.sort((a, b) => new Date(a.DOB) - new Date(b.DOB) ? 1 : -1);
// console.log(oldset)

// 1,

// let average = 0;
// people.forEach((item) => {
//     average += Number(item.salary)
// })
// console.log(typeof average)

let average = people.reduce((total, nextValue) => total + Number(nextValue.salary), 0) / people.length


const current = new Date()
const result = people.filter((item) => {
    const peopleB = new DataTransfer(item.DOB)
    if (current.getFullYear() - people.getFullYear() > 30) {
        return item
    }
})

console.log(result)


// cau4

const third = people.sort((item1, item2) => Number(new Date(item1.DOB).getTime() - new Date(item2.DOB).getTime()))
