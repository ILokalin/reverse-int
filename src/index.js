module.exports = function reverse (n) {
  let result = 0;
  let checkNumber = Math.abs(n)

  while (checkNumber > 0) {
    result = result * 10 + checkNumber % 10;
    checkNumber = Math.floor(checkNumber / 10);
  }
  
  return result;
}
