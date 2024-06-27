const users = [
  { name: "Max", age: 25 },
  { name: "Lewis", age: 40 },
  { name: "Charles", age: 25 },
  { name: "Sainz", age: 34 },
];

// const output = users.reduce((acc,curr)=>{
//     if(acc[curr.age]){     // checks if current age is present in the acc array or not
//         acc[curr.age]= ++acc[curr.age];
//     }
//     else{
//         acc[curr.age]=1
//     }
//     return acc;
// },{});

// console.log(output);

// const output= users.reduce((acc,curr)=>{
//     if(curr.age < 30){    // it will check if the current age is <30 and it will push the value to the accumulator
//         acc.push(curr.name);
//     }
//     return acc;
// },[]);

// console.log(output);

//

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

// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

const output = voters.reduce(
  (acc, curr) => {
    if (curr.age>=18 && curr.age<=25) {
        acc.numYoungPeople++;
        if(curr.voted) acc.numYoungVotes++;
    }
    else if (curr.age>=26 && curr.age<=35) {
        acc.numMidsPeople++;
        if(curr.voted) acc.numMidVotesPeople++;
    }
    else if (curr.age>=36 && curr.age<=55) {
        acc.numOldsPeople++;
        if(curr.voted) acc.numOldVotesPeople++;
    }
    return acc;
  },
  {  // these are the initial values for the accumulator
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  }
);

console.log(output);
