const fs = require("fs");

const dataTowrite = "Jai Shree Krishna";

const writeFilefunction = () => {
  return new Promise((resolve) => {
    fs.writeFile("new.txt", dataTowrite, (err) => {
      if (err) {
        console.log("error");
      } else {
        resolve("written successfully");
      }
    });
  });
};

const print = async () => {
  const value = await writeFilefunction();
  console.log(value);
};

print();
