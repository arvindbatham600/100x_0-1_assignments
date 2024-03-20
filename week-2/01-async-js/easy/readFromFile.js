const fs = require("fs");
const { resolve } = require("path");

// create an async function which will read your file text

const readFileFunction = () => new Promise((resolve) => {
    fs.readFile("new.txt", "utf-8", (err, data) => {
        resolve(data)
    })
})

const count = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i
    }
    console.log(sum)
}

// create printFunction function which will print the data returned by promise -->

// without using async and await syntax
// const print = () => {
//     readFileFunction().then((data) => {
//       console.log(data)
//   });
// };

// with async and await synta
const print  = async ()  => {
    const value = await readFileFunction();
    console.log(value)
}

print();
count(100000000);
