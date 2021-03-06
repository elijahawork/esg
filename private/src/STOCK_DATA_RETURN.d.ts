declare type STOCK_DATA_RETURN = {
  [ticker: string]: {
    assetType: string;
    assetMainType: string;
    cusip: string;
    symbol: string;
    description: string;
    bidPrice: number;
    bidSize: number;
    bidId: string;
    askPrice: number;
    askSize: number;
    askId: string;
    lastPrice: number;
    lastSize: number;
    lastId: string;
    openPrice: number;
    highPrice: number;
    lowPrice: number;
    bidTick: string;
    closePrice: number;
    netChange: number;
    totalVolume: number;
    quoteTimeInLong: number;
    tradeTimeInLong: number;
    mark: number;
    exchange: string;
    exchangeName: string;
    marginable: boolean;
    shortable: boolean;
    volatility: number;
    digits: number;
    '52WkHigh': number;
    '52WkLow': number;
    nAV: number;
    peRatio: number;
    divAmount: number;
    divYield: number;
    divDate: string;
    securityStatus: string;
    regularMarketLastPrice: number;
    regularMarketLastSize: number;
    regularMarketNetChange: number;
    regularMarketTradeTimeInLong: number;
    netPercentChangeInDouble: number;
    markChangeInDouble: number;
    markPercentChangeInDouble: number;
    regularMarketPercentChangeInDouble: number;
    delayed: boolean;
    realtimeEntitled: boolean;
  };
};
