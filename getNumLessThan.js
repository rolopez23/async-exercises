const generateRandomNum = (num) => {
  return (Math.random() * num);
}

const generateRandomDelay = () => {
  // return generateRandomNum(10) * 500;
  return 2000;
}
// callback(err, num)
const getNumLessThanTen = (callback) => {
  const randomDelay = generateRandomDelay();
  
  setTimeout(() => {
    const randNum = generateRandomNum(10);
    callback(null, randNum);
  }, randomDelay);
};


// module.exports.getNumLessThanTen = getNumLessThanTen;
module.exports = getNumLessThanTen;

