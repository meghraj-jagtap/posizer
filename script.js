function calculatePositionSize() {
    const stockPrice = parseFloat(document.getElementById('stockPrice').value);
    const capital = parseFloat(document.getElementById('capital').value);
    const leverage = parseFloat(document.getElementById('leverage').value);
    const stopLossPercent = parseFloat(document.getElementById('stopLossPercent').value);
    const targetPercent = parseFloat(document.getElementById('targetPercent').value);

    if (isNaN(stockPrice) || stockPrice <= 0) {
        alert('Please enter a valid stock price.');
        return;
    }

    // Calculate the actual capital with leverage
    const totalBuyingPower = capital * leverage;

    // Calculate risked amount per trade (2% of 50k)
    const riskedAmount = (capital * (stopLossPercent / 100));

    // Calculate position size (number of shares to buy)
    const positionSize = totalBuyingPower / stockPrice;

    // Calculate stop-loss price
    const stopLossPrice = stockPrice - (riskedAmount / positionSize);

    // Calculate target price
    const targetPrice = stockPrice * (1 + (targetPercent / 100));

    // Calculate reward amount per trade
    const rewardAmount = positionSize * (targetPrice - stockPrice);

    // Update the table with the calculated values
    document.getElementById('positionSize').textContent = `${positionSize.toFixed(2)} shares`;
    document.getElementById('stopLossPrice').textContent = `₹${stopLossPrice.toFixed(2)}`;
    document.getElementById('targetPrice').textContent = `₹${targetPrice.toFixed(2)}`;
    document.getElementById('riskedAmount').textContent = `₹${riskedAmount.toFixed(2)}`;
    document.getElementById('rewardAmount').textContent = `₹${rewardAmount.toFixed(2)}`;
}
