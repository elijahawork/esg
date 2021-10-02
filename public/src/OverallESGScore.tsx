import React from 'react';

type ScoreContainer = {
  score: number;
}

export default class OverallESGScore extends React.Component<ScoreContainer, ScoreContainer> {
  constructor(props: ScoreContainer) {
    super(props);
    this.state = { ...props };
  }
  render() {
    return <>
      <div id='overall-esg-score'>
        Overall ESG Score <span className='esg-score'>{this.state.score}</span>
      </div>
    </>
  }
}