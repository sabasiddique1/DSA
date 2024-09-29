// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 
var maxProfit = function(prices) {
    let maxProfit = 0;  
    let minPrice = prices[0];  
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; 
        } else {
            let profit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    
    return maxProfit; 
};

const prices = [7,1,5,3,6,4]

console.log(maxProfit(prices))
