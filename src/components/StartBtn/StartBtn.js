import React, { PropTypes, Component } from 'react';
import { diffProps } from '../../utils';
import './StartBtn.scss';

class StartBtn extends Component {
  static propTypes = {
    position: PropTypes.any
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span {...diffProps(this, StartBtn)} id="startbtn" />
    );
  }
}

export default StartBtn;
