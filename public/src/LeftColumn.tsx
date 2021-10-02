import React from 'react';
import EndOf from './EndOf';
import { LeftColumnDisplayTypeSelection } from './LeftColumnDisplayTypeSelection';
import OverallESGScore from './OverallESGScore';
import SearchBar from './SearchBar';
import StockBlock from './StockBlock';

export default class LeftColumn extends React.Component{
  render() {
    return <>
      <SearchBar />
      <LeftColumnDisplayTypeSelection />
      <OverallESGScore score={4}/>
      <StockBlock stocksInvestedIn={[]}/>
      <EndOf type="PORTFOLIO"/>
    </>
  }
}