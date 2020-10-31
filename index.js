
const sum = function(fromN, toN) {
  if (fromN === toN) {
    return toN;
  }
  return toN + sum(fromN , toN - 1);
};

module.exports = sum;

