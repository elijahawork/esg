import React from 'react';
type Props = {
  title: string;
  initialPosition: number;
}
type State = {
  position: number;
}
export default class Slider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { position: props.initialPosition }
  }
  render() {
    return <>
    {this.props.title}
      ------
    </>
  }
}