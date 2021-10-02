import ReactDOM from 'react-dom';
import React from 'react';
import TTSSPeak from './TTSSPeak';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <ul>
            <li>
              Home
            </li>
            <li>
              About
            </li>
            <li>
              Login
            </li>
            <li>Portfolio</li>
           </ul>
        </header>
        <nav></nav>

      </>
    );
  }
}

ReactDOM.render(<App />, document.body);

// mumble.start();

