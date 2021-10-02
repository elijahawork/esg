import React from 'react';

export class LeftColumnDisplayTypeSelection extends React.Component {
  render() {
    return (
      <>
        <ul id="Left-Column-Display-Type-Selection">
          <li id='my-portfolio' className="left-column-display-option selected">
            <button>MY PORTFOLIO</button>
          </li>
          <li id='history' className='left-column-display-option'>
            <button >HISTORY</button>
          </li>
        </ul>
      </>
    );
  }
}
