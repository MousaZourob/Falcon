# Falcon
### Overview:
Mobile app built with **React Native (JavaScript)** that provides users a platform to monitor the status of their **Alpaca Paper Trading** account. All the info is fetched via **JSON** messages and updated live using the **Alpaca Paper Trading API**, and then displayed on the Dashboard or Activity screen. The API was set up using the **API Sauce** package and the minimal UI and styling was done with **CSS**. 

### Features:
* View core account info such as current balance and portfolio value
* Market scoreboard with indexes and exchanges such as SPY to gain a holistic view of the status of the stock market
* Detailed list of owned positions with comprehensive data on current price as well as change in price that updates live via the **Alpaca Paper Trading API**
* Order history to track BUY and SELL orders of positions
* Conditional styling that changes colour and direction of arrow based on if position is positive or negative. Allows users to gain a complete picture on the status of their portfolio as well as the market

### Demo:
<img src="https://github.com/MousaZourob/Falcon/blob/master/demo/demo1.png" width="400px"> <img src="https://github.com/MousaZourob/Falcon/blob/master/demo/demo2.png" width="400px">

### Packages: 
* **React Native (0.61):** https://reactnative.dev/docs/0.61/getting-started
* **Alpaca API:** https://alpaca.markets/docs/api-documentation/api-v2/
* **API Sauce for Node and React Native:** https://github.com/infinitered/apisauce
