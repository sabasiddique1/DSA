/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let profitMap = {};

    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            let profit = prices[i + 1] - prices[i];
            profitMap[i] = profit;
            maxProfit += profit;

            console.log(`Day ${i + 1}: Buy at ${prices[i]}, Sell at ${prices[i + 1]}, Profit: ${profit}`);
        }
    }

    console.log('Profit breakdown by days:', profitMap);
    console.log('Total Max Profit:', maxProfit);

    return maxProfit;
};

// Example usage
const prices = [7, 1, 5, 3, 6, 4];
console.log('Stock Prices:', prices);
console.log('Maximum Profit:', maxProfit(prices));
