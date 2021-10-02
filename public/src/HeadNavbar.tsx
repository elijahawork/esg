import React from 'react';
export default class Headnavbar extends React.Component {
  render() {
    return (
      <header id ='header'>
        <ul className="headnavbar">
          <li id="logo">SECS</li>
          <li id="exchange">
            <button className="selected">EXCHANGE</button>
          </li>
          <li id="wallet">
            <button>WALLET</button>
          </li>
          <li id="account">
            <button>ACCOUNT</button>
          </li>
        </ul>
        <button id="logout">LOG OUT</button>
      </header>
    );
  }
}
