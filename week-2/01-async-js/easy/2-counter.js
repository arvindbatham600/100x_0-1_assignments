// <!-- ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript.There is a hint at the bottom of the file if you get stuck. -- >

// setTimeout

const increaseCount = (value) => {
  console.log(value);

  if (value >= 0) {
    setTimeout(() => {
      increaseCount(value + 1);
    }, 1000);
  }
};

increaseCount(1);
