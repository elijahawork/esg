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
      <div>
        {this.state.score}
      </div>
    </>
  }
}