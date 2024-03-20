// ## Create a counter in JavaScript

//  We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let start = 0;
const counter = () => {
    start = start + 1;
    console.log(start)
}

setInterval(counter, 1000);

