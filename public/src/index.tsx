import ReactDOM from 'react-dom';
import React from 'react';

type RState = {
  timer: number;
};

class R extends React.Component<{}, RState> {
  constructor() {
    super({});
    this.state = { timer: 0 };
  }

  componentDidMount() {
    const c = setInterval(() => {
      const incrementTimer = (prevState: RState) => ({
        timer: prevState.timer + 1,
      });
      this.setState(incrementTimer);
      if (this.state.timer > 5) {
        clearInterval(c);
      }
    }, 1000);
  }
  render() {
    return <>Time Since Init: {this.state.timer}</>;
  }
}

ReactDOM.render(<R/>, document.body);
