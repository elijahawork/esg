import React from 'react';
import StockBlock from './StockBlock';
import StockOfferHeader from './StockOfferHeader';

export default class MiddleColumn extends React.Component {
  render() {
    return (
      <div id ='middle-column'>
        <StockOfferHeader />
        <StockBlock
          stocksInvestedIn={[
            { date: new Date(), name: 'urmom', ticker: 'urmm' },
            { date: new Date(), name: 'urmom', ticker: 'urmm' },
            { date: new Date(), name: 'urmom', ticker: 'urmm' },
          ]}
        />
      </div>
    );
  }
}
