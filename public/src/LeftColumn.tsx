import React from 'react';
import EndOf from './EndOf';
import { LeftColumnDisplayTypeSelection } from './LeftColumnDisplayTypeSelection';
import OverallESGScore from './OverallESGScore';
import SearchBar from './SearchBar';
import StockBlock from './StockBlock';

export default class LeftColumn extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <LeftColumnDisplayTypeSelection />
        <OverallESGScore score={46} />
        <StockBlock
          dateInvested={new Date()}
          stocksInvestedIn={[
            { date: new Date(), name: 'Apple', ticker: 'AAPL' },
          ]}
        />
        <EndOf type="PORTFOLIO" />
      </div>
    );
  }
}
