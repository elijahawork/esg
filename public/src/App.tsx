import React from 'react';
import HeadNavbar from './HeadNavbar';
import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';

export class App extends React.Component {
  render() {
    return (
      <>
        <HeadNavbar />
        <ul>
          <li>
            <LeftColumn/>
          </li>
          <li>
            <MiddleColumn/>
          </li>
          <li>
            <RightColumn/>
          </li>
        </ul>
      </>
    );
  }
}
