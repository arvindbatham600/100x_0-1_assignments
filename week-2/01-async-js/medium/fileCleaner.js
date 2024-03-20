const fs = require("fs");

const cleanFile = () => {
    return new Promise((resolve) => {
        fs.readFile("./file.txt", "utf-8", (err, data) => {
            if (err) {
                console.log("error while reading the file..")
            } else {
                const cleanData = data.split(/\s+/).join(' ');
                fs.writeFile("./file.txt", cleanData, (err) => {
                    if (!err) {
                        resolve(cleanData)
                    }
                })
            }
        })
    })
}

// call the cleanFile function -->
const print = async () => {
    const newValue = await cleanFile();
    console.log("corrected string : ", newValue)
}

print();