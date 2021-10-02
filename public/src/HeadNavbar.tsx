import React from 'react';
export default class Headnavbar extends React.Component {
  render() {
    return (
      <ul>
        {['SECS', 'EXCHANGE', 'WALLET', 'ACCOUNT'].map((e, i) => (
          <li key={i}>
            <button>{e}</button>
          </li>
        ))}
      </ul>
    );
  }
}
