var voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];

  
const output= voters.map((voters)=> {
    return {...voters, country:"india"}   // this line will add "country" property to the existing object
})

// console.log(output);



const makeStrings=[
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

// Angelina Jolie can go to The Matrix
// Paris Hilton is under age!!

const op= makeStrings.map((makeStrings)=>{
    if(makeStrings.age>=50){
        return `${makeStrings.name} can go to the Matrix`
    }
    else 
        return `${makeStrings.name} is under age!!`
});

console.log(op);

