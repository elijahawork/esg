import React from 'react';

export default class StockOfferHeader extends React.Component {
  constructor(props: never) {
    super(props)
  }
  render() {
    return <div className='stock-offer-header'>
      <ul>
        <li><h1>Ticker</h1></li>
        <li><h1>Price</h1></li>
        <li><h1>ESG</h1></li>
      </ul>
    </div>
  }
}