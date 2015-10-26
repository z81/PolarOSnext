import React, { PropTypes, Component } from 'react';
import { diffProps } from '../../utils';
import './Taskbar.scss';

class Taskbar extends Component {
  static propTypes = {
    position: PropTypes.any
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const className = this.props.position || 'bottom';

    return (
      <span {...diffProps(this, Taskbar)} id="taskbar" className={className}>

      </span>
    );
  }
}

export default Taskbar;
