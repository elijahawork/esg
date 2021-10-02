import React from 'react';
import HeadNavbar from './HeadNavbar';
import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';

export class App extends React.Component {
  render() {
    return (
      <div id ='root'>
        <HeadNavbar />
        <div id='body'>
            <LeftColumn/>
            <MiddleColumn/>
            <RightColumn/>
        </div>
      </div>
    );
  }
}
