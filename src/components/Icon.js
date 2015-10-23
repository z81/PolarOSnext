import React, { PropTypes, Component } from 'react';

class Icon extends Component {
  static propTypes = {
    children: PropTypes.any,
    text: PropTypes.string,
    icon: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<span>
      <span className={`icon icon-${this.props.icon}`} />
      {this.props.text}
    </span>);
  }
}

export default Icon;
