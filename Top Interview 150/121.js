/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
   
    let potentialProfit = prices[i] - minPrice;

    if (potentialProfit > maxProfit) {
            maxProfit = potentialProfit;
    }
  }
  return maxProfit;
  };

  console.log(maxProfit([7,6,4,3,1]))