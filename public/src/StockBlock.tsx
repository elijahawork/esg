import React from 'react';
import InvestedStock from './InvestedStock';

type Props = {
  stocksInvestedIn: StockInvestedIn[];
}
type State =  {
  stocksInvestedIn: StockInvestedIn[];
}

export default class StockBlock extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { ...props };
  }
  render() {
    return <>
      {this.state.stocksInvestedIn.map(stock => <InvestedStock stock={stock} />)}
    </>
  }
}