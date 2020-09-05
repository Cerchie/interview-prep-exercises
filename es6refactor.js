// What is this function doing? returning all ids of users who are legal adults
// Rewrite in cleaner, ES6 syntax
// function findUserIds(arr) {
//     let users = [];
//   for(let i = 0; i < arr.length; i++) {
//       if(arr[i].age >= 18) {
//         users.push(arr[i].id);
//     }
//   }
//   return users;
// }

// let users = findUserIds([
//   { id: 1, name: "Paul", age: 20 }, 
//   { id: 2, name: "John", age: 10 },
//   { id: 3, name: "Bill", age: 18 }
// ])

const findUserIds = function (arr) { //function statement
    let newArr = []; //declaring users array
    for (let i of arr) { //for...of loop to iterate over arr
        if (arr[i].age >= 18) newArr.push(arr[i].id); //push adult ids to arr
    }
    return newArr; //return arr
}

let users = findUserIds([{
        id: 1,
        name: "Paul",
        age: 20
    },
    {
        id: 2,
        name: "John",
        age: 10
    },
    {
        id: 3,
        name: "Bill",
        age: 18
    }
])

findUserIds(users);