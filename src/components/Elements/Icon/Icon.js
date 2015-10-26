import React, { PropTypes, Component } from 'react';
import { diffProps } from '../../../utils';

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
      <span {...diffProps(this, Icon)} className={`icon icon-${this.props.icon}`} />
      {this.props.text}
    </span>);
  }
}

export default Icon;
