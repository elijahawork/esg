import React from "react";
import StockBlock from "./StockBlock";

export default class MiddleColumn extends React.Component {
  render() {
    return <>
      {/* <StockOfferHeader /> */}
      <StockBlock dateInvested={ new Date() }stocksInvestedIn={[] }/>

      </>
  }
}