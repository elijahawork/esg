import React from 'react';
import SectorsInterestedInSelection from './SectorsInterestedInSelection';
import Slider from './Slider';

export default class RightColumn extends React.Component {
  render() {
    return (
      <>
        <Slider title="environment" initialPosition={0} />
        <Slider title="social" initialPosition={0} />
        <Slider title="government" initialPosition={0} />
        Sectors Interested In
        <SectorsInterestedInSelection />
      </>
    );
  }
}
