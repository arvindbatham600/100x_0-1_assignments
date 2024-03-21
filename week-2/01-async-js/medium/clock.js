const getDate = () => {
  const convertIntoDobuleDigit = (number) => {
    let newNumber = number;
    if (number < 10) {
      newNumber = `0${number}`;
    }
    return newNumber;
  };

  const date = new Date();
  const hours = convertIntoDobuleDigit(date.getHours());
  const minutes = convertIntoDobuleDigit(date.getMinutes());
  const seconds = convertIntoDobuleDigit(date.getSeconds());

  const time = `${hours} : ${minutes} : ${seconds}`;
  console.log(time);
};

setInterval(getDate, 1000)
