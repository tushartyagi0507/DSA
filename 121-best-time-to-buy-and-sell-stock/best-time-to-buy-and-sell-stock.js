/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0]
    let maxProfit = 0

    for(i=0; i< prices.length; i ++){
        if(prices[i]-min > maxProfit){
            maxProfit = prices[i] - min
        }
        if(prices[i] < min){
            min = prices[i]
        }
    }
    return maxProfit
};



// function maxProfit(prices) {
//     let minPrice = Infinity;
//     let maxProfit = 0;

//     for (let price of prices) {
//         if (price < minPrice) {
//             minPrice = price; // update the lowest price
//         } else {
//             maxProfit = Math.max(maxProfit, price - minPrice); // update the max profit
//         }
//     }

//     return maxProfit;
// }
