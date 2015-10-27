import React, { PropTypes, Component } from 'react';
import { diffProps } from '../../utils';
import './Taskbar.scss';
import { StartBtn, TaskbarWindowsList } from '../';

class Taskbar extends Component {
  static propTypes = {
    position: PropTypes.any,
    windows: PropTypes.any,
    onSelectWindow: PropTypes.any
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const className = this.props.position || 'bottom';

    return (
      <span {...diffProps(this, Taskbar)} id="taskbar" className={className} >
        <span>
          <StartBtn />
          <TaskbarWindowsList windows={this.props.windows} onActive={this.props.onSelectWindow}/>
        </span>
      </span>
    );
  }
}

export default Taskbar;
