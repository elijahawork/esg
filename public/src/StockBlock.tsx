import React from 'react';
import InvestedStock from './InvestedStock';

type Props = {
  stocksInvestedIn: StockInvestedIn[];
  dateInvested: Date;
};
type State = {
  stocksInvestedIn: StockInvestedIn[];
};

export default class StockBlock extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { ...props };
  }
  private getFormattedDate() {
    const date = this.props.dateInvested;
    // get the abbr month
    const month = date.toLocaleDateString('default', { month: 'short' });
    // get the day of the month
    const day = date.getUTCDate();
    // get the year in full format yyyy
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  }
  render() {
    return (
      <div className="stock-block">
        {this.getFormattedDate()}
        <div className='stock-block-stock-container'>
          <ul>
            {this.state.stocksInvestedIn.map((stock) => {
              console.log(stock);
              
              return (
              <li>
                <InvestedStock stock={stock} />
              </li>
            )})}
          </ul>
        </div>
      </div>
    );
  }
}
