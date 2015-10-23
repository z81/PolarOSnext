import React, { PropTypes, Component } from 'react';
import {diffObject} from '../utils';

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
    const realProps = diffObject(this.props, Object.keys(Icon.propTypes));

    return (<span>
      <span {...realProps} className={`icon icon-${this.props.icon}`} />
      {this.props.text}
    </span>);
  }
}

export default Icon;
