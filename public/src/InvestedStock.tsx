import React from 'react';

type Props = {
  stock: StockInvestedIn;
}

export default class InvestedStock extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return <div className='invested-stock'>
      <div>
        <div>
          <span className='stock-name'>{this.props.stock.name}</span>&nbsp;&nbsp;
          <span className='stock-ticker'>{this.props.stock.ticker}</span>
        </div>
        <div className='stock-purchase-time'>3:14 PM</div>
      </div>
      <div className="stock-cost">
        $101.20
      </div>
      <div className='stock-score'>
        99
      </div>
    </div>
  }
}