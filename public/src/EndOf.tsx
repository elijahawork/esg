import React from 'react';
type EndOfType = {
  type: string;
};
export default class EndOf extends React.Component<EndOfType> {
  constructor(props: EndOfType) {
    super(props);
  }

  render() {
    return <>END OF {this.props.type.toUpperCase()}</>;
  }
}
